import { ApiFetch, Filter } from "../core/ApiFetch";
import { SummaryForAsset } from "../models/SummaryForAsset";
import { Log } from "../models/Log";
import { Summary } from "../models/Summary";

/**
 * Api services for the `SummaryForAsset` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /SummaryForAssets/:id/trackingLogs/:fk
 */
export async function SummaryForAsset_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para summaries.
 * /SummaryForAssets/:id/summaries/:fk
 */
export async function SummaryForAsset_FindByIdSummaries(
  id: string,
  fk: string
): Promise<Summary> {
  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id/summaries/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de SummaryForAsset.
 * /SummaryForAssets/:id/trackingLogs
 */
export async function SummaryForAsset_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de SummaryForAsset.
 * /SummaryForAssets/:id/trackingLogs/count
 */
export async function SummaryForAsset_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * summaries consultas de SummaryForAsset.
 * /SummaryForAssets/:id/summaries
 */
export async function SummaryForAsset_GetSummaries(
  id: string,
  filter: Filter<any> = {}
): Promise<Summary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id/summaries",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos summaries de SummaryForAsset.
 * /SummaryForAssets/:id/summaries/count
 */
export async function SummaryForAsset_CountSummaries(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id/summaries/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SummaryForAssets
 */
export async function SummaryForAsset_create(
  data: any = {}
): Promise<SummaryForAsset> {
  return ApiFetch({
    method: "POST",
    url: "/SummaryForAssets",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SummaryForAssets/:id/exists
 */
export async function SummaryForAsset_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SummaryForAssets/:id
 */
export async function SummaryForAsset_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<SummaryForAsset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SummaryForAssets
 */
export async function SummaryForAsset_find(
  filter: Filter<any> = {}
): Promise<SummaryForAsset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SummaryForAssets/findOne
 */
export async function SummaryForAsset_findOne(
  filter: Filter<any> = {}
): Promise<SummaryForAsset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SummaryForAssets/:id
 */
export async function SummaryForAsset_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/SummaryForAssets/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SummaryForAssets/count
 */
export async function SummaryForAsset_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SummaryForAssets/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Generate summary information (using related Summary instances)
 * /SummaryForAssets/:id/generate
 */
export async function SummaryForAsset_generateSummary(
  id: string,
  force: boolean,
  minimalResponse: boolean
): Promise<SummaryForAsset> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams["force"] = force;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "POST",
    url: "/SummaryForAssets/:id/generate",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
