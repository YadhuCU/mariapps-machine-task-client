import PropTypes from "prop-types";
import { Header } from "../components/Header";
import { LeftSidebar } from "../components/LeftSidebar";
import { WeatherCard } from "../components/WeatherCard";
import { BarChart } from "../components/BarChart.jsx";
import { PieChart } from "../components/PieChart.jsx";
import { GaugeChart } from "../components/GaugeChart.jsx";

Dashboard.propTypes = {};

export function Dashboard() {
  return (
    <div className="w-full min-h-screen grid md:grid-cols-[300px,_auto]">
      <LeftSidebar />
      <div className="">
        <Header />
        <div className="p-5 space-y-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <WeatherCard />
            <GaugeChart />
            <GaugeChart />
            <GaugeChart />
          </div>
          <div className="grid xl:grid-cols-[1fr,_2fr] gap-4">
            <PieChart />
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
}
