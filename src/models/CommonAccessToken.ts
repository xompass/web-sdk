import { Admin } from './Admin';
import { Manager } from './Manager';

export type CommonAccessToken = {
  id?: string;
  ttl?: number;
  scopes?: string[];
  created?: Date;
  userId?: string;
  principalType?: string;
  user?: Admin | Manager;
};
