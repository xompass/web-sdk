export type PoseDetectionTrigger = {
  poses?: (
    | "HANDS_UP"
    | "ON_FLOOR"
    | "RUNNING"
    | "SEATED"
    | "THROWING_THINGS"
  )[];
}[][];
