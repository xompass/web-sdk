import { ApiFetch, Filter } from "../core/ApiFetch";
import { SensorUptimeCollector } from "../models/SensorUptimeCollector";
import { Log } from "../models/Log";

/**
 * Api services for the `SensorUptimeCollector` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /SensorUptimeCollectors/:id/trackingLogs/:fk
 */
export async function SensorUptimeCollector_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de SensorUptimeCollector.
 * /SensorUptimeCollectors/:id/trackingLogs
 */
export async function SensorUptimeCollector_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de SensorUptimeCollector.
 * /SensorUptimeCollectors/:id/trackingLogs/count
 */
export async function SensorUptimeCollector_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SensorUptimeCollectors
 */
export async function SensorUptimeCollector_create(
  data: any = {}
): Promise<SensorUptimeCollector> {
  return ApiFetch({
    method: "POST",
    url: "/SensorUptimeCollectors",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SensorUptimeCollectors/:id/exists
 */
export async function SensorUptimeCollector_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SensorUptimeCollectors/:id
 */
export async function SensorUptimeCollector_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorUptimeCollector> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SensorUptimeCollectors
 */
export async function SensorUptimeCollector_find(
  filter: Filter<any> = {}
): Promise<SensorUptimeCollector[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SensorUptimeCollectors/findOne
 */
export async function SensorUptimeCollector_findOne(
  filter: Filter<any> = {}
): Promise<SensorUptimeCollector> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SensorUptimeCollectors/:id
 */
export async function SensorUptimeCollector_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/SensorUptimeCollectors/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SensorUptimeCollectors/count
 */
export async function SensorUptimeCollector_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorUptimeCollectors/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
