import { Asset } from "./Asset";
import { Data } from "./Data";
import { Log } from "./Log";
import { Sensor } from "./Sensor";
import { Summary } from "./Summary";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";

export type Dataset = {
  id?: string;
  type?: SensorTypeLabel;
  testMode?: boolean;
  from?: Date;
  to?: Date;
  length?: number;
  archived?: boolean;
  expiresAt?: Date;
  isHealthcheck?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  assetId?: string;
  _data?: Data[];
  sensorId?: string;
  summaryId?: string;
  asset?: Asset;
  trackingLogs?: Log[];
  sensor?: Sensor;
  summary?: Summary;
};
