export type AccessTokenContent = {
  request: 'headers' | 'query' | 'body' | 'path';
  url?: string;
  base: string;
  token: string;
};
