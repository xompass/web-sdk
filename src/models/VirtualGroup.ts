import { Log } from "./Log";
import { Project } from "./Project";
import { VirtualExpression } from "./VirtualExpression";
import { VirtualVariable } from "./VirtualVariable";

export type VirtualGroup = {
  name: string;
  normalizedName?: string;
  description?: string;
  created?: Date;
  modified?: Date;
  id?: string;
  projectId?: string;
  project?: Project;
  trackingLogs?: Log[];
  virtualExpressions?: VirtualExpression[];
  virtualVariables?: VirtualVariable[];
};
