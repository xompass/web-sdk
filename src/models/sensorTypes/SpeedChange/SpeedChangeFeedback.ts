import { YoloClassLabel } from "../YoloClassLabel";

export type SpeedChangeFeedback = {
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
  objects?: {
    class: YoloClassLabel;
    tags?: string[];
    probability?: number;
    frame: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
    colors?: {
      percentage: number;
      label:
        | "white"
        | "gray"
        | "black"
        | "red"
        | "yellow"
        | "brown"
        | "green"
        | "cyan"
        | "blue"
        | "purple";
    }[];
    trace?: {
      ts?: number;
      probability?: number;
      frame: {
        x: number;
        y: number;
        w: number;
        h: number;
      };
    }[];
    filteredBy?: {
      ZONE?: boolean;
      PROBABILITY?: boolean;
      CLASS?: boolean;
    };
    diagnosis?:
      | "TRUE_POSITIVE"
      | "TRUE_NEGATIVE"
      | "FALSE_POSITIVE"
      | "FALSE_NEGATIVE";
  }[];
  filtered?: boolean;
};
