export type ListedLicensePlate = {
  _key: string;
  customerId: string;
  brand: string;
  vehicleType: string;
  licensePlate: string;
  createdAt: string;
  model: string;
  year: string;
  color: string;
  blacklistedAt: string;
  description: string;
};

export type MergeLicensePlateResponse = {
  updated: string[];
  created: string[];
};

export type LicensePlate = {
  _key: string;
  customerId: string;
  assetId: string;
  sensorId: string;
  datasetId: string;
  dataId: string;
  dataIndex: number;
  fileName: string;
  datasourceName: string;
  from: Date;
  to: Date;
  value: string;
  coordinates: number[];
  class: string;
  frame: {
    w: number;
    h: number;
    x: number;
    y: number;
  };
  vehicle?: {
    brand: string;
    model: string;
    year: string;
    color: string;
    type: string;
  };
  expiresAt: number;
};
