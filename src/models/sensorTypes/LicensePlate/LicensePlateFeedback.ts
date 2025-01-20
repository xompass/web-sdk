export type LicensePlateFeedback = {
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
    class: 'bus' | 'car' | 'motorbike' | 'truck';
    tags?: string[];
    probability?: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    licensePlate?: {
      text?: string;
      blacklistedText?: string[];
      probability: number;
      frame?: {
        x: number;
        y: number;
        w: number;
        h: number;
      };
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
    };
    filteredBy?: {
      ZONE?: boolean;
      PROBABILITY?: boolean;
      CLASS?: boolean;
      BLACKLIST?: boolean;
    };
    diagnosis?:
      | 'TRUE_POSITIVE'
      | 'TRUE_NEGATIVE'
      | 'FALSE_POSITIVE'
      | 'FALSE_NEGATIVE';
  }[];
  filtered?: boolean;
};
