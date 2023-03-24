import { Device } from "./Device";
import { DeviceEventComment } from "./DeviceEventComment";
import { DeviceEventData } from "./DeviceEventData";
import { DeviceEventStateChange } from "./DeviceEventStateChange";
import { Log } from "./Log";

export type DeviceEvent = {
  id?: string;
  type: string;
  hash: string;
  tags?: string[];
  muted: boolean;
  seen: boolean;
  hidden: boolean;
  starred: boolean;
  currentState?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  deviceId?: string;
  _comments?: DeviceEventComment[];
  _stateChanges?: DeviceEventStateChange[];
  device?: Device;
  data?: DeviceEventData[];
  trackingLogs?: Log[];
};
