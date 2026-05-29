export type Watchlist = {
  id: string;
  customerId: string;
  projectId: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  isDefault: boolean;
};

export type WatchlistCreate = {
  name: string;
  description?: string;
};

export type WatchlistUpdate = {
  name?: string;
  description?: string;
};

export type WatchlistVehicle = {
  id: string;
  watchlistId: string;
  licensePlate: string;
  brand?: string;
  vehicleType?: string;
  model?: string;
  year?: number;
  color?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  distance?: number;
  similarity?: number;
};

export type WatchlistVehicleCreate = {
  licensePlate: string;
  brand?: string;
  vehicleType?: string;
  model?: string;
  year?: number;
  color?: string;
  description?: string;
};

export type WatchlistVehicleUpdate = {
  brand?: string;
  vehicleType?: string;
  model?: string;
  year?: number;
  color?: string;
  description?: string;
};

export type WatchlistBulkCreateResult = {
  created: WatchlistVehicle[];
  failed: { index: number; error: string }[];
};

export type WatchlistMergeResult = {
  created: WatchlistVehicle[];
  updated: WatchlistVehicle[];
};

export type WatchlistReplaceResult = {
  removed: number;
  created: WatchlistVehicle[];
};

export type LicensePlateDetection = {
  id?: string;
  customerId: string;
  projectId: string;
  assetId: string;
  sensorId: string;
  datasetId: string;
  dataId: string;
  dataIndex?: number;
  fileName?: string;
  datasourceName?: string;
  from: number;
  to?: number;
  value: string;
  coordinates?: number[];
  frame?: DetectionFrame;
  class?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vehicle?: any;
  expiresAt?: number;
  createdAt?: number;
  distance?: number;
  similarity?: number;
};

export type DetectionFrame = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type LicensePlateDetectionQuery = {
  from: Date;
  to: Date;
  assetId?: string;
  sensorId?: string;
  class?: string;
  limit?: number;
};

export type LicensePlateSearchQuery = LicensePlateDetectionQuery & {
  licensePlate: string;
  method?: string;
  maxDistance?: number;
  transpositions?: boolean;
};
