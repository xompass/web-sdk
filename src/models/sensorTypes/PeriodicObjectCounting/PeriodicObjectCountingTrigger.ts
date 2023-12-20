import { YoloClassLabel } from '../YoloClassLabel';

export type PeriodicObjectCountingTrigger = {
  classes?: YoloClassLabel[];
  intervalTime?: number;
}[][];
