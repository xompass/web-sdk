import { YoloClassLabel } from '../YoloClassLabel';

export type GranularityDetectionEventContent = {
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
    probability: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    points?: any[][];
    displayName?: string;
    value?: number;
    diameter?: number;
    area?: number;
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
    };
  }[];
  filtered?: boolean;
};
