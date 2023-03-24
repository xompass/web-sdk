import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventType } from "../models/EventType";
import { Log } from "../models/Log";

/**
 * Api services for the `EventType` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventTypes/:id/trackingLogs/:fk
 */
export async function EventType_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventTypes/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de EventType.
 * /EventTypes/:id/trackingLogs
 */
export async function EventType_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTypes/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventType.
 * /EventTypes/:id/trackingLogs/count
 */
export async function EventType_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTypes/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventTypes
 */
export async function EventType_create(data: any = {}): Promise<EventType> {
  return ApiFetch({
    method: "POST",
    url: "/EventTypes",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventTypes/:id/exists
 */
export async function EventType_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventTypes/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventTypes/:id
 */
export async function EventType_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTypes/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventTypes
 */
export async function EventType_find(
  filter: Filter<any> = {}
): Promise<EventType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTypes",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventTypes/findOne
 */
export async function EventType_findOne(
  filter: Filter<any> = {}
): Promise<EventType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTypes/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventTypes/:id
 */
export async function EventType_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTypes/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventTypes/count
 */
export async function EventType_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTypes/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
