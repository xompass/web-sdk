import { Customer } from "./Customer";
import { EmergencyContact } from "./EmergencyContact";
import { Log } from "./Log";

export type EmergencyContactCallHistory = {
  name?: string;
  description?: string;
  sid: string;
  accountSid: string;
  request?: any;
  response?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  emergencyContactId?: string;
  relatedModelId?: string;
  relatedModelName?: string;
  trackingModelId?: string;
  trackingModelName?: string;
  customer?: Customer;
  emergencyContact?: EmergencyContact;
  relatedModel?: any;
  trackingModel?: any;
  trackingLogs?: Log[];
};
