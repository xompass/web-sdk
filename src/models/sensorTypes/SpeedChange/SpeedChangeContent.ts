import { YoloClassLabel } from '../YoloClassLabel';

export type SpeedChangeContent = {
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
    probability: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
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
    trace?: {
      ts?: number;
      probability?: number;
      frame: {
        x: number;
        y: number;
        w: number;
        h: number;
      };
    }[];
    filteredBy?: {
      ZONE?: boolean;
      CLASS?: boolean;
    };
  }[];
};
