import { Asset } from './Asset';
import { CommonAccessToken } from './CommonAccessToken';
import { Country } from './Country';
import { Credential } from './Credential';
import { Log } from './Log';
import { TimeZone } from './TimeZone';
import { Var } from './Var';

export type Admin = {
  name: string;
  surname?: string;
  phone?: string;
  address?: string;
  birthday?: Date;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  username?: string;
  email: string;
  emailVerified?: boolean;
  id?: string;
  countryId?: string;
  timeZoneId?: string;
  varId?: string;
  accessTokens?: CommonAccessToken[];
  country?: Country;
  container?: AdminStorageContainer;
  credentials?: Credential[];
  assets?: Asset[];
  activityLogs?: Log[];
  trackingLogs?: Log[];
  timeZone?: TimeZone;
  var?: Var;
};

export type AdminStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  adminId?: string;
  _profile?: File;
};
