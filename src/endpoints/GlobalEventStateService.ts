import { ApiFetch, Filter } from "../core/ApiFetch";
import { GlobalEventState } from "../models/GlobalEventState";
import { Log } from "../models/Log";

/**
 * Api services for the `GlobalEventState` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /GlobalEventStates/:id/trackingLogs/:fk
 */
export async function GlobalEventState_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de GlobalEventState.
 * /GlobalEventStates/:id/trackingLogs
 */
export async function GlobalEventState_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de GlobalEventState.
 * /GlobalEventStates/:id/trackingLogs/count
 */
export async function GlobalEventState_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /GlobalEventStates
 */
export async function GlobalEventState_create(
  data: any = {}
): Promise<GlobalEventState> {
  return ApiFetch({
    method: "POST",
    url: "/GlobalEventStates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /GlobalEventStates/:id/exists
 */
export async function GlobalEventState_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /GlobalEventStates/:id
 */
export async function GlobalEventState_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<GlobalEventState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /GlobalEventStates
 */
export async function GlobalEventState_find(
  filter: Filter<any> = {}
): Promise<GlobalEventState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /GlobalEventStates/findOne
 */
export async function GlobalEventState_findOne(
  filter: Filter<any> = {}
): Promise<GlobalEventState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /GlobalEventStates/:id
 */
export async function GlobalEventState_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/GlobalEventStates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /GlobalEventStates/count
 */
export async function GlobalEventState_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/GlobalEventStates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
