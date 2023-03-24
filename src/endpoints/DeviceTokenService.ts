import { ApiFetch, Filter } from "../core/ApiFetch";
import { DeviceToken } from "../models/DeviceToken";
import { Log } from "../models/Log";

/**
 * Api services for the `DeviceToken` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /DeviceTokens/:id/trackingLogs/:fk
 */
export async function DeviceToken_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de DeviceToken.
 * /DeviceTokens/:id/trackingLogs
 */
export async function DeviceToken_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de DeviceToken.
 * /DeviceTokens/:id/trackingLogs/count
 */
export async function DeviceToken_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /DeviceTokens
 */
export async function DeviceToken_create(data: any = {}): Promise<DeviceToken> {
  return ApiFetch({
    method: "POST",
    url: "/DeviceTokens",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /DeviceTokens/:id/exists
 */
export async function DeviceToken_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /DeviceTokens/:id
 */
export async function DeviceToken_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<DeviceToken> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /DeviceTokens
 */
export async function DeviceToken_find(
  filter: Filter<any> = {}
): Promise<DeviceToken[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /DeviceTokens/findOne
 */
export async function DeviceToken_findOne(
  filter: Filter<any> = {}
): Promise<DeviceToken> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /DeviceTokens/:id
 */
export async function DeviceToken_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/DeviceTokens/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /DeviceTokens/count
 */
export async function DeviceToken_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceTokens/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
