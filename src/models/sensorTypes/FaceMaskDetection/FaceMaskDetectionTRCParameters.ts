export type FaceMaskDetectionBasedOnRulesTRCParameters = {
  thresholds?: {
    faces?: {
      minProbability?: number;
    };
    masks?: {
      minProbability?: number;
    };
  };
};
