export type CommonAccessToken = {
  expiresAt?: Date;
  id?: string;
  ttl?: number;
  scopes?: string[];
  created?: Date;
  userId?: string;
  principalType?: string;
  user?: any;
};
