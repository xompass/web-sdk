export type FaceRecognitionParameters = {
  zones?: {
    points: {
      x: number;
      y: number;
    }[];
    color?: string;
  }[];
};
