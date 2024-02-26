import PropTypes from "prop-types";
import { dateFormatter } from "../utils/dateFormatter";
import { useEffect } from "react";

WeatherCard.propTypes = {
  data: PropTypes.object,
};

export function WeatherCard({ data }) {
  return (
    <div className="flex flex-col items-center rounded-xl text-slate-600 bg-slate-50 shadow-xl hover:shadow-lg transition-all p-5 ">
      <p className="text-primary-400 text-xs">{dateFormatter(data?.dt)}</p>
      <p className="font-bold text-2xl">{data?.name}</p>
      <img
        className="size-24"
        src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
      />
      <div>
        <p className="font-semibold text-6xl mt-4">{data?.main?.temp}°C</p>
      </div>
      <p className="px-2 py-1 mt-5 text-sm bg-primary-400 text-slate-50 rounded w-max">
        {`${data?.weather[0]?.main}, ${data?.weather[0]?.description} `}
      </p>
    </div>
  );
}
