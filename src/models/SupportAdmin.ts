import { CommonAccessToken } from "./CommonAccessToken";
import { FileMetadata } from "./FileMetadata";
import { Log } from "./Log";
import { Var } from "./Var";

export type SupportAdmin = {
  name: string;
  surname?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  otpEnabled?: boolean;
  disabledPasswordLogin?: boolean;
  username?: string;
  email: string;
  emailVerified?: boolean;
  id?: string;
  accessTokens?: CommonAccessToken[];
  activityLogs?: Log[];
  container?: SupportAdminStorageContainer;
  trackingLogs?: Log[];
  vars?: Var[];
};

export type SupportAdminStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  supportAdminId?: string;
  _profile?: FileMetadata;
  profile?: FileMetadata[];
  supportAdmin?: SupportAdmin;
  trackingLogs?: Log[];
};
