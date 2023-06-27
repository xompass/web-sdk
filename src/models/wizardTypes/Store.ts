export type StoreStoreVideoAnalyticsSettings = {
  gateways?: {
    mac: string;
  }[];
  nvr?: {
    host: string;
    port: number;
    user?: string;
    password?: string;
    defaultCameraPassword?: string;
  };
  attributes?: Record<string, undefined>;
};
