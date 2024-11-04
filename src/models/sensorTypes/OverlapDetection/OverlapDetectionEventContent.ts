import { YoloClassLabel } from '../YoloClassLabel';

export type OverlapDetectionEventContent = {
  files?: {
    image?: {
      container?: string;
      name?: string;
      type?: 'image/jpg' | 'image/jpeg' | 'image/png';
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
  };
  objects?: {
    overlapsWith?: number[];
    class: YoloClassLabel;
    probability: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    filteredBy?: {
      ZONE?: boolean;
      PROBABILITY?: boolean;
      CLASS?: boolean;
    };
  }[];
  filtered?: boolean;
};
