import { Asset } from "./Asset";
import { Log } from "./Log";

export type AssetRestrictionTable = {
  maxSensorsPerAsset?: number;
  maxSensorsPerAssetCeiling?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  asset?: Asset;
  trackingLogs?: Log[];
};
