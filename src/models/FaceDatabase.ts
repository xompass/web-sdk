import { Customer } from './Customer';
import { FaceSubject } from './FaceSubject';
import { Log } from './Log';
import { Project } from './Project';

export type FaceDatabase = {
  name: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  projectId?: string;
  customer?: Customer;
  faceSubjects?: FaceSubject[];
  trackingLogs?: Log[];
  project?: Project;
};
