export type ObjectCountingTrigger = {
  classes?: ("bicycle" | "bus" | "car" | "motorbike" | "person")[];
  advanced?: {
    bufferTTL?: number;
    confirmedFramesRequired?: number;
  };
}[][];
