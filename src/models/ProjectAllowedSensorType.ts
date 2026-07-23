import { Log } from "./Log";
import { Project } from "./Project";
import { SensorType } from "./SensorType";

export type ProjectAllowedSensorType = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  sensorTypeId?: string;
  project?: Project;
  sensorType?: SensorType;
  trackingLogs?: Log[];
};
