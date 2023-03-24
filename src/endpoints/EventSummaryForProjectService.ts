import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventSummaryForProject } from "../models/EventSummaryForProject";
import { EventSummaryForAsset } from "../models/EventSummaryForAsset";
import { Log } from "../models/Log";

/**
 * Api services for the `EventSummaryForProject` model.
 */

/**
 * Buscar un elemento relacionado por id para eventSummaryForAssets.
 * /EventSummaryForProjects/:id/eventSummaryForAssets/:fk
 */
export async function EventSummaryForProject_FindByIdEventSummaryForAssets(
  id: string,
  fk: string
): Promise<EventSummaryForAsset> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id/eventSummaryForAssets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventSummaryForProjects/:id/trackingLogs/:fk
 */
export async function EventSummaryForProject_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * eventSummaryForAssets consultas de EventSummaryForProject.
 * /EventSummaryForProjects/:id/eventSummaryForAssets
 */
export async function EventSummaryForProject_GetEventSummaryForAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<EventSummaryForAsset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id/eventSummaryForAssets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventSummaryForAssets de EventSummaryForProject.
 * /EventSummaryForProjects/:id/eventSummaryForAssets/count
 */
export async function EventSummaryForProject_CountEventSummaryForAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id/eventSummaryForAssets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EventSummaryForProject.
 * /EventSummaryForProjects/:id/trackingLogs
 */
export async function EventSummaryForProject_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventSummaryForProject.
 * /EventSummaryForProjects/:id/trackingLogs/count
 */
export async function EventSummaryForProject_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventSummaryForProjects
 */
export async function EventSummaryForProject_create(
  data: any = {}
): Promise<EventSummaryForProject> {
  return ApiFetch({
    method: "POST",
    url: "/EventSummaryForProjects",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventSummaryForProjects/:id/exists
 */
export async function EventSummaryForProject_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventSummaryForProjects/:id
 */
export async function EventSummaryForProject_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventSummaryForProject> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventSummaryForProjects
 */
export async function EventSummaryForProject_find(
  filter: Filter<any> = {}
): Promise<EventSummaryForProject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventSummaryForProjects/findOne
 */
export async function EventSummaryForProject_findOne(
  filter: Filter<any> = {}
): Promise<EventSummaryForProject> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventSummaryForProjects/:id
 */
export async function EventSummaryForProject_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventSummaryForProjects/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventSummaryForProjects/count
 */
export async function EventSummaryForProject_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaryForProjects/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Generate summary information (using related EventSummaryForAsset instances)
 * /EventSummaryForProjects/:id/generate
 */
export async function EventSummaryForProject_generateSummary(
  id: string,
  force: boolean,
  minimalResponse: boolean
): Promise<EventSummaryForProject> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams["force"] = force;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "POST",
    url: "/EventSummaryForProjects/:id/generate",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
