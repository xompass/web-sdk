import { Asset } from './Asset';
import { EventGroupTemplate } from './EventGroupTemplate';
import { EventTrigger } from './EventTrigger';
import { Log } from './Log';

export type EventGroup = {
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  priority?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  templateId?: string;
  asset?: Asset;
  template?: EventGroupTemplate;
  eventTriggers?: EventTrigger[];
  trackingLogs?: Log[];
};
