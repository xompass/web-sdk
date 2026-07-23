import { Log } from "./Log";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";

export type SensorType = {
  type: SensorTypeLabel;
  name: string;
  description?: string;
  allowVirtualExpressions?: boolean;
  allowFiles?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
