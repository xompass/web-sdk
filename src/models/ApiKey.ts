import { Customer } from './Customer';
import { Log } from './Log';
import { RateLimit } from './RateLimit';

export type ApiKey = {
  name: string;
  id?: string;
  ttl?: number;
  scopes?: string[];
  enabled?: boolean;
  testMode?: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  customerId?: string;
  _rateLimit?: RateLimit;
  customer?: Customer;
  trackingLogs?: Log[];
};
