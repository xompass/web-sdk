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
    dog?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    train?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    guard?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    inspector?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    helmet?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    truck?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    machinery?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    red_light?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    green_light?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    yellow_light?: {
      thresholds?: {
        minProbability?: number;
      };
    };
  };
};

export type ObjectRecognitionBlacklistSearchTRCParameters = {
  minNumOfChars?: number;
  matchMethod?: 'exact' | 'prefix' | 'contains' | 'fuzzy' | 'null';
  fuzzyMaxDistance?: number;
};
