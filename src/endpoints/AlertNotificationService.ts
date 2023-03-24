import { ApiFetch, Filter } from "../core/ApiFetch";
import { AlertNotification } from "../models/AlertNotification";
import { Log } from "../models/Log";

/**
 * Api services for the `AlertNotification` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AlertNotifications/:id/trackingLogs/:fk
 */
export async function AlertNotification_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de AlertNotification.
 * /AlertNotifications/:id/trackingLogs
 */
export async function AlertNotification_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AlertNotification.
 * /AlertNotifications/:id/trackingLogs/count
 */
export async function AlertNotification_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AlertNotifications
 */
export async function AlertNotification_create(
  data: any = {}
): Promise<AlertNotification> {
  return ApiFetch({
    method: "POST",
    url: "/AlertNotifications",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AlertNotifications/:id/exists
 */
export async function AlertNotification_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AlertNotifications/:id
 */
export async function AlertNotification_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AlertNotification> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AlertNotifications
 */
export async function AlertNotification_find(
  filter: Filter<any> = {}
): Promise<AlertNotification[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AlertNotifications/findOne
 */
export async function AlertNotification_findOne(
  filter: Filter<any> = {}
): Promise<AlertNotification> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AlertNotifications/:id
 */
export async function AlertNotification_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AlertNotifications/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AlertNotifications/count
 */
export async function AlertNotification_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AlertNotifications/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
