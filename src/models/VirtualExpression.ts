import { Log } from "./Log";
import { Project } from "./Project";
import { VirtualGroup } from "./VirtualGroup";
import { VirtualVariable } from "./VirtualVariable";

export type VirtualExpression = {
  name: string;
  normalizedName?: string;
  description?: string;
  expression: string;
  created?: Date;
  modified?: Date;
  id?: string;
  projectId?: string;
  virtualGroupId?: string;
  project?: Project;
  trackingLogs?: Log[];
  virtualGroup?: VirtualGroup;
  virtualVariables?: VirtualVariable[];
};
