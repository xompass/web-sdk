import { Log } from './Log';
import { Project } from './Project';

export type ProjectOperabilitySummary = {
  month?: Date;
  totalOperativeAssets?: number;
  connectedAssetsEndPeriod?: number;
  connectedAssetsStartPeriod?: number;
  connectedAssets?: number;
  disconnectedAssets?: number;
  createdAssets?: number;
  removedAssets?: number;
  totalOperativeHours?: number;
  adjustedOperativeHours?: number;
  maxOperativeHours?: number;
  operability?: number;
  averageOperability?: number;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  trackingLogs?: Log[];
  project?: Project;
};
