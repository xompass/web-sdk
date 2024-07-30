export type MissingHelmetDetectionTrigger = {
  classes?: ('person' | 'cat1' | 'cat2' | 'cat3' | 'cat4')[];
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
  };
}[][];
