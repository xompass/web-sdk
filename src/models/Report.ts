import { Asset } from './Asset';
import { Log } from './Log';
import { Manager } from './Manager';
import { Project } from './Project';

export type Report = {
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
} & (
  | {
      type: 'ROUND_OF_GUARD';
      parameters: {
        roundGroupTimeM: number;
        maxImagesPerRound: number;
        roundStart: string;
        roundEnd: string;
      };
    }
  | {
      type: 'STORE_OPENING';
    }
  | {
      type: 'ACCESS_CONTROL';
      parameters: {
        maxImagesPerHour: number;
        classes: string[];
        viewMode: 'entry' | 'exit' | 'both';
      };
    }
);
