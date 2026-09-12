import { YoloClassLabel } from "../YoloClassLabel";

export type CrossLineMultiRecognitionTrigger = {
  classes?: YoloClassLabel[];
  value?: number;
  direction?: "incoming" | "outgoing" | "null";
  operator?: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "null";
}[][];
