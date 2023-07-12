export type LineCrossingDetectionTrigger = {
  classes?: (
    | 'bicycle'
    | 'bus'
    | 'car'
    | 'motorbike'
    | 'person'
    | 'guard'
    | 'inspector'
    | 'truck'
    | 'machinery'
  )[];
  value?: number;
  direction: 'incoming' | 'outgoing';
  operator?: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'null';
}[][];
