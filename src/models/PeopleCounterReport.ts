import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type PeopleCounterReport = {
  name: string;
  description?: string;
  chart?: PeopleCounterReportChart;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  _series?: PeopleCounterReportSerie[];
  projectId?: string;
  trackingLogs?: Log[];
  managers?: Manager[];
  project?: Project;
};

export type PeopleCounterReportChart = {
  id?: string;
};

export type PeopleCounterReportSerie = {
  name: string;
  description?: string;
  chart?: PeopleCounterReportSerieChart;
  percentageChart?: PeopleCounterReportSeriePercentageChart;
  trendChart?: PeopleCounterReportSerieTrendChart;
  profileChart?: PeopleCounterReportSerieProfileChart;
  heatmap?: PeopleCounterReportSerieHeatmap;
  kpi?: PeopleCounterReportSerieKPI;
  table?: PeopleCounterReportSerieTable;
  virtualExpressionId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
};

export type PeopleCounterReportSerieChart = {
  type?: string;
  color?: string;
  visible?: boolean;
  id?: string;
};
export type PeopleCounterReportSeriePercentageChart = {
  visible?: boolean;
  id?: string;
};
export type PeopleCounterReportSerieTrendChart = {
  visible?: boolean;
  id?: string;
};
export type PeopleCounterReportSerieProfileChart = {
  visible?: boolean;
  id?: string;
};
export type PeopleCounterReportSerieHeatmap = {
  visible?: boolean;
  id?: string;
};
export type PeopleCounterReportSerieKPI = {
  visible?: boolean;
  id?: string;
};
export type PeopleCounterReportSerieTable = {
  visible?: boolean;
  id?: string;
};
