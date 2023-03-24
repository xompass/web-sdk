import { Customer } from "./Customer";
import { EmergencyContactCallHistory } from "./EmergencyContactCallHistory";
import { EventTrigger } from "./EventTrigger";
import { EventTriggerAssetState } from "./EventTriggerAssetState";
import { Log } from "./Log";

export type EmergencyContact = {
  name: string;
  description?: string;
  phone: string;
  enabled: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  customer?: Customer;
  callHistory?: EmergencyContactCallHistory[];
  eventTriggers?: EventTrigger[];
  eventTriggerAssetStates?: EventTriggerAssetState[];
  trackingLogs?: Log[];
};
