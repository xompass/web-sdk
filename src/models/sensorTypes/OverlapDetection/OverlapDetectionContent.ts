import { YoloClassLabel } from '../YoloClassLabel';

export type OverlapDetectionContent = {
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
  }[];
};
