export type MultiZoneObjectTrackingParameters = {
  zones?: {
    points: {
      x: number;
      y: number;
    }[];
    color?: string;
    radialTolerancePx?: number;
  }[];
  disableUpload?: boolean;
  persistence?: {
    classes: string[];
    enabled: boolean;
    ttl?: number;
    minImages?: number;
    ratio?: number;
  };
};
