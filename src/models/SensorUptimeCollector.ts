import { Asset } from './Asset';
import { Customer } from './Customer';
import { Log } from './Log';
import { Project } from './Project';
import { Sensor } from './Sensor';
import { SensorTypeLabel } from './sensorTypes/SensorTypeLabel';

export type SensorUptimeCollector = {
  type: SensorTypeLabel;
  from: Date;
  to: Date;
  lifespan?: number;
  length?: number;
  httpMethod?: string;
  accessType?: string;
  method?: string;
  methodString?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  customerId?: string;
  projectId?: string;
  sensorId?: string;
  modelId?: string;
  modelName?: string;
  trackingLogs?: Log[];
  asset?: Asset;
  customer?: Customer;
  project?: Project;
  sensor?: Sensor;
  remoteModel?: any;
};
