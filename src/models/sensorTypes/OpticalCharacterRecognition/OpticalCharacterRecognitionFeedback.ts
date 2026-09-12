export type OpticalCharacterRecognitionFeedback = {
  image?: {
    container?: string;
    name?: string;
    type?: "image/jpg" | "image/jpeg" | "image/png";
    field?: string;
    originalFilename?: string;
    meta?: Record<string, any>;
    datasourceName?: string;
  };
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
  };
  detections?: {
    text: string;
    tags?: string[];
    probability?: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    filteredBy?: {
      ZONE?: boolean;
      PROBABILITY?: boolean;
    };
    diagnosis?:
      | "TRUE_POSITIVE"
      | "TRUE_NEGATIVE"
      | "FALSE_POSITIVE"
      | "FALSE_NEGATIVE";
  }[];
  filtered?: boolean;
};
