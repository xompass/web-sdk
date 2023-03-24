import { Log } from "./Log";
import { Project } from "./Project";
import { SummaryForAsset } from "./SummaryForAsset";
import { SensorTypeLabel } from "./sensorTypes/SensorTypeLabel";

export type SummaryForProject = {
  id?: string;
  type: SensorTypeLabel;
  from: Date;
  to: Date;
  length: number;
  detail: any;
  updated: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  projectId?: string;
  trackingLogs?: Log[];
  project?: Project;
  summaryForAssets?: SummaryForAsset[];
};
