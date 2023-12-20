import { YoloClassLabel } from '../YoloClassLabel';

export type PeriodicObjectCountingEventContent = Record<
  YoloClassLabel,
  {
    length: number;
  }
>;
