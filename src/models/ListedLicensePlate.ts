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
