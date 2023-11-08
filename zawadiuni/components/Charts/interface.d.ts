import { PieProps } from "recharts";

export interface DataCardProps {
  cardTitle: string;
  cardValue: string;
  chartData?: Array<CardChartData>;
  styles?: { [key: string]: any };
}

export interface CardChartData {
  dataValue: number;
  dataDate: string;
}

export interface PieChartProps {
  data: Array<PieChartValue>;
}

export interface PieChartValue {}

export interface BarChartProps {
  data: Array<BarChartValue>;
}

export interface BarChartValue {
  name: string;
  passedValue: number;
  infraValue: number;
  userErrorValue: number;
  productValue: number;
  unknownFails: number;
}
