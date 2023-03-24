import { AssetTemplate } from "./AssetTemplate";
import { EventTriggerTemplate } from "./EventTriggerTemplate";
import { Log } from "./Log";

export type EventGroupTemplate = {
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  priority?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetTemplateId?: string;
  assetTemplate?: AssetTemplate;
  eventTriggerTemplates?: EventTriggerTemplate[];
  trackingLogs?: Log[];
};
