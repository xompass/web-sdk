import { Customer } from "./Customer";
import { Log } from "./Log";

export type CustomerRestrictionTable = {
  maxAssetsPerCustomer?: number;
  maxAssetsPerCustomerCeiling?: number;
  maxManagersPerCustomer?: number;
  maxManagersPerCustomerCeiling?: number;
  maxProjectsPerCustomer?: number;
  maxProjectsPerCustomerCeiling?: number;
  maxAssetsPerProject?: number;
  maxAssetsPerProjectCeiling?: number;
  maxSensorsPerAsset?: number;
  maxSensorsPerAssetCeiling?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  customer?: Customer;
  trackingLogs?: Log[];
};
