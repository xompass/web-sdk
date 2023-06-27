export type LicensePlateTrigger = {
  classes?: ('bus' | 'car' | 'motorbike' | 'truck')[];
  value?: number;
  operator?: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'null';
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];
