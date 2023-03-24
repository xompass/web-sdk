export type CrossedBarriersDetectionParameters = {
  barriers?: {
    barrier?: {
      points?: {
        x: number;
        y: number;
      }[];
      color?: string;
    }[];
  }[];
  disableUpload?: boolean;
};
