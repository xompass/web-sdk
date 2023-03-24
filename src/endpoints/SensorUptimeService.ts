import { ApiFetch, Filter } from "../core/ApiFetch";
import { SensorUptime } from "../models/SensorUptime";
import { Log } from "../models/Log";

/**
 * Api services for the `SensorUptime` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /SensorUptimes/:id/trackingLogs/:fk
 */
export async function SensorUptime_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de SensorUptime.
 * /SensorUptimes/:id/trackingLogs
 */
export async function SensorUptime_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de SensorUptime.
 * /SensorUptimes/:id/trackingLogs/count
 */
export async function SensorUptime_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SensorUptimes
 */
export async function SensorUptime_create(
  data: any = {}
): Promise<SensorUptime> {
  return ApiFetch({
    method: "POST",
    url: "/SensorUptimes",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SensorUptimes/:id/exists
 */
export async function SensorUptime_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SensorUptimes/:id
 */
export async function SensorUptime_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorUptime> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SensorUptimes
 */
export async function SensorUptime_find(
  filter: Filter<any> = {}
): Promise<SensorUptime[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SensorUptimes/findOne
 */
export async function SensorUptime_findOne(
  filter: Filter<any> = {}
): Promise<SensorUptime> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SensorUptimes/:id
 */
export async function SensorUptime_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/SensorUptimes/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SensorUptimes/count
 */
export async function SensorUptime_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimes/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
