import { ApiFetch, Filter } from "../core/ApiFetch";
import { Summary } from "../models/Summary";
import { Log } from "../models/Log";
import { Dataset } from "../models/Dataset";

/**
 * Api services for the `Summary` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Summaries/:id/trackingLogs/:fk
 */
export async function Summary_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para datasets.
 * /Summaries/:id/datasets/:fk
 */
export async function Summary_FindByIdDatasets(
  id: string,
  fk: string
): Promise<Dataset> {
  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id/datasets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Summary.
 * /Summaries/:id/trackingLogs
 */
export async function Summary_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Summary.
 * /Summaries/:id/trackingLogs/count
 */
export async function Summary_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * datasets consultas de Summary.
 * /Summaries/:id/datasets
 */
export async function Summary_GetDatasets(
  id: string,
  filter: Filter<any> = {}
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id/datasets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Suprime todos los datasets de este modelo.
 * /Summaries/:id/datasets
 */
export async function Summary_DeleteDatasets(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Summaries/:id/datasets",
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos datasets de Summary.
 * /Summaries/:id/datasets/count
 */
export async function Summary_CountDatasets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id/datasets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Summaries
 */
export async function Summary_create(data: any = {}): Promise<Summary> {
  return ApiFetch({
    method: "POST",
    url: "/Summaries",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Summaries/:id/exists
 */
export async function Summary_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Summaries/:id
 */
export async function Summary_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Summary> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Summaries
 */
export async function Summary_find(
  filter: Filter<any> = {}
): Promise<Summary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Summaries/findOne
 */
export async function Summary_findOne(
  filter: Filter<any> = {}
): Promise<Summary> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Summaries/:id
 */
export async function Summary_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Summaries/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Summaries/count
 */
export async function Summary_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Summaries/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Generate summary information (using related datasets)
 * /Summaries/:id/generate
 */
export async function Summary_generateSummary(
  id: string,
  force: boolean,
  minimalResponse: boolean
): Promise<Summary> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams["force"] = force;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "POST",
    url: "/Summaries/:id/generate",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
