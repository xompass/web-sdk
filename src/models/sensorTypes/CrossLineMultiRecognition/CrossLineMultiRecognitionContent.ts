import { YoloClassLabel } from '../YoloClassLabel';

export type CrossLineMultiRecognitionContent = Record<
  YoloClassLabel,
  {
    incoming: number;
    outgoing: number;
  }
>;
