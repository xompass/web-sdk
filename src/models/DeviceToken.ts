import { Device } from './Device';
import { Log } from './Log';
import { RateLimit } from './RateLimit';

export type DeviceToken = {
  id?: string;
  ttl?: number;
  scopes?: string[];
  enabled?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  deviceId?: string;
  _rateLimit?: RateLimit;
  device?: Device;
  trackingLogs?: Log[];
};
