import PropTypes from "prop-types";
import { Header } from "../components/Header";
import { LeftSidebar } from "../components/LeftSidebar";
import { WeatherCard } from "../components/WeatherCard";
import { BarChart } from "../components/BarChart.jsx";
import { PieChart } from "../components/PieChart.jsx";
import { GaugeChart } from "../components/GaugeChart.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dateFormatter } from "../utils/dateFormatter.js";

Dashboard.propTypes = {};

export function Dashboard() {
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pieSeries, setPieSeries] = useState([]);
  const [pieOptions, setPieOptions] = useState([]);
  const [barSeries, setBarSeries] = useState([]);
  const [barOptions, setBarOptions] = useState([]);

  useEffect(() => {
    if (!sessionStorage.token) {
      navigate("/");
    }
    getWeather();
    getForcast();
  }, []);

  useEffect(() => {
    let series = [];
    let options = [];
    let barSeriesData = [];
    let barOptionsData = [];
    let set = new Set([]);
    if (forecastData) {
      forecastData.list.forEach((item) => {
        const date = dateFormatter(item.dt).split(",")[0];
        barSeriesData.push(item?.main?.humidity);
        barOptionsData.push(dateFormatter(item.dt));
        if (!set.has(date)) {
          series.push(item?.main?.humidity);
          options.push(date);
          set.add(date);
        }
      });
    }
    setPieSeries(series);
    setPieOptions(options);
    setBarSeries(barSeriesData);
    setBarOptions(barOptionsData);
  }, [forecastData]);

  const getWeather = async () => {
    try {
      setLoading(true);
      const result = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=fe60fcdb1de110ae0d0c19768f038c36",
      );
      const data = await result.json();
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const getForcast = async () => {
    try {
      setLoading(true);
      const result = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=fe60fcdb1de110ae0d0c19768f038c36",
      );
      const data = await result.json();
      setForecastData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${
        loading && "cursor-progress"
      }w-full min-h-screen grid md:grid-cols-[300px,_auto]`}
    >
      <LeftSidebar />
      <div className="">
        <Header />
        <div className="p-5 space-y-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 items-start gap-8">
            {weatherData && (
              <>
                <WeatherCard data={weatherData} />
                {pieSeries.length > 0 && pieOptions.length > 0 && (
                  <PieChart pieOptions={pieOptions} pieSeries={pieSeries} />
                )}
                <GaugeChart humidity={weatherData?.main?.humidity} />
                <GaugeChart cloudiness={weatherData?.clouds?.all} />
              </>
            )}
          </div>
          <div className="grid  gap-4">
            {barOptions.length > 0 && barSeries.length > 0 && (
              <BarChart barOptions={barOptions} barSeries={barSeries} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
