import { Log } from './Log';
import { Project } from './Project';

export type EmbeddedReport = {
  name: string;
  description?: string;
  source: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  trackingLogs?: Log[];
  project?: Project;
};
