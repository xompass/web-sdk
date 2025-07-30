import { YoloClassLabel } from '../YoloClassLabel';

export type HeatmapSummary = {
  meta?: {
    data?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      size?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
  };
  location?: {
    stats?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
  };
  content?: {
    length?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
    class?: Record<
      YoloClassLabel,
      {
        length?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
        heatmap?: Record<
          string,
          Record<
            string,
            {
              count?: number;
              sum?: number;
              avg?: number;
              min?: number;
              max?: number;
            }
          >
        >;
      }
    >;
    heatmap?: Record<
      string,
      Record<
        string,
        {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        }
      >
    >;
    gridSize?: number;
  };
};
