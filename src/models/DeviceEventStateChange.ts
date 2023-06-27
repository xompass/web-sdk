import { Log } from './Log';

export type DeviceEventStateChange = {
  id?: string;
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  userId?: string;
  principalType?: string;
  user?: any;
  trackingLogs?: Log[];
};
