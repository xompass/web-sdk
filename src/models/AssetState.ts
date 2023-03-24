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
  schedulerType: string;
  scheduler?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  templateId?: string;
  asset?: Asset;
  alerts?: Alert[];
  alertHistory?: AlertHistory[];
  template?: AssetStateTemplate;
  eventTriggerAssetStates?: EventTriggerAssetState[];
  trackingLogs?: Log[];
  sensors?: Sensor[];
  states?: SensorAssetState[];
};
