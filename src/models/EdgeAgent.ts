import { Asset } from "./Asset";
import { Customer } from "./Customer";
import { Device } from "./Device";
import { Log } from "./Log";
import { TelegramChat } from "./TelegramChat";

export type EdgeAgent = {
  name?: string;
  description?: string;
  enabled: boolean;
  image: string;
  sharedPath: string;
  broker?: EdgeAgentBroker;
  brokers?: any;
  modules?: any;
  routes?: any;
  moduleParameters?: any;
  systems?: any;
  templateTagId?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  deviceId?: string;
  assets?: Asset[];
  customer?: Customer;
  device?: Device;
  edgeAgentAssets?: EdgeAgentAsset[];
  telegramChats?: TelegramChat[];
  trackingLogs?: Log[];
};

export type EdgeAgentAsset = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  edgeAgentId?: string;
  assetId?: string;
  asset?: Asset;
  edgeAgent?: EdgeAgent;
  trackingLogs?: Log[];
};

export type EdgeAgentBroker = {
  namespace?: string;
  host?: string;
  port?: number;
  qos?: "at-most-once" | "at-least-once" | "exactly-once";
  id?: string;
};
