import { ApiFetch, Filter } from "../core/ApiFetch";
import { Event } from "../models/Event";
import { Log } from "../models/Log";

/**
 * Api services for the `Event` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Events/:id/trackingLogs/:fk
 */
export async function Event_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Events/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Event.
 * /Events/:id/trackingLogs
 */
export async function Event_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Events/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Event.
 * /Events/:id/trackingLogs/count
 */
export async function Event_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Events/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Events
 */
export async function Event_create(data: any = {}): Promise<Event> {
  return ApiFetch({
    method: "POST",
    url: "/Events",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Events/:id
 */
export async function Event_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Event> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Events/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Events
 */
export async function Event_find(filter: Filter<any> = {}): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Events",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Events/findOne
 */
export async function Event_findOne(filter: Filter<any> = {}): Promise<Event> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Events/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Events/:id
 */
export async function Event_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Events/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Events/count
 */
export async function Event_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Events/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Apply filter to a specific event instance
 * /Events/:id/filters/apply
 */
export async function Event_applyFilters(
  id: string,
  force: boolean,
  minimalResponse: boolean
): Promise<any> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams["force"] = force;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "POST",
    url: "/Events/:id/filters/apply",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
