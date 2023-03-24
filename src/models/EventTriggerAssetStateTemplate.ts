import { AssetStateTemplate } from "./AssetStateTemplate";
import { EventTriggerRuleTemplate } from "./EventTriggerRuleTemplate";
import { EventTriggerTemplate } from "./EventTriggerTemplate";
import { Log } from "./Log";

export type EventTriggerAssetStateTemplate = {
  type?: string;
  name?: string;
  enabled?: boolean;
  eventGroupingByMinutes?: number;
  muted?: boolean;
  hidden?: boolean;
  starred?: boolean;
  notifications?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetStateTemplateId?: string;
  eventTriggerTemplateId?: string;
  _ruleTemplates?: EventTriggerRuleTemplate[];
  assetStateTemplate?: AssetStateTemplate;
  eventTriggerTemplate?: EventTriggerTemplate;
  trackingLogs?: Log[];
};
