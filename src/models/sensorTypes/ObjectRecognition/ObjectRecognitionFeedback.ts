import { YoloClassLabel } from '../YoloClassLabel';

export type ObjectRecognitionFeedback = {
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
    class: YoloClassLabel;
    text?: string;
    blacklistedText?: string[];
    blacklistDetails?: {
      blacklistedAt?: number;
      brand?: string;
      color?: string;
      description?: string;
      licensePlate?: string;
      model?: string;
      vehicleType?: string;
      year?: number;
    }[];
    tags?: string[];
    probability?: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    points?: any[][];
    colors?: {
      percentage: number;
      label:
        | 'white'
        | 'gray'
        | 'black'
        | 'red'
        | 'yellow'
        | 'brown'
        | 'green'
        | 'cyan'
        | 'blue'
        | 'purple';
    }[];
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
      PROBABILITY?: boolean;
      CLASS?: boolean;
      BLACKLIST?: boolean;
      PERSISTENCE?: boolean;
    };
    diagnosis?:
      | 'TRUE_POSITIVE'
      | 'TRUE_NEGATIVE'
      | 'FALSE_POSITIVE'
      | 'FALSE_NEGATIVE';
  }[];
  filtered?: boolean;
};
