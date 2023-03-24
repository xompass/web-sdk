import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetRestrictionTable } from "../models/AssetRestrictionTable";
import { Log } from "../models/Log";

/**
 * Api services for the `AssetRestrictionTable` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetRestrictionTables/:id/trackingLogs/:fk
 */
export async function AssetRestrictionTable_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de AssetRestrictionTable.
 * /AssetRestrictionTables/:id/trackingLogs
 */
export async function AssetRestrictionTable_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetRestrictionTable.
 * /AssetRestrictionTables/:id/trackingLogs/count
 */
export async function AssetRestrictionTable_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetRestrictionTables
 */
export async function AssetRestrictionTable_create(
  data: any = {}
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: "POST",
    url: "/AssetRestrictionTables",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetRestrictionTables/:id/exists
 */
export async function AssetRestrictionTable_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetRestrictionTables/:id
 */
export async function AssetRestrictionTable_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetRestrictionTable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetRestrictionTables
 */
export async function AssetRestrictionTable_find(
  filter: Filter<any> = {}
): Promise<AssetRestrictionTable[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetRestrictionTables/findOne
 */
export async function AssetRestrictionTable_findOne(
  filter: Filter<any> = {}
): Promise<AssetRestrictionTable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetRestrictionTables/:id
 */
export async function AssetRestrictionTable_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetRestrictionTables/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetRestrictionTables/count
 */
export async function AssetRestrictionTable_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetRestrictionTables/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
