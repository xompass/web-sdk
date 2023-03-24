import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventGroup } from "../models/EventGroup";
import { Log } from "../models/Log";

/**
 * Api services for the `EventGroup` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventGroups/:id/trackingLogs/:fk
 */
export async function EventGroup_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventGroups/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de EventGroup.
 * /EventGroups/:id/trackingLogs
 */
export async function EventGroup_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroups/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventGroup.
 * /EventGroups/:id/trackingLogs/count
 */
export async function EventGroup_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroups/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventGroups
 */
export async function EventGroup_create(data: any = {}): Promise<EventGroup> {
  return ApiFetch({
    method: "POST",
    url: "/EventGroups",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventGroups/:id/exists
 */
export async function EventGroup_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventGroups/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventGroups/:id
 */
export async function EventGroup_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventGroup> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroups/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventGroups
 */
export async function EventGroup_find(
  filter: Filter<any> = {}
): Promise<EventGroup[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroups",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventGroups/findOne
 */
export async function EventGroup_findOne(
  filter: Filter<any> = {}
): Promise<EventGroup> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroups/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventGroups/:id
 */
export async function EventGroup_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventGroups/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventGroups/count
 */
export async function EventGroup_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroups/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
