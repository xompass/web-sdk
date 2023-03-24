import { Log } from "./Log";
import { Project } from "./Project";
import { VirtualExpression } from "./VirtualExpression";
import { VirtualVariable } from "./VirtualVariable";

export type VirtualGroup = {
  name?: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  trackingLogs?: Log[];
  project?: Project;
  virtualExpressions?: VirtualExpression[];
  virtualVariables?: VirtualVariable[];
};
