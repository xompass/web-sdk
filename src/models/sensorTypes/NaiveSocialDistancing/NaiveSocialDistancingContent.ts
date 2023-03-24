import { YoloClassLabel } from "../YoloClassLabel";

export type NaiveSocialDistancingContent = {
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
    probability: number;
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
  }[];
  pairs?: any[][];
};
