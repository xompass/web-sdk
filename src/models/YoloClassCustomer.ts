import { Customer } from './Customer';
import { Log } from './Log';
import { YoloClass } from './YoloClass';

export type YoloClassCustomer = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  yoloClassId?: string;
  customerId?: string;
  trackingLogs?: Log[];
  yoloClass?: YoloClass;
  customer?: Customer;
};
