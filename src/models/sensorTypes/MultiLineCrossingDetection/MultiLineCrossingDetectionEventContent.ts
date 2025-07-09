import { YoloClassLabel } from '../YoloClassLabel';

export type MultiLineCrossingDetectionEventContent = {
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
    id: string;
    class: YoloClassLabel;
    lineId: string;
    direction: 'incoming' | 'outgoing';
    frameId?: string;
    probability: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    trace: {
      x: number;
      y: number;
    }[];
    filteredBy?: {
      PROBABILITY?: boolean;
      CLASS?: boolean;
    };
  }[];
  filtered?: boolean;
};
