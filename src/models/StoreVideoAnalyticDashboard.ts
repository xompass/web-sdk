import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';
import { FileMetadata } from './FileMetadata';

export type StoreVideoAnalyticDashboard = {
  name: string;
  description?: string;
  layers?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  trackingLogs?: Log[];
  project?: Project;
  managers?: Manager[];
  container?: StoreVideoAnalyticDashboardStorageContainer;
};

export type StoreVideoAnalyticDashboardStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  _layouts?: FileMetadata[];
  storeVideoAnalyticDashboardId?: string;
};
