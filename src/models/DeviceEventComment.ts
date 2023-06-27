import { Log } from './Log';

export type DeviceEventComment = {
  id?: string;
  content: string;
  edited?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  userId?: string;
  principalType?: string;
  user?: any;
  trackingLogs?: Log[];
};
