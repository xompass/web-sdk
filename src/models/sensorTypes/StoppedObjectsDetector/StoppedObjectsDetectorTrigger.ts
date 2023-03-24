export type StoppedObjectsDetectorTrigger = {
  classes?: ("car" | "person")[];
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];
