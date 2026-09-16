import { Log } from "./Log";
import { Project } from "./Project";

export type EmbeddedReport = {
  name: string;
  normalizedName?: string;
  description?: string;
  source: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  project?: Project;
  trackingLogs?: Log[];
};
