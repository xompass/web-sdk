import { Log } from "./Log";

export type CredentialType = {
  name: string;
  description?: string;
  type: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  trackingLogs?: Log[];
};
