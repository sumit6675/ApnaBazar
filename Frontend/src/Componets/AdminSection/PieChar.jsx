// please install npm install react-apexcharts apexcharts
import React from "react";
import Chart from "react-apexcharts";
function Piechart({stdudentSubject,studentMarks,PieChartText}) {
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <Chart
          type="pie"
          width="85%"
          height={550}
          series={studentMarks}
          options={{
            title: { text: PieChartText },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: stdudentSubject,
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Piechart;
