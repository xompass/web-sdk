import { YoloClassLabel } from "../YoloClassLabel";

export type ObjectCountingEventContent = Record<
  YoloClassLabel,
  {
    length: number;
  }
>;
