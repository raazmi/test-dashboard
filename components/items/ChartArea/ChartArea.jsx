import { textAlign } from "@mui/system";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

const convertValue = (value) => `${Math.floor(value / 1000)}K`;

const convertValueTooltip = (value, name, props) => {
  name = "";
  props.name = "";
  return `$${Math.floor(value / 1000)}K`;
};

const data = [
  {
    name: "Jan",
    value: 26000,
  },
  {
    name: "Feb",
    value: 17000,
  },
  {
    name: "Mar",
    value: 25000,
  },
  {
    name: "Apr",
    value: 15000,
  },
  {
    name: "May",
    value: 24000,
  },
  {
    name: "Jun",
    value: 9000,
  },
  {
    name: "Jul",
    value: 16000,
  },
  {
    name: "Aug",
    value: 32000,
  },
  {
    name: "Sep",
    value: 28000,
  },
];

const ChartArea = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        width="100%"
        height="100%"
        data={data}
        margin={{
          top: 0,
          bottom: 0,
          left: -20,
          right: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2BC82" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#E2BC82" stopOpacity={0.7} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis tickFormatter={convertValue} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            textAlign: "center",
            borderRadius: "10px",
            background: "#ffffff",
            boxShadow: "0 4px 10px rgba(41,41,41,0.1)",
            border: 0,
          }}
          itemStyle={{
            fontSize: "20px",
            lineHeight: "20px",
            fontWeight: "600",
            color: "#E2BC82",
            textTransform: "uppercase",
          }}
          formatter={convertValueTooltip}
        />
        <CartesianGrid vertical={false} stroke="rgba(41,41,41,0.05)" />
        <Area
          type="monotone"
          dataKey="value"
          stroke="none"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartArea;
