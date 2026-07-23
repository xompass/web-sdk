import { Log } from "./Log";
import { Project } from "./Project";
import { Sensor } from "./Sensor";
import { VirtualExpression } from "./VirtualExpression";
import { VirtualGroup } from "./VirtualGroup";

export type VirtualVariable = {
  type?: string;
  name: string;
  description?: string;
  value?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  sensorId?: string;
  virtualGroupId?: string;
  project?: Project;
  sensor?: Sensor;
  trackingLogs?: Log[];
  virtualExpressions?: VirtualExpression[];
  virtualGroup?: VirtualGroup;
};
