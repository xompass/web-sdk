export type GPSEventContent = {
  latitude?: number;
  longitude?: number;
  quality?: number;
  satellites?: number;
  dop?: number;
  altitude?: number;
  wgs84?: number;
};
