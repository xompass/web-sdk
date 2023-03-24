import { ApiFetch, Filter } from "../core/ApiFetch";
import { ProjectRestrictionTable } from "../models/ProjectRestrictionTable";
import { Log } from "../models/Log";

/**
 * Api services for the `ProjectRestrictionTable` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /ProjectRestrictionTables/:id/trackingLogs/:fk
 */
export async function ProjectRestrictionTable_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de ProjectRestrictionTable.
 * /ProjectRestrictionTables/:id/trackingLogs
 */
export async function ProjectRestrictionTable_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de ProjectRestrictionTable.
 * /ProjectRestrictionTables/:id/trackingLogs/count
 */
export async function ProjectRestrictionTable_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /ProjectRestrictionTables
 */
export async function ProjectRestrictionTable_create(
  data: any = {}
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: "POST",
    url: "/ProjectRestrictionTables",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /ProjectRestrictionTables/:id/exists
 */
export async function ProjectRestrictionTable_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /ProjectRestrictionTables/:id
 */
export async function ProjectRestrictionTable_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<ProjectRestrictionTable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /ProjectRestrictionTables
 */
export async function ProjectRestrictionTable_find(
  filter: Filter<any> = {}
): Promise<ProjectRestrictionTable[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /ProjectRestrictionTables/findOne
 */
export async function ProjectRestrictionTable_findOne(
  filter: Filter<any> = {}
): Promise<ProjectRestrictionTable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /ProjectRestrictionTables/:id
 */
export async function ProjectRestrictionTable_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/ProjectRestrictionTables/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /ProjectRestrictionTables/count
 */
export async function ProjectRestrictionTable_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectRestrictionTables/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
