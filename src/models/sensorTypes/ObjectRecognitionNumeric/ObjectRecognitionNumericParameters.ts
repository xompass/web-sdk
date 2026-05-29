export type ObjectRecognitionNumericParameters = {
  points?: {
    x: number;
    y: number;
  }[];
  color?: string;
  disableUpload?: boolean;
  accuracy?: number;
  factor?: number;
  offset?: number;
  persistence?: {
    classes: string[];
    trackClasses?: string[];
    enabled: boolean;
    ttl?: number;
    minImages?: number;
    ratio?: number;
  };
};
