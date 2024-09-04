import { Asset } from './Asset';
import { Log } from './Log';
import { Project } from './Project';

export type AssetOperabilitySummary = {
  month?: Date;
  from?: Date;
  to?: Date;
  adjustedOperativeHours?: number;
  hoursOfOperation?: number;
  operability?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  projectId?: string;
  asset?: Asset;
  trackingLogs?: Log[];
  project?: Project;
};
