import { ReactNode } from "react";
import { CardChartData } from "../Charts/interface";
import moment from "moment";
export interface StabilityChartsprops {
  totalTestsChart: Array<CardChartData>;
  totalInfraFailsChart: Array<CardChartData>;
  totalUserErrorFailsChart: Array<CardChartData>;
  totalProductFailsChart: Array<CardChartData>;
  stabilityChart: Array<CardChartData>;
  lineChartData: Array<BarChartValue>;
  pieChartData: Array<PieChartValue>;
  totalTests: number;
  totalInfraFails: number;
  totalUserErrors: number;
  overallStability: number;
  totalProductFails: number;
  totalUnknownFails: number;
  totalPassedTests: number;
}

export type StabilityValue =
  | "totalProductFails"
  | "totalUserErrorFails"
  | "totalInfraFails"
  | "totalTests"
  | "totalUnknownFails";
export interface PieChartProps {
  data: Array<PieChartValue>;
}

export interface PieChartValue {
  name: string;
  value: number;
}

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

interface TableColumn {
  columnName: string;
  key: string;
  cssClass?: string;
  renderElement?: ReactNode;
  hasRowSpan?: boolean;
  subColumns?: Array<TableColumn>;
  colSpan?: number;
}

export interface TestPassTableProps {
  isLoading: boolean;
  filteredTestPasses: Array<any>;
  activeFilter: string;
  userTimezone: string;
}

export interface TestPassReleaseTrends {
  allReleases: Array<string>;
  releaseTrends: Array<{ [key: string]: any }>;
}

export interface Batch {
  batchId: number;
  batchName: string;
  description: string;
  dateCreated: Date;
}

export interface Course {
  batch?: Batch;
  courseId: number;
  courseName?: string;
  description?: string;
  dateCreated?: Date;
}