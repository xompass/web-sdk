import { YoloClassLabel } from '../YoloClassLabel';

export type OverlapDetectionTrigger = {
  overlapSourceClasses?: YoloClassLabel[];
  overlapTargetClasses?: YoloClassLabel[];
  intervalTime?: number;
}[][];
