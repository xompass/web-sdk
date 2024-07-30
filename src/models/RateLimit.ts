export type RateLimit = {
  readLimit: number;
  writeLimit: number;
  timeIntervalS: number;
  enabled?: boolean;
  id?: string;
};
