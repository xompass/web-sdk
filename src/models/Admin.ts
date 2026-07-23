import { Asset } from "./Asset";
import { CommonAccessToken } from "./CommonAccessToken";
import { Country } from "./Country";
import { Credential } from "./Credential";
import { FileMetadata } from "./FileMetadata";
import { Log } from "./Log";
import { TimeZone } from "./TimeZone";
import { Var } from "./Var";

export type Admin = {
  name: string;
  surname?: string;
  phone?: string;
  address?: string;
  birthday?: Date;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  otpEnabled?: boolean;
  disabledPasswordLogin?: boolean;
  username?: string;
  email: string;
  emailVerified?: boolean;
  id?: string;
  countryId?: string;
  timeZoneId?: string;
  varId?: string;
  accessTokens?: CommonAccessToken[];
  activityLogs?: Log[];
  assets?: Asset[];
  container?: AdminStorageContainer;
  country?: Country;
  credentials?: Credential[];
  timeZone?: TimeZone;
  trackingLogs?: Log[];
  var?: Var;
};

export type AdminStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  adminId?: string;
  _profile?: FileMetadata;
  admin?: Admin;
  profile?: FileMetadata[];
  trackingLogs?: Log[];
};
