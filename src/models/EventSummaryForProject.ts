import { EventSummaryForAsset } from "./EventSummaryForAsset";
import { Log } from "./Log";
import { Project } from "./Project";
import { BasedOnRulesEventSummaryForProject } from "./eventTypes/BasedOnRulesEventSummaryForProject";
import { BlacklistSearchEventSummaryForProject } from "./eventTypes/BlacklistSearchEventSummaryForProject";

export type EventSummaryForProject = {
  0?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  1?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  2?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  3?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  4?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  5?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  6?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  7?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  8?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  9?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  10?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  11?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  12?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  13?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  14?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  15?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  16?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  17?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  18?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  19?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  20?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  21?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  22?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  23?:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  type: string;
  date: Date;
  from?: Date;
  to?: Date;
  year: number;
  month: number;
  day: number;
  detail:
    | BasedOnRulesEventSummaryForProject
    | BlacklistSearchEventSummaryForProject;
  updated: boolean;
  created?: Date;
  modified?: Date;
  deleted?: Date;
  id?: string;
  projectId?: string;
  eventSummaryForAssets?: EventSummaryForAsset[];
  trackingLogs?: Log[];
  project?: Project;
};
