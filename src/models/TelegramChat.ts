import { Customer } from './Customer';
import { Device } from './Device';
import { EdgeAgent } from './EdgeAgent';
import { EventTrigger } from './EventTrigger';
import { Log } from './Log';

export type TelegramChat = {
  name: string;
  description?: string;
  chatId: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  trackingLogs?: Log[];
  customer?: Customer;
  devices?: Device[];
  edgeAgents?: EdgeAgent[];
  eventTriggers?: EventTrigger[];
};
