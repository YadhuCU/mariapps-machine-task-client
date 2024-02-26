import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import { dateFormatter } from "../utils/dateFormatter";

PieChart.propTypes = {
  pieSeries: PropTypes.array,
  pieOptions: PropTypes.array,
};

export function PieChart({ pieSeries, pieOptions }) {
  const [series, setSeries] = useState(pieSeries);
  const [options, setOptions] = useState({
    chart: {
      width: "100%",
      type: "pie",
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#818cf8",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    labels: pieOptions,
    title: {
      text: "Humidity Monochrome",
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },
    legend: {
      show: false,
    },
  });

  return (
    <div className="p-5 rounded-xl bg-slate-50 shadow-xl hover:shadow-lg transition-all">
      <Chart options={options} series={series} type="pie" />
    </div>
  );
}
