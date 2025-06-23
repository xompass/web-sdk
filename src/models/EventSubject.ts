import { Customer } from './Customer';
import { EventTrigger } from './EventTrigger';
import { Log } from './Log';

export type EventSubject = {
  name: string;
  subject: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  customer?: Customer;
  eventTriggers?: EventTrigger[];
  trackingLogs?: Log[];
};
