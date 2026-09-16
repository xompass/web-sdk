import type { Event } from "./Event";

export type EventDashboard_GetDisabledEventTriggersResponse = {
  assetStates?: { id: string; name: string }[];
  eventTriggers: {
    id: string;
    name: string;
    subject: string;
    assetId: string;
    states: { id: string; assetStateId: string }[];
  }[];
  total?: number;
  limit?: number;
  skip?: number;
};

export type Project_GetCommonAssetStates_Response = {
  states: {
    name: string;
    assets: number[];
  }[];
  assets: {
    id: string;
    name: string;
    currentState?: {
      id: string;
      name: string;
    };
  }[];
};

export type Project_ApplyAssetState_Body = {
  stateName: string;
  assetIds: string[];
};

export type Project_SearchEvents_Body = {
  assetIds: string[];
  from: Date | string;
  to: Date | string;
  falsePositive: boolean;
  subjectTypeIds?: string[];
  eventTriggerIds?: string[];
  states?: string[];
  starred?: boolean;
  seen?: boolean;
  cursor?: {
    created: Date | string;
    id: string;
  };
  modifiedFrom?: Date | string;
  limit: number;
  includeTotal?: boolean;
};

export type Project_SearchEvents_Response = {
  events: Event[];
  total?: number;
};

export type Project_ReviewFilteredEventData_Body = {
  reviewedThroughRevision: number;
};

export type Project_ReviewFilteredEventData_Response = {
  filteredRevision: number;
  reviewedFilteredDataRevision: number;
  filteredDataReviewedAt: Date | string;
  hasFilteredDataAfterReview: boolean;
};

export type VirtualExpressionGroupInterval = "hour" | "day" | "week" | "month";

export type VirtualExpressionEvaluateResponse = {
  virtualExpressionId: string;
  from: Date;
  to: Date;
  groupIntervals: VirtualExpressionGroupInterval[];
  groupUTC: number;
  data: Record<
    VirtualExpressionGroupInterval,
    { value: number; from: Date; to: Date }[]
  >;
};
