import { Customer } from "./Customer";
import { FaceSubject } from "./FaceSubject";
import { Log } from "./Log";
import { Project } from "./Project";

export type FaceDatabase = {
  name: string;
  description?: string;
  type: string;
  state?: string;
  externalId?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  projectId?: string;
  customer?: Customer;
  faceSubjects?: FaceSubject[];
  project?: Project;
  trackingLogs?: Log[];
};
