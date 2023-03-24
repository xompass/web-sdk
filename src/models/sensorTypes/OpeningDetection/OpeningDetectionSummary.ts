export type OpeningDetectionSummary = {
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
    };
    detections?: {
      length?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      probability?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      presence?: {
        true?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
        };
        false?: {
          length?: {
            count?: number;
            sum?: number;
            avg?: number;
            min?: number;
            max?: number;
          };
          probability?: {
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
};
