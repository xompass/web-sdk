import { YoloClassLabel } from '../YoloClassLabel';

export type ObjectCountingContent = Record<
  YoloClassLabel,
  {
    length: number;
  }
>;
