import { YoloClassLabel } from '../YoloClassLabel';

export type CargoContainerISOReaderSummary = {
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
    files?: {
      image?: {
        length?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
      };
    };
    detections?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      probability?: {
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
          probability?: {
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
};
