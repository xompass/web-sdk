import { Log } from "./Log";
import { Project } from "./Project";

export type ProjectRestrictionTable = {
  maxAssetsPerProject?: number;
  maxAssetsPerProjectCeiling?: number;
  maxSensorsPerAsset?: number;
  maxSensorsPerAssetCeiling?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  project?: Project;
  trackingLogs?: Log[];
};
