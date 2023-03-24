import { ApiFetch, Filter } from "../core/ApiFetch";
import { Dashboard } from "../models/Dashboard";
import { Log } from "../models/Log";
import { Project } from "../models/Project";

/**
 * Api services for the `Dashboard` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Dashboards/:id/trackingLogs/:fk
 */
export async function Dashboard_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Dashboards/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo project.
 * /Dashboards/:id/project
 */
export async function Dashboard_GetProject(id: string): Promise<Project> {
  return ApiFetch({
    method: "GET",
    url: "/Dashboards/:id/project",
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Dashboard.
 * /Dashboards/:id/trackingLogs
 */
export async function Dashboard_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Dashboards/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Dashboard.
 * /Dashboards/:id/trackingLogs/count
 */
export async function Dashboard_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Dashboards/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Dashboards
 */
export async function Dashboard_create(data: any = {}): Promise<Dashboard> {
  return ApiFetch({
    method: "POST",
    url: "/Dashboards",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Dashboards/:id/exists
 */
export async function Dashboard_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Dashboards/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Dashboards/:id
 */
export async function Dashboard_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Dashboard> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Dashboards/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Dashboards
 */
export async function Dashboard_find(
  filter: Filter<any> = {}
): Promise<Dashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Dashboards",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Dashboards/findOne
 */
export async function Dashboard_findOne(
  filter: Filter<any> = {}
): Promise<Dashboard> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Dashboards/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Dashboards/:id
 */
export async function Dashboard_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Dashboards/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Dashboards/count
 */
export async function Dashboard_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Dashboards/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
