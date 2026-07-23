export type ColorPresenceFeedback = {
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
  detection?: {
    present: boolean;
    color?: string;
    tags?: string[];
    diagnosis?:
      | "TRUE_POSITIVE"
      | "TRUE_NEGATIVE"
      | "FALSE_POSITIVE"
      | "FALSE_NEGATIVE";
  };
  filtered?: boolean;
};
