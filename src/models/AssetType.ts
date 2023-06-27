import { AssetWizardType } from './AssetWizardType';
import { EventType } from './EventType';
import { Log } from './Log';
import { SensorType } from './SensorType';

export type AssetType = {
  type: string;
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetWizardTypeIds?: string[];
  eventTypeIds?: string[];
  sensorTypeIds?: string[];
  assetWizardTypes?: AssetWizardType[];
  eventTypes?: EventType[];
  trackingLogs?: Log[];
  sensorTypes?: SensorType[];
};
