import { ApiFetch, Filter } from "../core/ApiFetch";
import { Log } from "../models/Log";

/**
 * Api services for the `Log` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Logs/:id/trackingLogs/:fk
 */
export async function Log_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Logs/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo user.
 * /Logs/:id/user
 */
export async function Log_GetUser(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Logs/:id/user",
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación belongsTo remoteModel.
 * /Logs/:id/remoteModel
 */
export async function Log_GetRemoteModel(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Logs/:id/remoteModel",
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación belongsTo trackingModel.
 * /Logs/:id/trackingModel
 */
export async function Log_GetTrackingModel(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Logs/:id/trackingModel",
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Log.
 * /Logs/:id/trackingLogs
 */
export async function Log_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Logs/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Log.
 * /Logs/:id/trackingLogs/count
 */
export async function Log_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Logs/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Logs/:id/exists
 */
export async function Log_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Logs/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Logs/:id
 */
export async function Log_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Log> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Logs/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Logs
 */
export async function Log_find(filter: Filter<any> = {}): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Logs",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Logs/findOne
 */
export async function Log_findOne(filter: Filter<any> = {}): Promise<Log> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Logs/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Logs/count
 */
export async function Log_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Logs/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
