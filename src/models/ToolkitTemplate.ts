import { Log } from './Log';
import { Tool } from './Tool';

export type ToolkitTemplate = {
  name?: string;
  description?: string;
  logo?: string;
  sector?: string;
  module: string;
  defaultEnabledToolIds?: string[];
  defaultEnabledAdminToolIds?: string[];
  keywords?: string[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  adminToolIds?: string[];
  toolIds?: string[];
  trackingLogs?: Log[];
  adminTools?: Tool[];
  tools?: Tool[];
};
