import PropTypes from "prop-types";
import Chart from "react-apexcharts";

BarChart.propTypes = {
  barSeries: PropTypes.array,
  barOptions: PropTypes.array,
};

export function BarChart({ barOptions, barSeries }) {
  const series = [
    {
      name: "Humidity",
      data: barSeries,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },

    fill: {
      colors: "#818cf8",
    },

    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: barOptions,
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },

    title: {
      text: "Weekly Forecast Humidity",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  return (
    <div className="p-5 rounded-xl bg-slate-50 shadow-xl hover:shadow-lg transition-all">
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
}
