export type LicensePlateContent = {
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
  detections?: {
    presence: boolean;
    class: 'bus' | 'car' | 'motorbike' | 'truck';
    probability: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    licensePlate?: {
      text?: string;
      probability: number;
      frame?: {
        x: number;
        y: number;
        w: number;
        h: number;
      };
    };
    filteredBy?: {
      ZONE?: boolean;
      CLASS?: boolean;
      BLACKLIST?: boolean;
    };
  }[];
};
