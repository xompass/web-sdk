export type EventDashboard_GetDisabledEventTriggersResponse = {
  assetStates?: { id: string; name: string }[];
  eventTriggers: {
    id: string;
    name: string;
    subject: string;
    assetId: string;
    states: { id: string; assetStateId: string }[];
  }[];
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
