import { YoloClassLabel } from '../YoloClassLabel';

export type ObjectRecognitionContent = {
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
    video?: {
      container?: string;
      name?: string;
      type?:
        | 'application/octet-stream'
        | 'video/x-flv'
        | 'video/mp4'
        | 'application/x-mpegURL'
        | 'video/MP2T'
        | 'video/3gpp'
        | 'video/quicktime'
        | 'video/x-msvideo'
        | 'video/x-ms-wmv';
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
  };
  objects?: {
    class: YoloClassLabel;
    text?: string;
    probability: number;
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
      CLASS?: boolean;
      BLACKLIST?: boolean;
      PERSISTENCE?: boolean;
    };
  }[];
};
