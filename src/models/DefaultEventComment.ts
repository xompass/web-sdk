import { Customer } from './Customer';
import { Log } from './Log';

export type DefaultEventComment = {
  code: string;
  content: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  customer?: Customer;
  trackingLogs?: Log[];
};
