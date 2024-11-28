import { ApiFetch, Filter } from '../core/ApiFetch';
import { AssetOperabilitySummary } from '../models/AssetOperabilitySummary';
import { ProjectOperabilitySummary } from '../models/ProjectOperabilitySummary';
import { ProjectRestrictionTable } from '../models/ProjectRestrictionTable';
import { RateLimit } from '../models/RateLimit';

/**
 * Api services for the `Project` model.
 */

/**
 * Actualizar un elemento relacionado por id para assetOperabilitySummaries.
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
 * Actualizar un elemento relacionado por id para operabilitySummaries.
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
 * Capta la relación hasOne restrictionTable.
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
 * Capta la relación hasOne rateLimit.
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
 * Crea una nueva instancia en rateLimit de este modelo.
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
 * Actualizar rateLimit de este modelo.
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
 * assetOperabilitySummaries consultas de Project.
 * /Projects/:id/assetOperabilitySummaries
 */
export async function Project_GetAssetOperabilitySummaries(
  id: string,
  filter: Filter<any> = {},
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
 * Recuentos assetOperabilitySummaries de Project.
 * /Projects/:id/assetOperabilitySummaries/count
 */
export async function Project_CountAssetOperabilitySummaries(
  id: string,
  where: any = {},
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
 * operabilitySummaries consultas de Project.
 * /Projects/:id/operabilitySummaries
 */
export async function Project_GetOperabilitySummaries(
  id: string,
  filter: Filter<any> = {},
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
 * Recuentos operabilitySummaries de Project.
 * /Projects/:id/operabilitySummaries/count
 */
export async function Project_CountOperabilitySummaries(
  id: string,
  where: any = {},
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
    body: {},
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
 * Get merged restriction table
 * /Projects/:id/restrictionTable/merged
 */
export async function Project_getMergedRestrictionTable(
  id: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/restrictionTable/merged',
    routeParams: {
      id,
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
    body: {
      assetIds,
    },
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
    body: {
      body,
    },
  });
}
