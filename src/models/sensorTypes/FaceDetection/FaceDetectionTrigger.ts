export type FaceDetectionTrigger = {
  value?: number;
  operator?: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "null";
  intervalTime?: number;
}[][];
