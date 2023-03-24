import { YoloClassLabel } from "../YoloClassLabel";

export type QueueSizeContent = Record<
  YoloClassLabel,
  {
    length: number;
  }
>;
