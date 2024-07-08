import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import type { HistoricalData } from "../types/module";

interface Props {
    history: HistoricalData[]
}

export const HistoryChart:React.FC<Props> = ({ history }) => {
  return (
    <ResponsiveContainer>
      <LineChart width={600} height={300} data={history}>
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};
