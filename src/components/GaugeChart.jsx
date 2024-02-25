import PropTypes from "prop-types";
import Chart from "react-apexcharts";

GaugeChart.propTypes = {};

export function GaugeChart() {
  const series = [67];
  const options = {
    chart: {
      height: 220,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 76,
          },
          value: {
            offsetY: 26,
            fontSize: "22px",
            color: undefined,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        // stops: [0, 50, 65, 91],
      },
    },
    // stroke: {
    //   dashArray: 4,
    // },
    labels: ["Humidity"],
  };

  return (
    <div className="p-5 rounded-xl bg-slate-100">
      <Chart options={options} series={series} type="radialBar" height={220} />
    </div>
  );
}
