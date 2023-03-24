import { ApiFetch, Filter } from "../core/ApiFetch";
import { EmbeddedReport } from "../models/EmbeddedReport";
import { Log } from "../models/Log";
import { Project } from "../models/Project";

/**
 * Api services for the `EmbeddedReport` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EmbeddedReports/:id/trackingLogs/:fk
 */
export async function EmbeddedReport_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo project.
 * /EmbeddedReports/:id/project
 */
export async function EmbeddedReport_GetProject(id: string): Promise<Project> {
  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/:id/project",
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EmbeddedReport.
 * /EmbeddedReports/:id/trackingLogs
 */
export async function EmbeddedReport_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EmbeddedReport.
 * /EmbeddedReports/:id/trackingLogs/count
 */
export async function EmbeddedReport_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EmbeddedReports
 */
export async function EmbeddedReport_create(
  data: any = {}
): Promise<EmbeddedReport> {
  return ApiFetch({
    method: "POST",
    url: "/EmbeddedReports",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EmbeddedReports/:id/exists
 */
export async function EmbeddedReport_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EmbeddedReports/:id
 */
export async function EmbeddedReport_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EmbeddedReport> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EmbeddedReports
 */
export async function EmbeddedReport_find(
  filter: Filter<any> = {}
): Promise<EmbeddedReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EmbeddedReports/findOne
 */
export async function EmbeddedReport_findOne(
  filter: Filter<any> = {}
): Promise<EmbeddedReport> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EmbeddedReports/:id
 */
export async function EmbeddedReport_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EmbeddedReports/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EmbeddedReports/count
 */
export async function EmbeddedReport_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmbeddedReports/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
