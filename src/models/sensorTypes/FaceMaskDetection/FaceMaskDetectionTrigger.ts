export type FaceMaskDetectionTrigger = {
  value?: number;
  operator?: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "null";
}[][];
