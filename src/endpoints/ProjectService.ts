import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { Asset } from "../models/Asset";
import { AssetOperabilitySummary } from "../models/AssetOperabilitySummary";
import {
  Project_ApplyAssetState_Body,
  Project_GetCommonAssetStates_Response,
  Project_ReviewFilteredEventData_Body,
  Project_ReviewFilteredEventData_Response,
  Project_SearchEvents_Body,
  Project_SearchEvents_Response,
} from "../models/EndpointTypes";
import { Event } from "../models/Event";
import { EventSubject } from "../models/EventSubject";
import { FaceDatabase } from "../models/FaceDatabase";
import { FaceDetection } from "../models/FaceDetection";
import { FaceSubject } from "../models/FaceSubject";
import { ProjectOperabilitySummary } from "../models/ProjectOperabilitySummary";
import { ProjectRestrictionTable } from "../models/ProjectRestrictionTable";
import { RateLimit } from "../models/RateLimit";
import { ResponseProtocol } from "../models/ResponseProtocol";
import {
  LicensePlateDetection,
  Watchlist,
  WatchlistBulkCreateResult,
  WatchlistCreate,
  WatchlistMergeResult,
  WatchlistReplaceResult,
  WatchlistUpdate,
  WatchlistVehicle,
  WatchlistVehicleCreate,
  WatchlistVehicleUpdate,
} from "../models/Watchlist";

/**
 * Find a related item by id for eventSubjects.
 * /Projects/:id/eventSubjects/:fk
 */
export async function Project_FindByIdEventSubjects(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventSubject> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/eventSubjects/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for assetOperabilitySummaries.
 * /Projects/:id/assetOperabilitySummaries/:fk
 */
export async function Project_UpdateByIdAssetOperabilitySummaries(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<AssetOperabilitySummary> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/assetOperabilitySummaries/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for faceDatabases.
 * /Projects/:id/faceDatabases/:fk
 */
export async function Project_FindByIdFaceDatabases(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<FaceDatabase> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceDatabases/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for faceDatabases.
 * /Projects/:id/faceDatabases/:fk
 */
export async function Project_DestroyByIdFaceDatabases(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/faceDatabases/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for faceDatabases.
 * /Projects/:id/faceDatabases/:fk
 */
export async function Project_UpdateByIdFaceDatabases(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<FaceDatabase> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/faceDatabases/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for faceSubjects.
 * /Projects/:id/faceSubjects/:fk
 */
export async function Project_FindByIdFaceSubjects(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<FaceSubject> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceSubjects/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for operabilitySummaries.
 * /Projects/:id/operabilitySummaries/:fk
 */
export async function Project_UpdateByIdOperabilitySummaries(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<ProjectOperabilitySummary> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/operabilitySummaries/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Fetches hasOne relation restrictionTable.
 * /Projects/:id/restrictionTable
 */
export async function Project_GetRestrictionTable(
  id: string,
  options?: ApiRequestOptions,
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/restrictionTable",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in restrictionTable of this model.
 * /Projects/:id/restrictionTable
 */
export async function Project_CreateRestrictionTable(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Update restrictionTable of this model.
 * /Projects/:id/restrictionTable
 */
export async function Project_UpdateRestrictionTable(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Fetches hasOne relation rateLimit.
 * /Projects/:id/rateLimit
 */
export async function Project_GetRateLimit(
  id: string,
  options?: ApiRequestOptions,
): Promise<RateLimit> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/rateLimit",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in rateLimit of this model.
 * /Projects/:id/rateLimit
 */
export async function Project_CreateRateLimit(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<RateLimit> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/rateLimit",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Update rateLimit of this model.
 * /Projects/:id/rateLimit
 */
export async function Project_UpdateRateLimit(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<RateLimit> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/rateLimit",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for responseProtocols.
 * /Projects/:id/responseProtocols/:fk
 */
export async function Project_FindByIdResponseProtocols(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<ResponseProtocol> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/responseProtocols/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for responseProtocols.
 * /Projects/:id/responseProtocols/:fk
 */
export async function Project_DestroyByIdResponseProtocols(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/responseProtocols/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for responseProtocols.
 * /Projects/:id/responseProtocols/:fk
 */
export async function Project_UpdateByIdResponseProtocols(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<ResponseProtocol> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/responseProtocols/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries eventSubjects of Project.
 * /Projects/:id/eventSubjects
 */
export async function Project_GetEventSubjects(
  id: string,
  filter?: Filter<EventSubject>,
  options?: ApiRequestOptions,
): Promise<EventSubject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/eventSubjects",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts eventSubjects of Project.
 * /Projects/:id/eventSubjects/count
 */
export async function Project_CountEventSubjects(
  id: string,
  where?: Filter<EventSubject>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/eventSubjects/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries assetOperabilitySummaries of Project.
 * /Projects/:id/assetOperabilitySummaries
 */
export async function Project_GetAssetOperabilitySummaries(
  id: string,
  filter?: Filter<AssetOperabilitySummary>,
  options?: ApiRequestOptions,
): Promise<AssetOperabilitySummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/assetOperabilitySummaries",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts assetOperabilitySummaries of Project.
 * /Projects/:id/assetOperabilitySummaries/count
 */
export async function Project_CountAssetOperabilitySummaries(
  id: string,
  where?: Filter<AssetOperabilitySummary>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/assetOperabilitySummaries/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries faceDatabases of Project.
 * /Projects/:id/faceDatabases
 */
export async function Project_GetFaceDatabases(
  id: string,
  filter?: Filter<FaceDatabase>,
  options?: ApiRequestOptions,
): Promise<FaceDatabase[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceDatabases",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in faceDatabases of this model.
 * /Projects/:id/faceDatabases
 */
export async function Project_CreateFaceDatabases(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<FaceDatabase> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/faceDatabases",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts faceDatabases of Project.
 * /Projects/:id/faceDatabases/count
 */
export async function Project_CountFaceDatabases(
  id: string,
  where?: Filter<FaceDatabase>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceDatabases/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries faceSubjects of Project.
 * /Projects/:id/faceSubjects
 */
export async function Project_GetFaceSubjects(
  id: string,
  filter?: Filter<FaceSubject>,
  options?: ApiRequestOptions,
): Promise<FaceSubject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceSubjects",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts faceSubjects of Project.
 * /Projects/:id/faceSubjects/count
 */
export async function Project_CountFaceSubjects(
  id: string,
  where?: Filter<FaceSubject>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceSubjects/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries events of Project.
 * /Projects/:id/events
 */
export async function Project_GetEvents(
  id: string,
  filter?: Filter<Event>,
  options?: ApiRequestOptions,
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/events",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts events of Project.
 * /Projects/:id/events/count
 */
export async function Project_CountEvents(
  id: string,
  where?: Filter<Event>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/events/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries operabilitySummaries of Project.
 * /Projects/:id/operabilitySummaries
 */
export async function Project_GetOperabilitySummaries(
  id: string,
  filter?: Filter<ProjectOperabilitySummary>,
  options?: ApiRequestOptions,
): Promise<ProjectOperabilitySummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/operabilitySummaries",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts operabilitySummaries of Project.
 * /Projects/:id/operabilitySummaries/count
 */
export async function Project_CountOperabilitySummaries(
  id: string,
  where?: Filter<ProjectOperabilitySummary>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/operabilitySummaries/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries responseProtocols of Project.
 * /Projects/:id/responseProtocols
 */
export async function Project_GetResponseProtocols(
  id: string,
  filter?: Filter<ResponseProtocol>,
  options?: ApiRequestOptions,
): Promise<ResponseProtocol[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/responseProtocols",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in responseProtocols of this model.
 * /Projects/:id/responseProtocols
 */
export async function Project_CreateResponseProtocols(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<ResponseProtocol> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/responseProtocols",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts responseProtocols of Project.
 * /Projects/:id/responseProtocols/count
 */
export async function Project_CountResponseProtocols(
  id: string,
  where?: Filter<ResponseProtocol>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/responseProtocols/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Suscribe to web-socket service (WSS)
 * /Projects/:id/sockets/:socketId/subscribe
 */
export async function Project_subscribe(
  id: string,
  socketId: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/sockets/:socketId/subscribe",
    routeParams: {
      id,
      socketId,
    },
    ...options,
  });
}
/**
 * Unsuscribe from web-socket service (WSS)
 * /Projects/:id/sockets/:socketId/unsubscribe
 */
export async function Project_unsubscribe(
  id: string,
  socketId: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/sockets/:socketId/unsubscribe",
    routeParams: {
      id,
      socketId,
    },
    ...options,
  });
}
/**
 * Get the project home indicators for assets and events from the last 24 hours
 * /Projects/:id/summary
 */
export async function Project_getSummary(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/summary",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get common asset states
 * /Projects/:id/commonAssetStates
 */
export async function Project_GetCommonAssetStates(
  id: string,
  assetIds: string[],
  options?: ApiRequestOptions,
): Promise<Project_GetCommonAssetStates_Response> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/commonAssetStates",
    routeParams: {
      id,
    },
    body: assetIds,
    ...options,
  });
}
/**
 * Apply asset state
 * /Projects/:id/applyAssetState
 */
export async function Project_ApplyAssetState(
  id: string,
  body: Project_ApplyAssetState_Body,
  options?: ApiRequestOptions,
): Promise<string[]> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/applyAssetState",
    routeParams: {
      id,
    },
    body: body,
    ...options,
  });
}
/**
 * Search face detections by subject
 * /Projects/:id/faceDetections/search
 */
export async function Project_searchFaceDetections(
  id: string,
  subjectId?: string,
  from?: Date,
  to?: Date,
  assetId?: string,
  sensorId?: string,
  limit?: number,
  options?: ApiRequestOptions,
): Promise<FaceDetection[]> {
  const _urlParams: any = {};
  if (subjectId != null) {
    _urlParams["subjectId"] = subjectId;
  }
  if (from != null) {
    _urlParams["from"] = from;
  }
  if (to != null) {
    _urlParams["to"] = to;
  }
  if (assetId != null) {
    _urlParams["assetId"] = assetId;
  }
  if (sensorId != null) {
    _urlParams["sensorId"] = sensorId;
  }
  if (limit != null) {
    _urlParams["limit"] = limit;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceDetections/search",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get face detections by date range
 * /Projects/:id/faceDetections
 */
export async function Project_getFaceDetections(
  id: string,
  from?: Date,
  to?: Date,
  assetId?: string,
  sensorId?: string,
  limit?: number,
  options?: ApiRequestOptions,
): Promise<FaceDetection[]> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams["from"] = from;
  }
  if (to != null) {
    _urlParams["to"] = to;
  }
  if (assetId != null) {
    _urlParams["assetId"] = assetId;
  }
  if (sensorId != null) {
    _urlParams["sensorId"] = sensorId;
  }
  if (limit != null) {
    _urlParams["limit"] = limit;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/faceDetections",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Search license plates
 * /Projects/:id/licensePlates/search
 */
export async function Project_searchLicensePlates(
  id: string,
  licensePlate: string,
  from: Date,
  to: Date,
  method?: string,
  maxDistance?: number,
  transpositions?: boolean,
  assetId?: string,
  sensorId?: string,
  class_?: string,
  limit?: number,
  options?: ApiRequestOptions,
): Promise<LicensePlateDetection[]> {
  const _urlParams: any = {};
  if (licensePlate != null) {
    _urlParams["licensePlate"] = licensePlate;
  }
  if (from != null) {
    _urlParams["from"] = from;
  }
  if (to != null) {
    _urlParams["to"] = to;
  }
  if (method != null) {
    _urlParams["method"] = method;
  }
  if (maxDistance != null) {
    _urlParams["maxDistance"] = maxDistance;
  }
  if (transpositions != null) {
    _urlParams["transpositions"] = transpositions;
  }
  if (assetId != null) {
    _urlParams["assetId"] = assetId;
  }
  if (sensorId != null) {
    _urlParams["sensorId"] = sensorId;
  }
  if (class_ != null) {
    _urlParams["class"] = class_;
  }
  if (limit != null) {
    _urlParams["limit"] = limit;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/licensePlates/search",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get license plates
 * /Projects/:id/licensePlates
 */
export async function Project_getLicensePlates(
  id: string,
  from?: Date,
  to?: Date,
  assetId?: string,
  sensorId?: string,
  class_?: string,
  limit?: number,
  groupInterval?: number,
  groupMaxDistance?: number,
  options?: ApiRequestOptions,
): Promise<LicensePlateDetection[]> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams["from"] = from;
  }
  if (to != null) {
    _urlParams["to"] = to;
  }
  if (assetId != null) {
    _urlParams["assetId"] = assetId;
  }
  if (sensorId != null) {
    _urlParams["sensorId"] = sensorId;
  }
  if (class_ != null) {
    _urlParams["class"] = class_;
  }
  if (limit != null) {
    _urlParams["limit"] = limit;
  }
  if (groupInterval != null) {
    _urlParams["groupInterval"] = groupInterval;
  }
  if (groupMaxDistance != null) {
    _urlParams["groupMaxDistance"] = groupMaxDistance;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/licensePlates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * List plates watch lists
 * /Projects/:id/licensePlates/watchlists
 */
export async function Project_getLicensePlatesWatchlists(
  id: string,
  options?: ApiRequestOptions,
): Promise<Watchlist[]> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/licensePlates/watchlists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Create license plate watch list
 * /Projects/:id/licensePlates/watchlists
 */
export async function Project_createLicensePlateWatchlist(
  id: string,
  data: WatchlistCreate,
  options?: ApiRequestOptions,
): Promise<Watchlist> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/licensePlates/watchlists",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Update license plate watch list
 * /Projects/:id/licensePlates/watchlists/:nk
 */
export async function Project_updateLicensePlateWatchlist(
  id: string,
  nk: string,
  data: WatchlistUpdate,
  options?: ApiRequestOptions,
): Promise<Watchlist> {
  return ApiFetch({
    method: "PATCH",
    url: "/Projects/:id/licensePlates/watchlists/:nk",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Delete license plate watch list
 * /Projects/:id/licensePlates/watchlists/:nk
 */
export async function Project_deleteLicensePlateWatchlist(
  id: string,
  nk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/licensePlates/watchlists/:nk",
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
}
/**
 * Add vehicle to watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles
 */
export async function Project_addVehicleToWatchlist(
  id: string,
  nk: string,
  data: WatchlistVehicleCreate,
  options?: ApiRequestOptions,
): Promise<WatchlistVehicle> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/licensePlates/watchlists/:nk/vehicles",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * List vehicles in watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles
 */
export async function Project_listVehiclesInWatchlist(
  id: string,
  nk: string,
  options?: ApiRequestOptions,
): Promise<WatchlistVehicle[]> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/licensePlates/watchlists/:nk/vehicles",
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
}
/**
 * Update vehicle in watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/:licensePlate
 */
export async function Project_updateVehicleInWatchlist(
  id: string,
  nk: string,
  licensePlate: string,
  data: WatchlistVehicleUpdate,
  options?: ApiRequestOptions,
): Promise<WatchlistVehicle> {
  return ApiFetch({
    method: "PATCH",
    url: "/Projects/:id/licensePlates/watchlists/:nk/vehicles/:licensePlate",
    routeParams: {
      id,
      nk,
      licensePlate,
    },
    body: data,
    ...options,
  });
}
/**
 * Delete vehicle from watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/:licensePlate
 */
export async function Project_deleteVehicleFromWatchlist(
  id: string,
  nk: string,
  licensePlate: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/licensePlates/watchlists/:nk/vehicles/:licensePlate",
    routeParams: {
      id,
      nk,
      licensePlate,
    },
    ...options,
  });
}
/**
 * Add many vehicles to watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/bulk
 */
export async function Project_createManyVehiclesInWatchlist(
  id: string,
  nk: string,
  data: WatchlistVehicleCreate[],
  options?: ApiRequestOptions,
): Promise<WatchlistBulkCreateResult[]> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/licensePlates/watchlists/:nk/vehicles/bulk",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Create or update many vehicles to watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/merge
 */
export async function Project_mergeWatchlistVehicles(
  id: string,
  nk: string,
  data: WatchlistVehicleCreate[],
  options?: ApiRequestOptions,
): Promise<WatchlistMergeResult[]> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/licensePlates/watchlists/:nk/vehicles/merge",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Replace vehicles in watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/replace
 */
export async function Project_replaceWatchlistVehicles(
  id: string,
  nk: string,
  data: WatchlistVehicleCreate[],
  options?: ApiRequestOptions,
): Promise<WatchlistReplaceResult[]> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/licensePlates/watchlists/:nk/vehicles/replace",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Search and count project events using a request body
 * /Projects/:id/events/search
 */
export async function Project_searchEvents(
  id: string,
  body: Project_SearchEvents_Body,
  options?: ApiRequestOptions,
): Promise<Project_SearchEvents_Response> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/events/search",
    routeParams: {
      id,
    },
    body: body,
    ...options,
  });
}
/**
 * Mark filtered event data as reviewed through a revision
 * /Projects/:id/events/:eventId/review-filtered-data
 */
export async function Project_reviewFilteredEventData(
  id: string,
  eventId: string,
  body: Project_ReviewFilteredEventData_Body,
  options?: ApiRequestOptions,
): Promise<Project_ReviewFilteredEventData_Response> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/events/:eventId/review-filtered-data",
    routeParams: {
      id,
      eventId,
    },
    body: body,
    ...options,
  });
}
/**
 * Evaluate a virtual expression in a date interval
 * /Projects/:id/virtualExpressions/:fk/evaluate
 */
export async function Project_EvaluateVirtualExpressions(
  id: string,
  fk: string,
  from: Date,
  to: Date,
  groupIntervals?: any[],
  groupMode?: "avg" | "sum" | "min" | "max",
  groupUtc?: number,
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams["from"] = from;
  }
  if (to != null) {
    _urlParams["to"] = to;
  }
  if (groupIntervals != null) {
    _urlParams["group_intervals"] = groupIntervals;
  }
  if (groupMode != null) {
    _urlParams["group_mode"] = groupMode;
  }
  if (groupUtc != null) {
    _urlParams["group_utc"] = groupUtc;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/virtualExpressions/:fk/evaluate",
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries assets of ResponseProtocol.
 * /Projects/:id/responseProtocols/:nk/assets
 */
export async function Project_GetResponseProtocolsAssets(
  id: string,
  nk: string,
  filter?: Filter<Asset>,
  options?: ApiRequestOptions,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/responseProtocols/:nk/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
}
/**
 * Counts assets of ResponseProtocol.
 * /Projects/:id/responseProtocols/:nk/assets/count
 */
export async function Project_CountResponseProtocolsAssets(
  id: string,
  nk: string,
  where?: Filter<Asset>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Projects/:id/responseProtocols/:nk/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
