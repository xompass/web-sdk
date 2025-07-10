import { YoloClassLabel } from '../YoloClassLabel';

export type HeatmapTrigger = {
  classes?: YoloClassLabel[];
  intervalTime: number;
  gridSize: number;
}[][];
