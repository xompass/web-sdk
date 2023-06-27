import { Asset } from './Asset';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type CctvDashboard = {
  name: string;
  description?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetIds?: string[];
  projectId?: string;
  assets?: Asset[];
  trackingLogs?: Log[];
  managers?: Manager[];
  project?: Project;
};
