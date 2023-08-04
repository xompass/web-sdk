export type PoseDetectionBasedOnRulesTRCParameters = {
  byPose?: {
    HANDS_UP?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    ON_FLOOR?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    RUNNING?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    SEATED?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    THROWING_THINGS?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    FIGHT?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    SQUAT_HEUR1?: {
      thresholds?: {
        minProbability?: number;
      };
    };
    SQUAT_HEUR2?: {
      thresholds?: {
        minProbability?: number;
      };
    };
  };
};
