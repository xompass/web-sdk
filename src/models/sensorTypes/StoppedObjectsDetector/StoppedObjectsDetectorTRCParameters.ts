export type StoppedObjectsDetectorBasedOnRulesTRCParameters = {
  byClass?: {
    car?: {
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
