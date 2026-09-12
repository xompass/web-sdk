import { Log } from "./Log";

export type DeviceEventStateChange = {
  id?: string;
  name: "OPENED" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  userId?: string;
  principalType?: string;
  trackingLogs?: Log[];
  user?: any;
};
