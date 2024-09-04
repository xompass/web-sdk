import { Customer } from './Customer';
import { Log } from './Log';

export type CustomerOperabilitySummary = {
  month?: Date;
  totalOperativeAssets?: number;
  totalAssetsEndPeriod?: number;
  createdAssets?: number;
  removedAssets?: number;
  totalOperativeHours?: number;
  adjustedOperativeHours?: number;
  maxOperativeHours?: number;
  operability?: number;
  operabilitySum?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  customer?: Customer;
  trackingLogs?: Log[];
};
