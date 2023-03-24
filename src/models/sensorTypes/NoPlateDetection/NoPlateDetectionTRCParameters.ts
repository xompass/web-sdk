export type NoPlateDetectionBasedOnRulesTRCParameters = {
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
