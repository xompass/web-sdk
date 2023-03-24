export type VideoContent = {
  files?: {
    video?: {
      container?: string;
      name?: string;
      type?:
        | "application/octet-stream"
        | "video/x-flv"
        | "video/mp4"
        | "application/x-mpegURL"
        | "video/MP2T"
        | "video/3gpp"
        | "video/quicktime"
        | "video/x-msvideo"
        | "video/x-ms-wmv";
      field?: string;
      originalFilename?: string;
      meta?: Record<string, any>;
      datasourceName?: string;
    }[];
  };
  activity?: {
    variation?: number[];
    stddev?: number;
    min?: number;
    max?: number;
    avg?: number;
  };
};
