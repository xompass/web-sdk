import { YoloClassLabel } from '../YoloClassLabel';

export type MultiZoneObjectTrackingEventContent = {
  files?: {
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
    triggerSubject?: boolean;
    filteredBy?: {
      ZONE?: boolean;
      PROBABILITY?: boolean;
      CLASS?: boolean;
    };
  }[];
  filtered?: boolean;
};
