import { ApiFetch, Filter } from "../core/ApiFetch";
import { Tool } from "../models/Tool";
import { Log } from "../models/Log";
import { AssetType } from "../models/AssetType";

/**
 * Api services for the `Tool` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Tools/:id/trackingLogs/:fk
 */
export async function Tool_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Tools/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assetTypes.
 * /Tools/:id/assetTypes/rel/:fk
 */
export async function Tool_LinkAssetTypes(
  id: string,
  fk: string
): Promise<AssetType> {
  return ApiFetch({
    method: "PUT",
    url: "/Tools/:id/assetTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación assetTypes con un elemento por id.
 * /Tools/:id/assetTypes/rel/:fk
 */
export async function Tool_UnlinkAssetTypes(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Tools/:id/assetTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Tool.
 * /Tools/:id/trackingLogs
 */
export async function Tool_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Tool.
 * /Tools/:id/trackingLogs/count
 */
export async function Tool_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Tools
 */
export async function Tool_create(data: any = {}): Promise<Tool> {
  return ApiFetch({
    method: "POST",
    url: "/Tools",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Tools/:id/exists
 */
export async function Tool_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Tools/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Tools/:id
 */
export async function Tool_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Tool> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Tools
 */
export async function Tool_find(filter: Filter<any> = {}): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Tools/findOne
 */
export async function Tool_findOne(filter: Filter<any> = {}): Promise<Tool> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Tools/:id
 */
export async function Tool_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Tools/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Tools/count
 */
export async function Tool_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
