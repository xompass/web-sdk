export type MotionDetectionFeedback = {
  files?: {
    gif?: {
      container?: string;
      name?: string;
      type?: 'image/gif';
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
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
    tags?: string[];
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    filteredBy?: {
      ZONE?: boolean;
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
