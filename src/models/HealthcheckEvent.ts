import { Asset } from './Asset';
import { AssetStatusDetails } from './AssetStatusDetails';
import { EventComment } from './EventComment';
import { EventStateChange } from './EventStateChange';
import { Log } from './Log';
import { Project } from './Project';

export type HealthcheckEvent = {
  currentState?: string;
  seen: boolean;
  expiresAt?: Date;
  healthStatus?: string;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  assetId?: string;
  _comments?: EventComment[];
  _stateChanges?: EventStateChange[];
  _data?: HealthcheckEventData;
  projectId?: string;
  asset?: Asset;
  trackingLogs?: Log[];
  project?: Project;
};

export type HealthcheckEventData = {
  id?: string;
  healthStatus: string;
  requested?: AssetStatusDetails;
  referenceImage?: AssetStatusDetails;
  healthcheckSensors?: AssetStatusDetails;
  created?: Date;
  modified?: Date;
  deleted?: Date;
};
