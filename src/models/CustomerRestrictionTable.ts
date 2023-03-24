import { Customer } from "./Customer";
import { Log } from "./Log";

export type CustomerRestrictionTable = {
  maxAssetsPerCustomer?: number;
  maxManagersPerCustomer?: number;
  maxProjectsPerCustomer?: number;
  maxAssetsPerProject?: number;
  maxSensorsPerAsset?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  customer?: Customer;
  trackingLogs?: Log[];
};
