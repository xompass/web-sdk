export type StoppedObjectsDetectorTrigger = {
  classes?: ('car' | 'person' | 'bag' | 'backpack')[];
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];
