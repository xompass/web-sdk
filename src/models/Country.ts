import { Log } from "./Log";

export type Country = {
  name: string;
  iso: string;
  code: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
