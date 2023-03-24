import { ApiFetch, Filter } from "../core/ApiFetch";
import { DeviceEventData } from "../models/DeviceEventData";
import { Log } from "../models/Log";

/**
 * Api services for the `DeviceEventData` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /DeviceEventData/:id/trackingLogs/:fk
 */
export async function DeviceEventData_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de DeviceEventData.
 * /DeviceEventData/:id/trackingLogs
 */
export async function DeviceEventData_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de DeviceEventData.
 * /DeviceEventData/:id/trackingLogs/count
 */
export async function DeviceEventData_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /DeviceEventData
 */
export async function DeviceEventData_create(
  data: any = {}
): Promise<DeviceEventData> {
  return ApiFetch({
    method: "POST",
    url: "/DeviceEventData",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /DeviceEventData/:id/exists
 */
export async function DeviceEventData_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /DeviceEventData/:id
 */
export async function DeviceEventData_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<DeviceEventData> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /DeviceEventData
 */
export async function DeviceEventData_find(
  filter: Filter<any> = {}
): Promise<DeviceEventData[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /DeviceEventData/findOne
 */
export async function DeviceEventData_findOne(
  filter: Filter<any> = {}
): Promise<DeviceEventData> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /DeviceEventData/:id
 */
export async function DeviceEventData_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/DeviceEventData/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /DeviceEventData/count
 */
export async function DeviceEventData_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventData/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
