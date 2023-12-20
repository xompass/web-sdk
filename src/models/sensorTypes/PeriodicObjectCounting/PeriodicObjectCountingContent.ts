import { YoloClassLabel } from '../YoloClassLabel';

export type PeriodicObjectCountingContent = Record<
  YoloClassLabel,
  {
    length: number;
  }
>;
