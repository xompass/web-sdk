import { Asset } from './Asset';
import { Log } from './Log';

export type AssetMilestone = {
  creationDate?: Date;
  firstSyncDate?: Date;
  activationDate?: Date;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  asset?: Asset;
  trackingLogs?: Log[];
};
