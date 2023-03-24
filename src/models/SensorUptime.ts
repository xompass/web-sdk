import { Asset } from "./Asset";
import { Customer } from "./Customer";
import { Log } from "./Log";
import { Project } from "./Project";
import { Sensor } from "./Sensor";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";

export type SensorUptime = {
  type: SensorTypeLabel;
  from: Date;
  to: Date;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  customerId?: string;
  projectId?: string;
  sensorId?: string;
  trackingLogs?: Log[];
  asset?: Asset;
  customer?: Customer;
  project?: Project;
  sensor?: Sensor;
};
