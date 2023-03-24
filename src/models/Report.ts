import { Asset } from "./Asset";
import { Log } from "./Log";
import { Manager } from "./Manager";
import { Project } from "./Project";

export type Report = {
  type: string;
  name: string;
  description?: string;
  emails?: string[];
  notifyAt?: Date;
  parameters?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  assetIds?: string[];
  trackingLogs?: Log[];
  project?: Project;
  managers?: Manager[];
  assets?: Asset[];
};
