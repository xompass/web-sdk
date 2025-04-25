import { Asset } from './Asset';
import { Customer } from './Customer';
import { Log } from './Log';
import { Project } from './Project';

export type ResponseProtocol = {
  name: string;
  description?: string;
  protocol?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  customerId?: string;
  trackingLogs?: Log[];
  project?: Project;
  customer?: Customer;
  assets?: Asset[];
};
