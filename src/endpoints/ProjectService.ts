import { ApiFetch, Filter } from '../core/ApiFetch';
import { EventSubject } from '../models/EventSubject';
import { AssetOperabilitySummary } from '../models/AssetOperabilitySummary';
import { FaceDatabase } from '../models/FaceDatabase';
import { FaceSubject } from '../models/FaceSubject';
import { ProjectOperabilitySummary } from '../models/ProjectOperabilitySummary';
import { ProjectRestrictionTable } from '../models/ProjectRestrictionTable';
import { RateLimit } from '../models/RateLimit';
import { ResponseProtocol } from '../models/ResponseProtocol';
import { Asset } from '../models/Asset';
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
} from '../models/Watchlist';

/**
 * Api services for the `Project` model.
 */

/**
 * Find a related item by id for eventSubjects.
 * /Projects/:id/eventSubjects/:fk
 */
export async function Project_FindByIdEventSubjects(
  id: string,
  fk: string,
): Promise<EventSubject> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/eventSubjects/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for assetOperabilitySummaries.
 * /Projects/:id/assetOperabilitySummaries/:fk
 */
export async function Project_UpdateByIdAssetOperabilitySummaries(
  id: string,
  fk: string,
  data: any = {},
): Promise<AssetOperabilitySummary> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/assetOperabilitySummaries/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for faceDatabases.
 * /Projects/:id/faceDatabases/:fk
 */
export async function Project_FindByIdFaceDatabases(
  id: string,
  fk: string,
): Promise<FaceDatabase> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/faceDatabases/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for faceDatabases.
 * /Projects/:id/faceDatabases/:fk
 */
export async function Project_DestroyByIdFaceDatabases(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Projects/:id/faceDatabases/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for faceDatabases.
 * /Projects/:id/faceDatabases/:fk
 */
export async function Project_UpdateByIdFaceDatabases(
  id: string,
  fk: string,
  data: any = {},
): Promise<FaceDatabase> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/faceDatabases/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for faceSubjects.
 * /Projects/:id/faceSubjects/:fk
 */
export async function Project_FindByIdFaceSubjects(
  id: string,
  fk: string,
): Promise<FaceSubject> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/faceSubjects/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for operabilitySummaries.
 * /Projects/:id/operabilitySummaries/:fk
 */
export async function Project_UpdateByIdOperabilitySummaries(
  id: string,
  fk: string,
  data: any = {},
): Promise<ProjectOperabilitySummary> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/operabilitySummaries/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches hasOne relation restrictionTable.
 * /Projects/:id/restrictionTable
 */
export async function Project_GetRestrictionTable(
  id: string,
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/restrictionTable',
    routeParams: {
      id,
    },
  });
}
/**
 * Fetches hasOne relation rateLimit.
 * /Projects/:id/rateLimit
 */
export async function Project_GetRateLimit(id: string): Promise<RateLimit> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/rateLimit',
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in rateLimit of this model.
 * /Projects/:id/rateLimit
 */
export async function Project_CreateRateLimit(
  id: string,
  data: any = {},
): Promise<RateLimit> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/rateLimit',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Update rateLimit of this model.
 * /Projects/:id/rateLimit
 */
export async function Project_UpdateRateLimit(
  id: string,
  data: any = {},
): Promise<RateLimit> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/rateLimit',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Find a related item by id for responseProtocols.
 * /Projects/:id/responseProtocols/:fk
 */
export async function Project_FindByIdResponseProtocols(
  id: string,
  fk: string,
): Promise<ResponseProtocol> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/responseProtocols/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for responseProtocols.
 * /Projects/:id/responseProtocols/:fk
 */
export async function Project_DestroyByIdResponseProtocols(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Projects/:id/responseProtocols/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for responseProtocols.
 * /Projects/:id/responseProtocols/:fk
 */
export async function Project_UpdateByIdResponseProtocols(
  id: string,
  fk: string,
  data: any = {},
): Promise<ResponseProtocol> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/responseProtocols/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Queries eventSubjects of Project.
 * /Projects/:id/eventSubjects
 */
export async function Project_GetEventSubjects(
  id: string,
  filter?: Filter<EventSubject>,
): Promise<EventSubject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/eventSubjects',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts eventSubjects of Project.
 * /Projects/:id/eventSubjects/count
 */
export async function Project_CountEventSubjects(
  id: string,
  where?: Filter<EventSubject>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/eventSubjects/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries assetOperabilitySummaries of Project.
 * /Projects/:id/assetOperabilitySummaries
 */
export async function Project_GetAssetOperabilitySummaries(
  id: string,
  filter?: Filter<AssetOperabilitySummary>,
): Promise<AssetOperabilitySummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/assetOperabilitySummaries',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts assetOperabilitySummaries of Project.
 * /Projects/:id/assetOperabilitySummaries/count
 */
export async function Project_CountAssetOperabilitySummaries(
  id: string,
  where?: Filter<AssetOperabilitySummary>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/assetOperabilitySummaries/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries faceDatabases of Project.
 * /Projects/:id/faceDatabases
 */
export async function Project_GetFaceDatabases(
  id: string,
  filter?: Filter<FaceDatabase>,
): Promise<FaceDatabase[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/faceDatabases',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in faceDatabases of this model.
 * /Projects/:id/faceDatabases
 */
export async function Project_CreateFaceDatabases(
  id: string,
  data: any = {},
): Promise<FaceDatabase> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/faceDatabases',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts faceDatabases of Project.
 * /Projects/:id/faceDatabases/count
 */
export async function Project_CountFaceDatabases(
  id: string,
  where?: Filter<FaceDatabase>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/faceDatabases/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries faceSubjects of Project.
 * /Projects/:id/faceSubjects
 */
export async function Project_GetFaceSubjects(
  id: string,
  filter?: Filter<FaceSubject>,
): Promise<FaceSubject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/faceSubjects',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts faceSubjects of Project.
 * /Projects/:id/faceSubjects/count
 */
export async function Project_CountFaceSubjects(
  id: string,
  where?: Filter<FaceSubject>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/faceSubjects/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries operabilitySummaries of Project.
 * /Projects/:id/operabilitySummaries
 */
export async function Project_GetOperabilitySummaries(
  id: string,
  filter?: Filter<ProjectOperabilitySummary>,
): Promise<ProjectOperabilitySummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/operabilitySummaries',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts operabilitySummaries of Project.
 * /Projects/:id/operabilitySummaries/count
 */
export async function Project_CountOperabilitySummaries(
  id: string,
  where?: Filter<ProjectOperabilitySummary>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/operabilitySummaries/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries responseProtocols of Project.
 * /Projects/:id/responseProtocols
 */
export async function Project_GetResponseProtocols(
  id: string,
  filter?: Filter<ResponseProtocol>,
): Promise<ResponseProtocol[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/responseProtocols',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in responseProtocols of this model.
 * /Projects/:id/responseProtocols
 */
export async function Project_CreateResponseProtocols(
  id: string,
  data: any = {},
): Promise<ResponseProtocol> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/responseProtocols',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts responseProtocols of Project.
 * /Projects/:id/responseProtocols/count
 */
export async function Project_CountResponseProtocols(
  id: string,
  where?: Filter<ResponseProtocol>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/responseProtocols/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Suscribe to web-socket service (WSS)
 * /Projects/:id/sockets/:socketId/subscribe
 */
export async function Project_subscribe(
  id: string,
  socketId: string,
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/sockets/:socketId/subscribe',
    routeParams: {
      id,
      socketId,
    },
  });
}
/**
 * Unsuscribe from web-socket service (WSS)
 * /Projects/:id/sockets/:socketId/unsubscribe
 */
export async function Project_unsubscribe(
  id: string,
  socketId: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Projects/:id/sockets/:socketId/unsubscribe',
    routeParams: {
      id,
      socketId,
    },
  });
}
/**
 * Get common asset states
 * /Projects/:id/commonAssetStates
 */

type Project_GetCommonAssetStates_Response = {
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

export async function Project_GetCommonAssetStates(
  id: string,
  assetIds: string[],
): Promise<Project_GetCommonAssetStates_Response> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/commonAssetStates',
    routeParams: {
      id,
    },
    body: assetIds,
  });
}
/**
 * Apply asset state
 * /Projects/:id/applyAssetState
 */
type Project_ApplyAssetState_Body = {
  stateName: string;
  assetIds: string[];
};

export async function Project_ApplyAssetState(
  id: string,
  body: Project_ApplyAssetState_Body,
): Promise<string[]> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/applyAssetState',
    routeParams: {
      id,
    },
    body: body,
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
): Promise<LicensePlateDetection[]> {
  const _urlParams: any = {};
  if (licensePlate != null) {
    _urlParams['licensePlate'] = licensePlate;
  }
  if (from != null) {
    _urlParams['from'] = from;
  }
  if (to != null) {
    _urlParams['to'] = to;
  }
  if (method != null) {
    _urlParams['method'] = method;
  }
  if (maxDistance != null) {
    _urlParams['maxDistance'] = maxDistance;
  }
  if (transpositions != null) {
    _urlParams['transpositions'] = transpositions;
  }
  if (assetId != null) {
    _urlParams['assetId'] = assetId;
  }
  if (sensorId != null) {
    _urlParams['sensorId'] = sensorId;
  }
  if (class_ != null) {
    _urlParams['class'] = class_;
  }
  if (limit != null) {
    _urlParams['limit'] = limit;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/licensePlates/search',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
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
): Promise<LicensePlateDetection[]> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams['from'] = from;
  }
  if (to != null) {
    _urlParams['to'] = to;
  }
  if (assetId != null) {
    _urlParams['assetId'] = assetId;
  }
  if (sensorId != null) {
    _urlParams['sensorId'] = sensorId;
  }
  if (class_ != null) {
    _urlParams['class'] = class_;
  }
  if (limit != null) {
    _urlParams['limit'] = limit;
  }
  if (groupInterval != null) {
    _urlParams['groupInterval'] = groupInterval;
  }
  if (groupMaxDistance != null) {
    _urlParams['groupMaxDistance'] = groupMaxDistance;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/licensePlates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * List plates watch lists
 * /Projects/:id/licensePlates/watchlists
 */
export async function Project_getLicensePlatesWatchlists(
  id: string,
): Promise<Watchlist[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/licensePlates/watchlists',
    routeParams: {
      id,
    },
  });
}
/**
 * Create license plate watch list
 * /Projects/:id/licensePlates/watchlists
 */
export async function Project_createLicensePlateWatchlist(
  id: string,
  data: WatchlistCreate,
): Promise<Watchlist> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/licensePlates/watchlists',
    routeParams: {
      id,
    },
    body: data,
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
): Promise<Watchlist> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Projects/:id/licensePlates/watchlists/:nk',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Delete license plate watch list
 * /Projects/:id/licensePlates/watchlists/:nk
 */
export async function Project_deleteLicensePlateWatchlist(
  id: string,
  nk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Projects/:id/licensePlates/watchlists/:nk',
    routeParams: {
      id,
      nk,
    },
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
): Promise<WatchlistVehicle> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/licensePlates/watchlists/:nk/vehicles',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * List vehicles in watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles
 */
export async function Project_listVehiclesInWatchlist(
  id: string,
  nk: string,
): Promise<WatchlistVehicle[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/licensePlates/watchlists/:nk/vehicles',
    routeParams: {
      id,
      nk,
    },
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
): Promise<WatchlistVehicle> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Projects/:id/licensePlates/watchlists/:nk/vehicles/:licensePlate',
    routeParams: {
      id,
      nk,
      licensePlate,
    },
    body: data,
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
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Projects/:id/licensePlates/watchlists/:nk/vehicles/:licensePlate',
    routeParams: {
      id,
      nk,
      licensePlate,
    },
  });
}
/**
 * Add many vehicles to watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/bulk
 */
export async function Project_createManyVehiclesInWatchlist(
  id: string,
  nk: string,
  data: WatchlistVehicleCreate[] = [],
): Promise<WatchlistBulkCreateResult[]> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/licensePlates/watchlists/:nk/vehicles/bulk',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Create or update many vehicles to watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/merge
 */
export async function Project_mergeWatchlistVehicles(
  id: string,
  nk: string,
  data: WatchlistVehicleCreate[] = [],
): Promise<WatchlistMergeResult[]> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/licensePlates/watchlists/:nk/vehicles/merge',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Replace vehicles in watch list
 * /Projects/:id/licensePlates/watchlists/:nk/vehicles/replace
 */
export async function Project_replaceWatchlistVehicles(
  id: string,
  nk: string,
  data: WatchlistVehicleCreate[] = [],
): Promise<WatchlistReplaceResult[]> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/licensePlates/watchlists/:nk/vehicles/replace',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * assets consultas de ResponseProtocol.
 * /Projects/:id/responseProtocols/:nk/assets
 */
export async function Project_GetResponseProtocolsAssets(
  id: string,
  nk: string,
  filter?: Filter<Asset>,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/responseProtocols/:nk/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts assets of ResponseProtocol.
 * /Projects/:id/responseProtocols/:nk/assets/count
 */
export async function Project_CountResponseProtocolsAssets(
  id: string,
  nk: string,
  where?: Filter<ResponseProtocol>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/responseProtocols/:nk/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
