export type ExternalDataSummary = {
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
    length?: {
      count?: number;
      sum?: number;
      avg?: number;
      min?: number;
      max?: number;
    };
    files?: {
      image?: {
        length?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
      };
      video?: {
        length?: {
          count?: number;
          sum?: number;
          avg?: number;
          min?: number;
          max?: number;
        };
      };
    };
  };
};
