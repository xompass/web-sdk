import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetStateChange } from "../models/AssetStateChange";
import { Log } from "../models/Log";

/**
 * Api services for the `AssetStateChange` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetStateChanges/:id/trackingLogs/:fk
 */
export async function AssetStateChange_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de AssetStateChange.
 * /AssetStateChanges/:id/trackingLogs
 */
export async function AssetStateChange_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetStateChange.
 * /AssetStateChanges/:id/trackingLogs/count
 */
export async function AssetStateChange_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetStateChanges
 */
export async function AssetStateChange_create(
  data: any = {}
): Promise<AssetStateChange> {
  return ApiFetch({
    method: "POST",
    url: "/AssetStateChanges",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetStateChanges/:id/exists
 */
export async function AssetStateChange_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetStateChanges/:id
 */
export async function AssetStateChange_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetStateChange> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetStateChanges
 */
export async function AssetStateChange_find(
  filter: Filter<any> = {}
): Promise<AssetStateChange[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetStateChanges/findOne
 */
export async function AssetStateChange_findOne(
  filter: Filter<any> = {}
): Promise<AssetStateChange> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetStateChanges/:id
 */
export async function AssetStateChange_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetStateChanges/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetStateChanges/count
 */
export async function AssetStateChange_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateChanges/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
