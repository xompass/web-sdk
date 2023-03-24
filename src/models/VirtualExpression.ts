import { Log } from "./Log";
import { Project } from "./Project";
import { VirtualGroup } from "./VirtualGroup";
import { VirtualVariable } from "./VirtualVariable";

export type VirtualExpression = {
  name: string;
  description?: string;
  expression: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  virtualGroupId?: string;
  trackingLogs?: Log[];
  project?: Project;
  virtualGroup?: VirtualGroup;
  virtualVariables?: VirtualVariable[];
};
