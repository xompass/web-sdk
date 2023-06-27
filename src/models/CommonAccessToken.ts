export type CommonAccessToken = {
  id?: string;
  ttl?: number;
  scopes?: string[];
  created?: Date;
  userId?: string;
  principalType?: string;
  user?: any;
};
