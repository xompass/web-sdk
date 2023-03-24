import { Log } from "./Log";
import { YoloClassLabel } from "./sensorTypes/YoloClassLabel";

export type YoloClass = {
  name: YoloClassLabel;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
