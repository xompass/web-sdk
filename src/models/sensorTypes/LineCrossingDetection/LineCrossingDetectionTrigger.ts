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
  direction: 'incoming' | 'outgoing';
}[][];
