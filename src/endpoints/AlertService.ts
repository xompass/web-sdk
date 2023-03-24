import { ApiFetch, Filter } from "../core/ApiFetch";
import { Alert } from "../models/Alert";
import { Log } from "../models/Log";

/**
 * Api services for the `Alert` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Alerts/:id/trackingLogs/:fk
 */
export async function Alert_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Alerts/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Alert.
 * /Alerts/:id/trackingLogs
 */
export async function Alert_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Alerts/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Alert.
 * /Alerts/:id/trackingLogs/count
 */
export async function Alert_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Alerts/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Alerts
 */
export async function Alert_create(data: any = {}): Promise<Alert> {
  return ApiFetch({
    method: "POST",
    url: "/Alerts",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Alerts/:id/exists
 */
export async function Alert_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Alerts/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Alerts/:id
 */
export async function Alert_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Alert> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Alerts/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Alerts
 */
export async function Alert_find(filter: Filter<any> = {}): Promise<Alert[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Alerts",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Alerts/findOne
 */
export async function Alert_findOne(filter: Filter<any> = {}): Promise<Alert> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Alerts/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Alerts/:id
 */
export async function Alert_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Alerts/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Alerts/count
 */
export async function Alert_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Alerts/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
