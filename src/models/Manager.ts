import { Asset } from './Asset';
import { CctvDashboard } from './CctvDashboard';
import { CommonAccessToken } from './CommonAccessToken';
import { Country } from './Country';
import { Credential } from './Credential';
import { Customer } from './Customer';
import { EventDashboard } from './EventDashboard';
import { File } from './File';
import { Log } from './Log';
import { PeopleCounterReport } from './PeopleCounterReport';
import { Report } from './Report';
import { TimeZone } from './TimeZone';
import { TrafficFlowAnalysis } from './TrafficFlowAnalysis';
import { View } from './View';

export type Manager = {
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
  customerId?: string;
  countryId?: string;
  timeZoneId?: string;
  accessTokens?: CommonAccessToken[];
  activityLogs?: Log[];
  trackingLogs?: Log[];
  credentials?: Credential[];
  customer?: Customer;
  country?: Country;
  assets?: Asset[];
  cctvDashboards?: CctvDashboard[];
  eventDashboards?: EventDashboard[];
  container?: ManagerStorageContainer;
  peopleCounterReports?: PeopleCounterReport[];
  permission?: Permission;
  reports?: Report[];
  timeZone?: TimeZone;
  trafficFlowAnalysis?: TrafficFlowAnalysis[];
  views?: View[];
};

export type ManagerStorageContainer = {
  id?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  managerId?: string;
  _profile?: File;
};

export type Permission = {
  master?: boolean;
  agents?: CRUD;
  alerts?: CRUD;
  apiKeys?: CRUD;
  assets?: CRUD;
  assetStaffs?: CRUD;
  assetStates?: CRUD;
  biPanels?: CRUD;
  cctvDashboards?: CRUD;
  controls?: CRUD;
  credentials?: CRUD;
  dashboards?: CRUD;
  defaultEventComments?: CRUD;
  devices?: CRUD;
  deviceEvents?: CRUD;
  embeddedReports?: CRUD;
  emergencyContacts?: CRUD;
  events?: CRUD;
  eventGroups?: CRUD;
  eventDashboards?: CRUD;
  eventComments?: CRUD;
  eventStates?: CRUD;
  eventTriggers?: CRUD;
  gis?: CRUD;
  managers?: CRUD;
  peopleCounterReports?: CRUD;
  projects?: CRUD;
  processLayouts?: CRUD;
  rekognitions?: CRUD;
  reports?: CRUD;
  sensors?: CRUD;
  storeDashboards?: CRUD;
  storeVideoAnalyticDashboards?: CRUD;
  telegramChats?: CRUD;
  trafficFlowAnalysis?: CRUD;
  virtualExpressions?: CRUD;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  managerId?: string;
};

export type CRUD = {
  create?: boolean;
  read?: boolean;
  update?: boolean;
  delete?: boolean;
  id?: string;
};
