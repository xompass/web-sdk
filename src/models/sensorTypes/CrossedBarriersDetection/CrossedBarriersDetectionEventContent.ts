import { YoloClassLabel } from "../YoloClassLabel";

export type CrossedBarriersDetectionEventContent = {
  class: YoloClassLabel;
  timeInterval: number;
};
