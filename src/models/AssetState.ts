import { Alert } from "./Alert";
import { AlertHistory } from "./AlertHistory";
import { Asset } from "./Asset";
import { AssetStateTemplate } from "./AssetStateTemplate";
import { EventTriggerAssetState } from "./EventTriggerAssetState";
import { Log } from "./Log";
import { Sensor } from "./Sensor";
import { SensorAssetState } from "./SensorAssetState";

export type AssetState = {
  name?: string;
  schedulerType: "NONE" | "CRON";
  scheduler?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  templateId?: string;
  alertHistory?: AlertHistory[];
  alerts?: Alert[];
  asset?: Asset;
  eventTriggerAssetStates?: EventTriggerAssetState[];
  sensors?: Sensor[];
  states?: SensorAssetState[];
  template?: AssetStateTemplate;
  trackingLogs?: Log[];
};
