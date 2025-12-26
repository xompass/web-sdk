import { Customer } from './Customer';
import { Log } from './Log';

export type Dispatch = {
  url: string;
  enabled?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  customer?: Customer;
  trackingLogs?: Log[];
};
