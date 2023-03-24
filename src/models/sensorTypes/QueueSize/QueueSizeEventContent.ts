import { YoloClassLabel } from "../YoloClassLabel";

export type QueueSizeEventContent = Record<
  YoloClassLabel,
  {
    length: number;
  }
>;
