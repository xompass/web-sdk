import { YoloClassLabel } from '../YoloClassLabel';

export type CargoContainerISOReaderEventContent = {
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
  }[];
  info?: {
    ownerCode?: string;
    serialNumber?: string;
    checkDigit?: string;
    containerProperties?: string;
    mgw?: number;
    tare?: number;
    capacity?: number;
    height?: number;
  };
};
