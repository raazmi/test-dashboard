import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartRadialWraper } from "./ChartRadial.styled";

const data = [
  {
    name: "Kids",
    uv: 70,
    fill: "#20C997",
  },
  {
    name: "Men",
    uv: 52,
    fill: "#FF7049",
  },
  {
    name: "Women",
    uv: 80,
    fill: "#00ADD3",
  },
  {
    name: "Electronics",
    uv: 65,
    fill: "#A93BFF",
  },
];

const ChartRadial = () => {
  return (
    <ChartRadialWraper>
      <ResponsiveContainer width="100%" height={350}>
        <RadialBarChart
          cx="50%"
          cy="58%"
          innerRadius="10%"
          outerRadius="100%"
          barSize={16}
          startAngle={0}
          endAngle={360}
          data={data}
          >
          <RadialBar
            minAngle={10}
            dataKey="uv"
            legendType="circle"
            strokeLinejoin="miter"
            background
          />
          <Legend
            iconSize={8}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartRadialWraper>
  );
};

export default ChartRadial;
