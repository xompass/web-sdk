import { Asset } from "./Asset";
import { AssetStatusDetails } from "./AssetStatusDetails";
import { EventComment } from "./EventComment";
import { EventStateChange } from "./EventStateChange";
import { Log } from "./Log";
import { Project } from "./Project";

export type HealthcheckEvent = {
  currentState?: "IN_PROGRESS" | "RESOLVED" | "IGNORED" | "OPENED" | "PENDING";
  seen: boolean;
  expiresAt?: Date;
  healthStatus?: "ONLINE" | "OFFLINE" | "OUTDATED" | "UNKNOWN";
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
  comments?: EventComment[];
  data?: HealthcheckEventData[];
  project?: Project;
  stateChanges?: EventStateChange[];
  trackingLogs?: Log[];
};

export type HealthcheckEventData = {
  id?: string;
  healthStatus: "ONLINE" | "OFFLINE" | "UNKNOWN" | "OUTDATED";
  requested?: AssetStatusDetails;
  referenceImage?: AssetStatusDetails;
  healthcheckSensors?: AssetStatusDetails;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  trackingLogs?: Log[];
};
