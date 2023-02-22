import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
function LineGraph({XaxisContainsInLineGraph,YaxisContainsInLineGraph}) {
    const [data, setData]= useState({
        labels:XaxisContainsInLineGraph,
        datasets:[
          {
            label:"Total sells in last week",
            data:YaxisContainsInLineGraph,
            backgroundColor:'yellow',
            borderColor:'green',
            tension:0.4,
            fill:true,
            pointStyle:'rect',
            pointBorderColor:'blue',
            pointBackgroundColor:'#fff',
            showLine:true
          }
        ]
      })
      return (
        <div className="App">
          <Line data={data}></Line>
        </div>
      );
}

export default LineGraph