export type OpticalCharacterRecognitionTrigger = {
  value?: number;
  operator?: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "null";
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];
