import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

GaugeChart.propTypes = {
  humidity: PropTypes.number,
  cloudiness: PropTypes.number,
};

export function GaugeChart({ humidity, cloudiness }) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (humidity) {
      setLabel("Humidity");
    } else if (cloudiness) {
      setLabel("Cloudiness");
    }
  }, [humidity, cloudiness]);

  const series = [humidity || cloudiness];

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
            color: "#4f46e5",
            offsetY: 76,
          },
          value: {
            offsetY: 26,
            fontSize: "22px",
            color: "#818cf8",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      colors: "#818cf8",
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
    labels: [label],
  };

  return (
    <div className="p-5 rounded-xl bg-slate-50 shadow-xl hover:shadow-lg transition-all">
      <Chart options={options} series={series} type="radialBar" height={220} />
    </div>
  );
}
