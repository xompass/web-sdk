import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type TrafficFlowAnalysis = {
  name: string;
  description?: string;
  edges?: TrafficFlowAnalysisEdge[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  _kpis?: TrafficFlowAnalysisKPI[];
  _vertices?: TrafficFlowAnalysisVertice[];
  trackingLogs?: Log[];
  project?: Project;
  managers?: Manager[];
};

export type TrafficFlowAnalysisEdge = {
  verticeFromId?: string;
  verticeToId?: string;
  virtualExpressionId?: string;
  id?: string;
};

export type TrafficFlowAnalysisKPI = {
  name: string;
  description?: string;
  color?: string;
  virtualExpressionId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
};

export type TrafficFlowAnalysisVertice = {
  name: string;
  description?: string;
  color?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
};
