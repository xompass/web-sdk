import { Device } from './Device';
import { Log } from './Log';

export type DeviceToken = {
  id?: string;
  ttl?: number;
  scopes?: string[];
  enabled?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  deviceId?: string;
  device?: Device;
  trackingLogs?: Log[];
};
