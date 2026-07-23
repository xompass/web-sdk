import { FileMetadata } from "./FileMetadata";
import { Log } from "./Log";
import { Manager } from "./Manager";
import { Project } from "./Project";

export type StoreVideoAnalyticDashboard = {
  name: string;
  description?: string;
  layers?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  container?: StoreVideoAnalyticDashboardStorageContainer;
  managers?: Manager[];
  project?: Project;
  trackingLogs?: Log[];
};

export type StoreVideoAnalyticDashboardStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  _layouts?: FileMetadata[];
  storeVideoAnalyticDashboardId?: string;
  layouts?: FileMetadata[];
  storeVideoAnalyticDashboard?: StoreVideoAnalyticDashboard;
  trackingLogs?: Log[];
};
