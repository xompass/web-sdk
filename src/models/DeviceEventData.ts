import { Device } from './Device';
import { DeviceEvent } from './DeviceEvent';
import { Log } from './Log';

export type DeviceEventData = {
  id?: string;
  type: string;
  hash: string;
  tags?: string[];
  content: any;
  meta?: any;
  level?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  deviceId?: string;
  deviceEventId?: string;
  device?: Device;
  event?: DeviceEvent;
  trackingLogs?: Log[];
};
