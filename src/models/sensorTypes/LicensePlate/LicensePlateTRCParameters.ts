export type LicensePlateBasedOnRulesTRCParameters = {
  byClass?: {
    bus?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    car?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    motorbike?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    truck?: {
      thresholds?: {
        minProbability?: number;
      };
    };
  };
};

export type LicensePlateBlacklistSearchTRCParameters = {
  minNumOfChars?: number;
  matchMethod?: 'exact' | 'prefix' | 'contains' | 'fuzzy' | 'null';
  fuzzyMaxDistance?: number;
};
