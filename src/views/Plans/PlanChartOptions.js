import rs from "@/utilities/apexChartsLocale";
export default {
  chart: {
    locales: [rs],
    defaultLocale: "rs"
  },
  plotOptions: {
    bar: {
      barHeight: "70%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "center"
      }
    }
  },
  colors: [
    "#33b2df",
    "#546E7A",
    "#d4526e",
    "#13d8aa",
    "#A5978B",
    "#2b908f",
    "#f9a3a4",
    "#90ee7e",
    "#f48024",
    "#69d2e7"
  ],
  dataLabels: {
    enabled: true,
    textAnchor: "middle",
    style: {
      fontSize: "24px",
      colors: ["#fff"]
    },
    formatter: function(val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
    dropShadow: {
      enabled: true
    }
  },

  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: []
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  title: {
    text: "Realizacija",
    align: "center",
    floating: true
  },
  subtitle: {
    text: "Realizacija planova prodaje u procentima",
    align: "center"
  },
  legend: {
    show: false,
    position: "bottom"
  }
  //   tooltip: {
  //     theme: "dark",
  //     x: {
  //       show: false
  //     },
  //     y: {
  //       title: {
  //         formatter: function() {
  //           return "";
  //         }
  //       }
  //     }
  //   }
};
