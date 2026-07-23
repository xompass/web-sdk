export interface AccessToken {
  id?: string;
  ttl?: number;
  scopes?: ["string"];
  created?: Date;
  userId?: string;
  user?: any;
}

/**
 * This GeoPoint represents both, LoopBack and MongoDB GeoPoint
 */
export interface GeoPoint {
  lat?: number;
  lng?: number;
  type?: string;
  coordinates?: number[];
}
