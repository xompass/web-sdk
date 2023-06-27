import { YoloClassLabel } from '../YoloClassLabel';

export type FuelingDetectionContent = {
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
  fueling: {
    class: YoloClassLabel;
    probability: number;
    timeInterval: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
  queue?: {
    length: number;
  };
};
