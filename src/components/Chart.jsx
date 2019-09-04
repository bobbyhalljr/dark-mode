import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  Area,
  CartesianGrid,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const Chart = ({ sparklineData }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <ComposedChart width={500} height={300} data={formattedData}>
      <Area type="linear" dataKey="value" fill='#8884d8' stroke="#8884e2" />
      <Line type="linear" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#f1f1f1" strokeDasharray="0 0" />
      <XAxis dataKey="date" interval={5} />
      <YAxis />
      <Legend />
      <Tooltip />
    </ComposedChart>
  );
};

export default Chart;
