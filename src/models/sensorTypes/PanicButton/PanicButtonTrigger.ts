export type PanicButtonTrigger = {
  buttonId: string;
  relatedAssetIds?: string[];
  deduplicationInterval: number;
}[][];
