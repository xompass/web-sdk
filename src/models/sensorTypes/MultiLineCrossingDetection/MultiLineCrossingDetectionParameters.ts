export type MultiLineCrossingDetectionParameters = {
  lines?: {
    id: string;
    points: {
      x: number;
      y: number;
    }[];
    color?: string;
  }[];
};
