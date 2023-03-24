import { YoloClassLabel } from "../YoloClassLabel";

export type CrossedBarriersDetectionSummary = {
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
    timeInterval?: {
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
        timeInterval?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
      }
    >;
  };
};
