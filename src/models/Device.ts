import { Customer } from "./Customer";
import { DeviceEvent } from "./DeviceEvent";
import { DeviceToken } from "./DeviceToken";
import { EdgeAgent } from "./EdgeAgent";
import { Log } from "./Log";
import { TelegramChat } from "./TelegramChat";

export type Device = {
  id?: string;
  name: string;
  enabled: boolean;
  description?: string;
  requested?: Date;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  customerId?: string;
  _config?: DeviceConfig;
  config?: DeviceConfig[];
  customer?: Customer;
  edgeAgents?: EdgeAgent[];
  events?: DeviceEvent[];
  telegramChats?: TelegramChat[];
  token?: DeviceToken;
  trackingLogs?: Log[];
};

export type DeviceConfig = {
  id?: string;
  tunnels?: any;
  properties?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  trackingLogs?: Log[];
};
