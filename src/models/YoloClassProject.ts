import { Log } from "./Log";
import { Project } from "./Project";
import { YoloClass } from "./YoloClass";

export type YoloClassProject = {
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  yoloClassId?: string;
  projectId?: string;
  trackingLogs?: Log[];
  yoloClass?: YoloClass;
  project?: Project;
};
