export type MultiZoneObjectTrackingParameters = {
  'zones'?: {
  'points': {
  'x': number;
  'y': number;
  }[];
  'color'?: string;
  'radialTolerancePx'?: number;
  }[];
  'disableUpload'?: boolean;
  }