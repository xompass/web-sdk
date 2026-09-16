import { Log } from "./Log";
import { YoloClassLabel } from "./sensorTypes/YoloClassLabel";

export type YoloClass = {
  name: YoloClassLabel;
  created?: Date;
  modified?: Date;
  id?: string;
  trackingLogs?: Log[];
};
