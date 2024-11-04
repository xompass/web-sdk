export type StoppedObjectsDetectorTrigger = {
  classes?: (
    | 'car'
    | 'person'
    | 'bag'
    | 'backpack'
    | 'worker'
    | 'cat1'
    | 'cat2'
    | 'cat3'
    | 'cat4'
  )[];
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];
