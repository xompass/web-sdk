import { YoloClassLabel } from '../YoloClassLabel';

export type LineCrossingDetectionFeedback = {
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
    sequence?: {
      container?: string;
      name?: string;
      type?: 'image/jpg' | 'image/jpeg' | 'image/png';
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
  };
  detections?: {
    class: YoloClassLabel;
    probability: number;
    frameId?: string;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    direction?: 'incoming' | 'outgoing';
    filteredBy?: {
      PROBABILITY?: boolean;
      CLASS?: boolean;
    };
    diagnosis?:
      | 'TRUE_POSITIVE'
      | 'TRUE_NEGATIVE'
      | 'FALSE_POSITIVE'
      | 'FALSE_NEGATIVE';
  }[];
  filtered?: boolean;
};
