export type SpeedChangeBasedOnRulesTRCParameters = {
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
  };
};
