import { Customer } from "./Customer";
import { GlobalEventState } from "./GlobalEventState";
import { Log } from "./Log";

export type EventState = {
  name: string;
  normalizedName?: string;
  description?: string;
  type: string;
  colors: any;
  created?: Date;
  modified?: Date;
  id?: string;
  customerId?: string;
  globalEventStateId?: string;
  customer?: Customer;
  globalEventState?: GlobalEventState;
  trackingLogs?: Log[];
};
