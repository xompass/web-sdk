export type StoppedObjectsDetectorParameters = {
  points?: {
    x: number;
    y: number;
  }[];
  color?: string;
  disableUpload?: boolean;
  persistence?: {
    classes: string[];
    enabled: boolean;
    ttl?: number;
    minImages?: number;
    ratio?: number;
  };
};
