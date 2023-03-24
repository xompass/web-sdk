export type BeaconTrackingSummary = {
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
    zoneNames?: Record<
      string,
      {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      }
    >;
  };
};
