import { Log } from './Log';
import { Project } from './Project';

export type Dashboard = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  trackingLogs?: Log[];
  project?: Project;
};
