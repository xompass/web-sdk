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
};
