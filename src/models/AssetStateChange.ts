import { Asset } from './Asset';
import { AssetState } from './AssetState';
import { Customer } from './Customer';
import { Log } from './Log';

export type AssetStateChange = {
  changeAt: Date;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  assetStateId?: string;
  customerId?: string;
  asset?: Asset;
  assetState?: AssetState;
  customer?: Customer;
  trackingLogs?: Log[];
};
