import { ApiFetch, Filter } from "../core/ApiFetch";
import { DeviceEventType } from "../models/DeviceEventType";
import { Log } from "../models/Log";

/**
 * Api services for the `DeviceEventType` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /DeviceEventTypes/:id/trackingLogs/:fk
 */
export async function DeviceEventType_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de DeviceEventType.
 * /DeviceEventTypes/:id/trackingLogs
 */
export async function DeviceEventType_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de DeviceEventType.
 * /DeviceEventTypes/:id/trackingLogs/count
 */
export async function DeviceEventType_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /DeviceEventTypes
 */
export async function DeviceEventType_create(
  data: any = {}
): Promise<DeviceEventType> {
  return ApiFetch({
    method: "POST",
    url: "/DeviceEventTypes",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /DeviceEventTypes/:id/exists
 */
export async function DeviceEventType_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /DeviceEventTypes/:id
 */
export async function DeviceEventType_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<DeviceEventType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /DeviceEventTypes
 */
export async function DeviceEventType_find(
  filter: Filter<any> = {}
): Promise<DeviceEventType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /DeviceEventTypes/findOne
 */
export async function DeviceEventType_findOne(
  filter: Filter<any> = {}
): Promise<DeviceEventType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /DeviceEventTypes/:id
 */
export async function DeviceEventType_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/DeviceEventTypes/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /DeviceEventTypes/count
 */
export async function DeviceEventType_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DeviceEventTypes/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
