import { Log } from "./Log";

export type ProjectTag = {
  name: string;
  description?: string;
  icon?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
