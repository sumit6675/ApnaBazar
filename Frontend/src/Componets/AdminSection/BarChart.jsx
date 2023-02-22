import React from "react";
import Chart from "react-apexcharts";

function Barchart({ TodayBarDataByQty, name, todayText, TodayCatergory ,TodayYaxisText,colorOfBar }) {
  return (
    <React.Fragment>
      <div className="container-fluid mb-5" w="100%">
        <Chart
          type="bar"
          width="95%"
          height={400}
          series={[
            {
              name: name,
              data: TodayBarDataByQty,
            },
          ]}
          options={{
            colors: [colorOfBar],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: TodayCatergory,
              title: {
                text: todayText,
                style: { color: colorOfBar, fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: [colorOfBar] },
              },
              title: {
                text: TodayYaxisText,
                style: { color: colorOfBar, fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Barchart;
