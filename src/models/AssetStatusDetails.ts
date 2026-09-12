import { Log } from "./Log";

export type AssetStatusDetails = {
  nextCheck?: Date;
  lastCheck?: Date;
  lastValue?: Date;
  valueValidUntil?: Date;
  currentStatus: "ONLINE" | "OFFLINE" | "OUTDATED" | "UNKNOWN";
  checkCount?: number;
  sensorType?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
