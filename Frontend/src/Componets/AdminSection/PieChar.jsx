// please install npm install react-apexcharts apexcharts
import React from "react";
import Chart from "react-apexcharts";
function Piechart() {
  const stdudentSubject = [
    "Hindi",
    "Math",
    "English",
    "Science",
    "SocialScience",
  ];
  const studentMarks = [65, 76, 85, 65, 64];
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <h3 className="mt-3">Welcome to Piechart </h3>
        <Chart
          type="pie"
          width={1349}
          height={550}
          series={studentMarks}
          options={{
            title: { text: "Student PieChart" },
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
