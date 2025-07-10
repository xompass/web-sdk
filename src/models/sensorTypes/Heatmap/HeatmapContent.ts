import { YoloClassLabel } from '../YoloClassLabel';

export type HeatmapContent = {
  width: number;
  height: number;
  gridSize: number;
  heatmap: {
    x: number;
    y: number;
    counts: Record<YoloClassLabel, number>;
  }[];
};
