import { ApiFetch, Filter } from "../core/ApiFetch";
import { TimeZone } from "../models/TimeZone";
import { Log } from "../models/Log";

/**
 * Api services for the `TimeZone` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /TimeZones/:id/trackingLogs/:fk
 */
export async function TimeZone_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/TimeZones/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de TimeZone.
 * /TimeZones/:id/trackingLogs
 */
export async function TimeZone_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TimeZones/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de TimeZone.
 * /TimeZones/:id/trackingLogs/count
 */
export async function TimeZone_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TimeZones/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /TimeZones
 */
export async function TimeZone_create(data: any = {}): Promise<TimeZone> {
  return ApiFetch({
    method: "POST",
    url: "/TimeZones",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /TimeZones/:id/exists
 */
export async function TimeZone_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/TimeZones/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /TimeZones/:id
 */
export async function TimeZone_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<TimeZone> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TimeZones/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /TimeZones
 */
export async function TimeZone_find(
  filter: Filter<any> = {}
): Promise<TimeZone[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TimeZones",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /TimeZones/findOne
 */
export async function TimeZone_findOne(
  filter: Filter<any> = {}
): Promise<TimeZone> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TimeZones/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /TimeZones/:id
 */
export async function TimeZone_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TimeZones/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /TimeZones/count
 */
export async function TimeZone_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TimeZones/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
