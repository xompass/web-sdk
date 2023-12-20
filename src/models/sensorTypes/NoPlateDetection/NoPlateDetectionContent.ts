import { YoloClassLabel } from '../YoloClassLabel';

export type NoPlateDetectionContent = {
  image?: {
    container?: string;
    name?: string;
    type?: 'image/jpg' | 'image/jpeg' | 'image/png';
    field?: string;
    originalFilename?: string;
    meta?: Record<string, any>;
    datasourceName?: string;
  };
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
    noPlateDetected?: boolean;
    class: YoloClassLabel;
    probability: number;
    trace?: {
      x: number;
      y: number;
    }[];
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    colorExperimental?: {
      rgb: {
        r: number;
        g: number;
        b: number;
      };
      clusterSizeRatio: number;
    }[];
    filteredBy?: {
      ZONE?: boolean;
      CLASS?: boolean;
    };
  }[];
};
