import { ApiFetch, Filter } from "../core/ApiFetch";
import { AlertHistory } from "../models/AlertHistory";
import { Log } from "../models/Log";

/**
 * Api services for the `AlertHistory` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AlertHistory/:id/trackingLogs/:fk
 */
export async function AlertHistory_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AlertHistory/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de AlertHistory.
 * /AlertHistory/:id/trackingLogs
 */
export async function AlertHistory_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertHistory/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AlertHistory.
 * /AlertHistory/:id/trackingLogs/count
 */
export async function AlertHistory_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertHistory/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AlertHistory
 */
export async function AlertHistory_create(
  data: any = {}
): Promise<AlertHistory> {
  return ApiFetch({
    method: "POST",
    url: "/AlertHistory",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AlertHistory/:id/exists
 */
export async function AlertHistory_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AlertHistory/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AlertHistory/:id
 */
export async function AlertHistory_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AlertHistory> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertHistory/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AlertHistory
 */
export async function AlertHistory_find(
  filter: Filter<any> = {}
): Promise<AlertHistory[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertHistory",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AlertHistory/findOne
 */
export async function AlertHistory_findOne(
  filter: Filter<any> = {}
): Promise<AlertHistory> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertHistory/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AlertHistory/:id
 */
export async function AlertHistory_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AlertHistory/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AlertHistory/count
 */
export async function AlertHistory_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertHistory/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
