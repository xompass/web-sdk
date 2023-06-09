import { Asset } from './Asset';
import { AssetState } from './AssetState';
import { Log } from './Log';
import { Sensor } from './Sensor';
import { SensorAssetState } from './SensorAssetState';

export type AlertNotification = {
  type?: string;
  subjectType?: string;
  name?: string;
  thresholdType?: string;
  from?: Date;
  to?: Date;
  opened?: Date;
  closed?: Date;
  length?: number;
  summary?: any;
  threshold?: any;
  notification?: Notification;
  projectInfo?: any;
  assetInfo?: any;
  sensorInfo?: any;
  sendAt?: Date;
  admins?: any[];
  managers?: any[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  assetStateId?: string;
  sensorId?: string;
  stateId?: string;
  asset?: Asset;
  assetState?: AssetState;
  trackingLogs?: Log[];
  sensor?: Sensor;
  state?: SensorAssetState;
};
