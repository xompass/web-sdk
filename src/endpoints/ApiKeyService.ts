import { ApiFetch, Filter } from "../core/ApiFetch";
import { ApiKey } from "../models/ApiKey";
import { Log } from "../models/Log";

/**
 * Api services for the `ApiKey` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /ApiKeys/:id/trackingLogs/:fk
 */
export async function ApiKey_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/ApiKeys/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de ApiKey.
 * /ApiKeys/:id/trackingLogs
 */
export async function ApiKey_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ApiKeys/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de ApiKey.
 * /ApiKeys/:id/trackingLogs/count
 */
export async function ApiKey_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ApiKeys/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /ApiKeys
 */
export async function ApiKey_create(data: any = {}): Promise<ApiKey> {
  return ApiFetch({
    method: "POST",
    url: "/ApiKeys",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /ApiKeys/:id/exists
 */
export async function ApiKey_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/ApiKeys/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /ApiKeys/:id
 */
export async function ApiKey_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<ApiKey> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ApiKeys/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /ApiKeys
 */
export async function ApiKey_find(filter: Filter<any> = {}): Promise<ApiKey[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ApiKeys",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /ApiKeys/findOne
 */
export async function ApiKey_findOne(
  filter: Filter<any> = {}
): Promise<ApiKey> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ApiKeys/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /ApiKeys/:id
 */
export async function ApiKey_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/ApiKeys/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /ApiKeys/count
 */
export async function ApiKey_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ApiKeys/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
