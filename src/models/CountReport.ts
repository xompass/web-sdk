import { Customer } from './Customer';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type CountReport = {
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  projectId?: string;
  sections?: CountReportSection[];
  customer?: Customer;
  trackingLogs?: Log[];
  managers?: Manager[];
  project?: Project;
};

export type CountReportSection = {
  name: string;
  dateRange: 'day' | 'week' | 'month';
  elements?: CountReportElement[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id: string;
  countReportId: string;
};

export type CountReportElement =
  | CountReportElementIndicator
  | CountReportElementChart
  | CountReportElementTable
  | CountReportElementHeatmap;

export type CountReportElementBase = {
  name: string;
  columns: number;
  groupInterval: 'hour' | 'day' | 'week' | 'month';
};

export type CountReportElementIndicator = CountReportElementBase & {
  type: 'indicator';
  seriesList: [CountReportSeriesIndicator];
};

type CountReportSeriesBase = {
  name: string;
  color?: string;
  suffix?: string;
  prefix?: string;
  precision?: number;
  virtualExpressionId: string;
};

export type CountReportSeriesIndicator = Omit<CountReportSeriesBase, 'name'> & {
  addDifference?: boolean;
  addChart?: boolean;
  chartType?: 'line' | 'bar' | 'area' | 'scatter';
};

export type CountReportElementChart = CountReportElementBase & {
  type: 'chart';
  xAxis: string;
  yAxis: string;
  seriesList: CountReportSeriesChart[];
};

export type CountReportSeriesChart = CountReportSeriesBase & {
  chartType: 'line' | 'bar' | 'area' | 'scatter';
};

export type CountReportElementTable = CountReportElementBase & {
  type: 'table';
  seriesList: CountReportSeriesTable[];
};

export type CountReportSeriesTable = CountReportSeriesBase;

export type CountReportElementHeatmap = CountReportElementBase & {
  type: 'heatmap';
  seriesList: CountReportSeriesHeatmap[];
};

export type CountReportSeriesHeatmap = CountReportSeriesBase;
