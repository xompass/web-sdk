import { AssetType } from './AssetType';
import { Log } from './Log';

export type Tool = {
  name?: string;
  description?: string;
  logo?: string;
  icon?: string;
  module: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetTypeIds?: string[];
  trackingLogs?: Log[];
  assetTypes?: AssetType[];
};
