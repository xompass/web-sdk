import { Log } from './Log';

export type TimeZone = {
  value: string;
  abbr: string;
  offset: number;
  isdst: boolean;
  text: string;
  utc?: string[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
