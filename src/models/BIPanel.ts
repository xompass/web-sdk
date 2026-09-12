import { Log } from "./Log";
import { Project } from "./Project";

export type BIPanel = {
  name: string;
  description?: string;
  chart?: BIPanelChart;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  _series?: BIPanelSerie[];
  projectId?: string;
  project?: Project;
  series?: BIPanelSerie[];
  trackingLogs?: Log[];
};

export type BIPanelChart = {
  id?: string;
};

export type BIPanelSerie = {
  name: string;
  description?: string;
  chart?: BIPanelSerieChart;
  virtualExpressionId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};

export type BIPanelSerieChart = {
  type?: string;
  color?: string;
  visible?: boolean;
  id?: string;
};
