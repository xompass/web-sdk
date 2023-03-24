import { ApiFetch, Filter } from "../core/ApiFetch";
import { CustomerRestrictionTable } from "../models/CustomerRestrictionTable";
import { Log } from "../models/Log";

/**
 * Api services for the `CustomerRestrictionTable` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /CustomerRestrictionTables/:id/trackingLogs/:fk
 */
export async function CustomerRestrictionTable_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de CustomerRestrictionTable.
 * /CustomerRestrictionTables/:id/trackingLogs
 */
export async function CustomerRestrictionTable_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de CustomerRestrictionTable.
 * /CustomerRestrictionTables/:id/trackingLogs/count
 */
export async function CustomerRestrictionTable_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /CustomerRestrictionTables
 */
export async function CustomerRestrictionTable_create(
  data: any = {}
): Promise<CustomerRestrictionTable> {
  return ApiFetch({
    method: "POST",
    url: "/CustomerRestrictionTables",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /CustomerRestrictionTables/:id/exists
 */
export async function CustomerRestrictionTable_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /CustomerRestrictionTables/:id
 */
export async function CustomerRestrictionTable_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<CustomerRestrictionTable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /CustomerRestrictionTables
 */
export async function CustomerRestrictionTable_find(
  filter: Filter<any> = {}
): Promise<CustomerRestrictionTable[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /CustomerRestrictionTables/findOne
 */
export async function CustomerRestrictionTable_findOne(
  filter: Filter<any> = {}
): Promise<CustomerRestrictionTable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /CustomerRestrictionTables/:id
 */
export async function CustomerRestrictionTable_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/CustomerRestrictionTables/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /CustomerRestrictionTables/count
 */
export async function CustomerRestrictionTable_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CustomerRestrictionTables/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
