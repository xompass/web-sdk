import { Asset } from './Asset';
import { EventTrigger } from './EventTrigger';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type EventDashboard = {
  type: string;
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
  trackingLogs?: Log[];
  managers?: Manager[];
  project?: Project;
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
};
