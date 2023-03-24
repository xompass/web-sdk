import { Log } from "./Log";
import { Project } from "./Project";

export type ProjectRestrictionTable = {
  maxAssetsPerProject?: number;
  maxSensorsPerAsset?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  trackingLogs?: Log[];
  project?: Project;
};
