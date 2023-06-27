import { Log } from './Log';

export type GlobalEventState = {
  name: string;
  description?: string;
  type: string;
  colors: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
