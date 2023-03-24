import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventSummaryForAsset } from "../models/EventSummaryForAsset";
import { EventSummary } from "../models/EventSummary";
import { Log } from "../models/Log";

/**
 * Api services for the `EventSummaryForAsset` model.
 */

/**
 * Buscar un elemento relacionado por id para eventSummaries.
 * /EventSummaryForAssets/:id/eventSummaries/:fk
 */
export async function EventSummaryForAsset_FindByIdEventSummaries(
  id: string,
  fk: string
): Promise<EventSummary> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id/eventSummaries/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventSummaryForAssets/:id/trackingLogs/:fk
 */
export async function EventSummaryForAsset_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * eventSummaries consultas de EventSummaryForAsset.
 * /EventSummaryForAssets/:id/eventSummaries
 */
export async function EventSummaryForAsset_GetEventSummaries(
  id: string,
  filter: Filter<any> = {}
): Promise<EventSummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id/eventSummaries",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventSummaries de EventSummaryForAsset.
 * /EventSummaryForAssets/:id/eventSummaries/count
 */
export async function EventSummaryForAsset_CountEventSummaries(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id/eventSummaries/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EventSummaryForAsset.
 * /EventSummaryForAssets/:id/trackingLogs
 */
export async function EventSummaryForAsset_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventSummaryForAsset.
 * /EventSummaryForAssets/:id/trackingLogs/count
 */
export async function EventSummaryForAsset_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventSummaryForAssets
 */
export async function EventSummaryForAsset_create(
  data: any = {}
): Promise<EventSummaryForAsset> {
  return ApiFetch({
    method: "POST",
    url: "/EventSummaryForAssets",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventSummaryForAssets/:id/exists
 */
export async function EventSummaryForAsset_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventSummaryForAssets/:id
 */
export async function EventSummaryForAsset_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventSummaryForAsset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventSummaryForAssets
 */
export async function EventSummaryForAsset_find(
  filter: Filter<any> = {}
): Promise<EventSummaryForAsset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventSummaryForAssets/findOne
 */
export async function EventSummaryForAsset_findOne(
  filter: Filter<any> = {}
): Promise<EventSummaryForAsset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventSummaryForAssets/:id
 */
export async function EventSummaryForAsset_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventSummaryForAssets/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventSummaryForAssets/count
 */
export async function EventSummaryForAsset_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForAssets/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Generate summary information (using related EventSummary instances)
 * /EventSummaryForAssets/:id/generate
 */
export async function EventSummaryForAsset_generateSummary(
  id: string,
  force: boolean,
  minimalResponse: boolean
): Promise<EventSummaryForAsset> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams["force"] = force;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "POST",
    url: "/EventSummaryForAssets/:id/generate",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
