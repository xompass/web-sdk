export type FaceMaskDetectionFeedback = {
  files?: {
    image?: {
      container?: string;
      name?: string;
      type?: "image/jpg" | "image/jpeg" | "image/png";
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
    faces?: {
      container?: string;
      name?: string;
      type?: "image/jpg" | "image/jpeg" | "image/png";
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
  };
  faces?: {
    probability: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    mask?: {
      probability: number;
    };
    landmarks: {
      eyeLeft?: {
        x: number;
        y: number;
      };
      eyeRight?: {
        x: number;
        y: number;
      };
      nose?: {
        x: number;
        y: number;
      };
      mouthLeft?: {
        x: number;
        y: number;
      };
      mouthRight?: {
        x: number;
        y: number;
      };
    };
    filteredBy?: {
      FACE_PROBABILITY?: boolean;
      MASK_PROBABILITY?: boolean;
    };
    diagnosis?:
      | "TRUE_POSITIVE"
      | "TRUE_NEGATIVE"
      | "FALSE_POSITIVE"
      | "FALSE_NEGATIVE";
  }[];
  filtered?: boolean;
};
