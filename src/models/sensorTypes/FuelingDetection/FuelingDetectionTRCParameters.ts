import { YoloClassLabel } from "../YoloClassLabel";

export type FuelingDetectionBasedOnRulesTRCParameters = {
  byClass?: Record<
    YoloClassLabel,
    {
      thresholds?: {
        minProbability?: number;
      };
    }
  >;
};
