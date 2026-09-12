import { Log } from "./Log";

export type EventType = {
  type: string;
  name: string;
  description?: string;
  allowFiles?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
