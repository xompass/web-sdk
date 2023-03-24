import { Asset } from "./Asset";
import { AssetTemplate } from "./AssetTemplate";
import { BIPanel } from "./BIPanel";
import { CctvDashboard } from "./CctvDashboard";
import { Credential } from "./Credential";
import { Customer } from "./Customer";
import { EmbeddedReport } from "./EmbeddedReport";
import { EventDashboard } from "./EventDashboard";
import { EventSummaryForProject } from "./EventSummaryForProject";
import { Log } from "./Log";
import { PeopleCounterReport } from "./PeopleCounterReport";
import { ProjectRestrictionTable } from "./ProjectRestrictionTable";
import { ProjectTag } from "./ProjectTag";
import { Report } from "./Report";
import { SensorType } from "./SensorType";
import { SensorUptime } from "./SensorUptime";
import { SensorUptimeCollector } from "./SensorUptimeCollector";
import { StoreVideoAnalyticDashboard } from "./StoreVideoAnalyticDashboard";
import { Tool } from "./Tool";
import { Toolkit } from "./Toolkit";
import { TrafficFlowAnalysis } from "./TrafficFlowAnalysis";
import { VirtualExpression } from "./VirtualExpression";
import { VirtualGroup } from "./VirtualGroup";
import { VirtualVariable } from "./VirtualVariable";
import { YoloClass } from "./YoloClass";

export type Project = {
  name?: string;
  description?: string;
  logo?: string;
  sector?: string;
  keywords?: string[];
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  customerId?: string;
  tagIds?: string[];
  adminToolIds?: string[];
  toolIds?: string[];
  toolkitId?: string;
  trackingLogs?: Log[];
  customer?: Customer;
  assets?: Asset[];
  assetTemplates?: AssetTemplate[];
  credentials?: Credential[];
  cctvDashboards?: CctvDashboard[];
  eventDashboards?: EventDashboard[];
  eventSummaryForProjects?: EventSummaryForProject[];
  embeddedReports?: EmbeddedReport[];
  biPanels?: BIPanel[];
  peopleCounterReports?: PeopleCounterReport[];
  restrictionTable?: ProjectRestrictionTable;
  tags?: ProjectTag[];
  reports?: Report[];
  allowedSensorTypes?: SensorType[];
  sensorUptime?: SensorUptime[];
  sensorUptimeCollectors?: SensorUptimeCollector[];
  storeVideoAnalyticDashboards?: StoreVideoAnalyticDashboard[];
  adminTools?: Tool[];
  tools?: Tool[];
  toolkit?: Toolkit;
  trafficFlowAnalysis?: TrafficFlowAnalysis[];
  virtualExpressions?: VirtualExpression[];
  virtualGroups?: VirtualGroup[];
  virtualVariables?: VirtualVariable[];
  yoloClasses?: YoloClass[];
};
