import { Asset } from './Asset';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type BaseReport = {
  name: string;
  description?: string;
  emails?: string[];
  scheduler?: {
    minute: number;
    hour: number;
  };
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  assetIds?: string[];
  trackingLogs?: Log[];
  project?: Project;
  managers?: Manager[];
  assets?: Asset[];
};

export type RoundOfGuardReport = BaseReport & {
  type: 'ROUND_OF_GUARD';
  parameters: {
    roundGroupTimeM: number;
    maxImagesPerRound: number;
    roundStart: string;
    roundEnd: string;
  };
};

export type StoreOpeningReport = BaseReport & {
  type: 'STORE_OPENING';
};

export type AccessControlReport = BaseReport & {
  type: 'ACCESS_CONTROL';
  parameters: {
    maxImagesPerHour: number;
    classes: string[];
    viewMode: 'entry' | 'exit' | 'both';
  };
};

export type OpenGateReport = BaseReport & {
  type: 'OPEN_GATE';
  parameters: {
    maxImagesPerHour: number;
    subject?: string;
  };
};

export type Report =
  | RoundOfGuardReport
  | StoreOpeningReport
  | AccessControlReport
  | OpenGateReport;

export type ReportType = Report['type'];
