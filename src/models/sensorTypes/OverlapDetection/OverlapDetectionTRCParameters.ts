import { YoloClassLabel } from '../YoloClassLabel';

export type OverlapDetectionBasedOnRulesTRCParameters = {
  byClass?: Record<
    YoloClassLabel,
    {
      thresholds?: {
        minProbability?: number;
      };
    }
  >;
};
