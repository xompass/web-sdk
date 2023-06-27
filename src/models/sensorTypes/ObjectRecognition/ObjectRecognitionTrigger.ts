export type ObjectRecognitionTrigger = {
  classes?: (
    | 'bicycle'
    | 'bus'
    | 'car'
    | 'motorbike'
    | 'person'
    | 'license_plate'
    | 'shoebox'
    | 'socks'
    | 'deliverybag'
    | 'pistol'
    | 'box'
    | 'label'
    | 'bag'
    | 'backpack'
    | 'dog'
    | 'train'
    | 'guard'
    | 'inspector'
    | 'helmet'
  )[];
  value?: number;
  operator?: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'null';
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
    radialTolerancePx?: number;
  };
}[][];
