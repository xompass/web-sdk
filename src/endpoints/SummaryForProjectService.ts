import { ApiFetch, Filter } from "../core/ApiFetch";
import { SummaryForProject } from "../models/SummaryForProject";
import { Log } from "../models/Log";
import { SummaryForAsset } from "../models/SummaryForAsset";

/**
 * Api services for the `SummaryForProject` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /SummaryForProjects/:id/trackingLogs/:fk
 */
export async function SummaryForProject_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para summaryForAssets.
 * /SummaryForProjects/:id/summaryForAssets/:fk
 */
export async function SummaryForProject_FindByIdSummaryForAssets(
  id: string,
  fk: string
): Promise<SummaryForAsset> {
  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id/summaryForAssets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de SummaryForProject.
 * /SummaryForProjects/:id/trackingLogs
 */
export async function SummaryForProject_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de SummaryForProject.
 * /SummaryForProjects/:id/trackingLogs/count
 */
export async function SummaryForProject_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * summaryForAssets consultas de SummaryForProject.
 * /SummaryForProjects/:id/summaryForAssets
 */
export async function SummaryForProject_GetSummaryForAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<SummaryForAsset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id/summaryForAssets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos summaryForAssets de SummaryForProject.
 * /SummaryForProjects/:id/summaryForAssets/count
 */
export async function SummaryForProject_CountSummaryForAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id/summaryForAssets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SummaryForProjects
 */
export async function SummaryForProject_create(
  data: any = {}
): Promise<SummaryForProject> {
  return ApiFetch({
    method: "POST",
    url: "/SummaryForProjects",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SummaryForProjects/:id/exists
 */
export async function SummaryForProject_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SummaryForProjects/:id
 */
export async function SummaryForProject_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<SummaryForProject> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SummaryForProjects
 */
export async function SummaryForProject_find(
  filter: Filter<any> = {}
): Promise<SummaryForProject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SummaryForProjects/findOne
 */
export async function SummaryForProject_findOne(
  filter: Filter<any> = {}
): Promise<SummaryForProject> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SummaryForProjects/:id
 */
export async function SummaryForProject_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/SummaryForProjects/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SummaryForProjects/count
 */
export async function SummaryForProject_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForProjects/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Generate summary information (using related SummaryForAsset instances)
 * /SummaryForProjects/:id/generate
 */
export async function SummaryForProject_generateSummary(
  id: string,
  force: boolean,
  minimalResponse: boolean
): Promise<SummaryForProject> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams["force"] = force;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "POST",
    url: "/SummaryForProjects/:id/generate",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
