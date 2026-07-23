import { Customer } from "./Customer";
import { Log } from "./Log";
import { YoloClass } from "./YoloClass";

export type YoloClassCustomer = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  yoloClassId?: string;
  customerId?: string;
  customer?: Customer;
  trackingLogs?: Log[];
  yoloClass?: YoloClass;
};
