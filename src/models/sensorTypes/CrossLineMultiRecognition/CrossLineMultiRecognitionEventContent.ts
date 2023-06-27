import { YoloClassLabel } from '../YoloClassLabel';

export type CrossLineMultiRecognitionEventContent = Record<
  YoloClassLabel,
  {
    incoming: number;
    outgoing: number;
  }
>;
