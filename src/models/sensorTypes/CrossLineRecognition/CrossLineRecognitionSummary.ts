export type CrossLineRecognitionSummary = {
  meta?: {
    data?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      size?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
  };
  location?: {
    stats?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
  };
  content?: {
    incoming?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
    outgoing?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
  };
};
