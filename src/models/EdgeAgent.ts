import { Asset } from './Asset';
import { Customer } from './Customer';
import { Device } from './Device';
import { Log } from './Log';
import { TelegramChat } from './TelegramChat';

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
  customer?: Customer;
  device?: Device;
  assets?: Asset[];
  edgeAgentAssets?: EdgeAgentAsset[];
  trackingLogs?: Log[];
  telegramChats?: TelegramChat[];
};

export type EdgeAgentBroker = {
  namespace?: string;
  host?: string;
  port?: number;
  qos?: string;
  id?: string;
};

export type EdgeAgentAsset = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  edgeAgentId?: string;
  assetId?: string;
};

export type EdgeAgentBrokers = Record<
  string,
  {
    host?: string;
    port?: number;
  }
>;

export type EdgeAgentModules = Record<string, Record<string, any>>;

export type EdgeAgentModuleParameters = Record<string, Record<string, any>>;

export type EdgeAgentRoutes = Record<
  string,
  Record<string, Record<string, string[]>>
>;

export type EdgeAgentSystems = Record<string, any>;
