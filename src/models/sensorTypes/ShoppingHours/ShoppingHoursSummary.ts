export type ShoppingHoursSummary = {
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
    states?: {
      opened?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
      closed?: {
        count?: number;
        sum?: number;
        avg?: number;
        min?: number;
        max?: number;
      };
    };
  };
};
