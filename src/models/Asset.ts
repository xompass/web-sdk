import { Admin } from './Admin';
import { Alert } from './Alert';
import { AlertHistory } from './AlertHistory';
import { AssetConfig } from './AssetConfig';
import { AssetMilestone } from './AssetMilestone';
import { AssetRestrictionTable } from './AssetRestrictionTable';
import { AssetStaff } from './AssetStaff';
import { AssetState } from './AssetState';
import { AssetStateChange } from './AssetStateChange';
import { AssetTemplate } from './AssetTemplate';
import { AssetWizardType } from './AssetWizardType';
import { Credential } from './Credential';
import { Customer } from './Customer';
import { Dataset } from './Dataset';
import { EdgeAgent } from './EdgeAgent';
import { Event } from './Event';
import { EventGroup } from './EventGroup';
import { EventSummary } from './EventSummary';
import { EventSummaryForAsset } from './EventSummaryForAsset';
import { EventTrigger } from './EventTrigger';
import { HealthcheckEvent } from './HealthcheckEvent';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';
import { Sensor } from './Sensor';
import { SensorUptime } from './SensorUptime';
import { SensorUptimeCollector } from './SensorUptimeCollector';
import { Summary } from './Summary';
import { AssetStatusDetails } from './AssetStatusDetails';
import { FileMetadata } from './FileMetadata';

export type Asset = {
  type: string;
  name?: string;
  icon?: string;
  description?: string;
  referenceId?: string;
  uri?: string;
  path?: string[];
  requested?: Date;
  settingsType?: string;
  healthcheckEventsEnabled?: boolean;
  currentHealthStatus?: string;
  currentHealthStatusDetails?: AssetCurrentStatusDetails;
  tags?: string[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  _config?: AssetConfig;
  currentStateId?: string;
  templateId?: string;
  assetWizardTypeId?: string;
  customerId?: string;
  projectId?: string;
  assets?: Asset[];
  asset?: Asset;
  alerts?: Alert[];
  alertHistory?: AlertHistory[];
  milestone?: AssetMilestone;
  restrictionTable?: AssetRestrictionTable;
  staffs?: AssetStaff[];
  assetStates?: AssetState[];
  currentState?: AssetState;
  nextState?: AssetStateChange;
  container?: AssetStorageContainer;
  template?: AssetTemplate;
  assetWizardType?: AssetWizardType;
  credentials?: Credential[];
  admins?: Admin[];
  customer?: Customer;
  datasets?: Dataset[];
  edgeAgents?: EdgeAgent[];
  events?: Event[];
  eventGroups?: EventGroup[];
  eventSummaries?: EventSummary[];
  eventSummaryForAssets?: EventSummaryForAsset[];
  eventTriggers?: EventTrigger[];
  healthcheckEvents?: HealthcheckEvent[];
  trackingLogs?: Log[];
  managers?: Manager[];
  project?: Project;
  sensors?: Sensor[];
  sensorUptimes?: SensorUptime[];
  sensorUptimeCollectors?: SensorUptimeCollector[];
  summaries?: Summary[];
};

export type AssetCurrentStatusDetails = {
  nextCheck?: Date;
  lastNotification?: Date;
  requested?: AssetStatusDetails;
  referenceImage?: AssetStatusDetails;
  healthcheckSensors?: any[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
};

export type AssetStorageContainer = {
  id?: string;
  resources?: any;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  assetId?: string;
  _picture?: FileMetadata;
  _background?: FileMetadata;
  _files?: FileMetadata[];
};
