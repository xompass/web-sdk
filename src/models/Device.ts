import { Customer } from './Customer';
import { DeviceEvent } from './DeviceEvent';
import { DeviceToken } from './DeviceToken';
import { EdgeAgent } from './EdgeAgent';
import { Log } from './Log';
import { TelegramChat } from './TelegramChat';

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
  customer?: Customer;
  events?: DeviceEvent[];
  token?: DeviceToken;
  edgeAgents?: EdgeAgent[];
  trackingLogs?: Log[];
  telegramChats?: TelegramChat[];
};

export type DeviceConfig = {
  id?: string;
  tunnels?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
};

export type DeviceLogs = {
  id: string;
  type: string;
  agent?: string[];
  modules?: Record<string, string[]>;
};

export type DeviceUptime = {
  id: string;
  started: Date;
  uptime: number;
  version: string;
};

export type DeviceVersion = {
  id: string;
  type: string;
  content: {
    v: string;
  };
};

export type DeviceStatusError = {
  message: string;
  name: string;
  statusCode: number;
};
