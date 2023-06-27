import { Log } from './Log';
import { Manager } from './Manager';

export type View = {
  name: string;
  description?: string;
  module: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
  managers?: Manager[];
};
