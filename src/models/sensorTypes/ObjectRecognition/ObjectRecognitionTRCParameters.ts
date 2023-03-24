export type ObjectRecognitionBasedOnRulesTRCParameters = {
  byClass?: {
    bicycle?: {
      thresholds?: {
        minProbability?: number;
      };
    };
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
    person?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    license_plate?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    shoebox?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    socks?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    deliverybag?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    pistol?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    box?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    label?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    bag?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    backpack?: {
      thresholds?: {
        minProbability?: number;
      };
    };
  };
};

export type ObjectRecognitionBlacklistSearchTRCParameters = {
  minNumOfChars?: number;
  matchMethod?: "exact" | "prefix" | "contains" | "fuzzy" | "null";
  fuzzyMaxDistance?: number;
};
