export type ReferrerEventContent = {
  datasetId: string;
  sensorId: string;
  assetId: string;
  data?: Record<string, any>;
  files?: Record<string, any>;
};
