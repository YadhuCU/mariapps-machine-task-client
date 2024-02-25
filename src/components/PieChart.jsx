import PropTypes from "prop-types";
import Chart from "react-apexcharts";

PieChart.propTypes = {};

const series = [25, 15, 44, 55, 41, 17];

const options = {
  chart: {
    width: "100%",
    type: "pie",
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  theme: {
    monochrome: {
      enabled: true,
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
      },
    },
  },
  title: {
    text: "Monochrome Pie",
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
};

export function PieChart() {
  return (
    <div className="p-5 rounded-xl bg-slate-100">
      <Chart options={options} series={series} type="pie" />
    </div>
  );
}
