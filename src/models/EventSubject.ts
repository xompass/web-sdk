import { Customer } from "./Customer";
import { EventTrigger } from "./EventTrigger";
import { EventTriggerTemplate } from "./EventTriggerTemplate";
import { Log } from "./Log";
import { Project } from "./Project";

export type EventSubject = {
  name: string;
  subject: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  projectId?: string;
  customer?: Customer;
  eventTriggerTemplates?: EventTriggerTemplate[];
  eventTriggers?: EventTrigger[];
  project?: Project;
  trackingLogs?: Log[];
};
