export type FuelingDetectionParameters = {
  minIntervalTime?: number;
  polygons?: {
    fueling?: {
      points?: {
        x: number;
        y: number;
      }[];
      color?: string;
    };
    queue?: {
      points?: {
        x: number;
        y: number;
      }[];
      color?: string;
    };
  };
  disableUpload?: boolean;
};
