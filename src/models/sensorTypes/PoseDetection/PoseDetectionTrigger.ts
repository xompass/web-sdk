export type PoseDetectionTrigger = {
  poses?: (
    | 'HANDS_UP'
    | 'ON_FLOOR'
    | 'RUNNING'
    | 'SEATED'
    | 'THROWING_THINGS'
    | 'FIGHT'
  )[];
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
  };
}[][];
