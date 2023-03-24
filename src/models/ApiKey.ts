import { Customer } from "./Customer";
import { Log } from "./Log";

export type ApiKey = {
  name: string;
  id?: string;
  ttl?: number;
  scopes?: string[];
  enabled?: boolean;
  testMode?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  customerId?: string;
  customer?: Customer;
  trackingLogs?: Log[];
};
