export type PoseDetectionTrigger = {
  poses?: (
    | 'HANDS_UP'
    | 'ON_FLOOR'
    | 'RUNNING'
    | 'SEATED'
    | 'THROWING_THINGS'
    | 'FIGHT'
    | 'SQUAT_HEUR1'
    | 'SQUAT_HEUR2'
  )[];
  intervalTime?: number;
  advanced?: {
    matchRatio?: number;
  };
}[][];
