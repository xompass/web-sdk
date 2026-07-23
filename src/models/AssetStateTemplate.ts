import { AssetTemplate } from "./AssetTemplate";
import { EventTriggerAssetStateTemplate } from "./EventTriggerAssetStateTemplate";
import { Log } from "./Log";
import { SensorAssetStateTemplate } from "./SensorAssetStateTemplate";
import { SensorTemplate } from "./SensorTemplate";

export type AssetStateTemplate = {
  name?: string;
  schedulerType: "NONE" | "CRON";
  scheduler?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetTemplateId?: string;
  assetTemplate?: AssetTemplate;
  eventTriggerAssetStateTemplates?: EventTriggerAssetStateTemplate[];
  sensorTemplates?: SensorTemplate[];
  stateTemplates?: SensorAssetStateTemplate[];
  trackingLogs?: Log[];
};
