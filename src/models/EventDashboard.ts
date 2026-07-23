import { Asset } from "./Asset";
import { EventTrigger } from "./EventTrigger";
import { Log } from "./Log";
import { Manager } from "./Manager";
import { Project } from "./Project";

export type EventDashboard = {
  type: "AUTO" | "COVID_19" | "GENERIC" | "SAFE_CITY" | "STORE_ANOMALIES";
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetIds?: string[];
  projectId?: string;
  assets?: Asset[];
  eventDashboardEventTriggers?: EventDashboardEventTrigger[];
  eventTriggers?: EventTrigger[];
  managers?: Manager[];
  project?: Project;
  trackingLogs?: Log[];
};

export type EventDashboardEventTrigger = {
  type?: string;
  config?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  eventDashboardId?: string;
  eventTriggerId?: string;
  eventDashboard?: EventDashboard;
  eventTrigger?: EventTrigger;
  trackingLogs?: Log[];
};
