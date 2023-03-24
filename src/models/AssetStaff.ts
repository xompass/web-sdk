import { Asset } from "./Asset";
import { Log } from "./Log";

export type AssetStaff = {
  name: string;
  description?: string;
  type: string;
  referenceId?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  asset?: Asset;
  trackingLogs?: Log[];
};
