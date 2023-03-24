import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventState } from "../models/EventState";
import { Log } from "../models/Log";

/**
 * Api services for the `EventState` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventStates/:id/trackingLogs/:fk
 */
export async function EventState_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventStates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de EventState.
 * /EventStates/:id/trackingLogs
 */
export async function EventState_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventStates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventState.
 * /EventStates/:id/trackingLogs/count
 */
export async function EventState_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventStates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventStates
 */
export async function EventState_create(data: any = {}): Promise<EventState> {
  return ApiFetch({
    method: "POST",
    url: "/EventStates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventStates/:id/exists
 */
export async function EventState_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventStates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventStates/:id
 */
export async function EventState_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventStates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventStates
 */
export async function EventState_find(
  filter: Filter<any> = {}
): Promise<EventState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventStates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventStates/findOne
 */
export async function EventState_findOne(
  filter: Filter<any> = {}
): Promise<EventState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventStates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventStates/:id
 */
export async function EventState_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventStates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventStates/count
 */
export async function EventState_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventStates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
