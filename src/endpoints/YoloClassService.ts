import { ApiFetch, Filter } from "../core/ApiFetch";
import { YoloClass } from "../models/YoloClass";
import { Log } from "../models/Log";

/**
 * Api services for the `YoloClass` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /YoloClasses/:id/trackingLogs/:fk
 */
export async function YoloClass_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de YoloClass.
 * /YoloClasses/:id/trackingLogs
 */
export async function YoloClass_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de YoloClass.
 * /YoloClasses/:id/trackingLogs/count
 */
export async function YoloClass_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /YoloClasses
 */
export async function YoloClass_create(data: any = {}): Promise<YoloClass> {
  return ApiFetch({
    method: "POST",
    url: "/YoloClasses",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /YoloClasses/:id/exists
 */
export async function YoloClass_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /YoloClasses/:id
 */
export async function YoloClass_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<YoloClass> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /YoloClasses
 */
export async function YoloClass_find(
  filter: Filter<any> = {}
): Promise<YoloClass[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /YoloClasses/findOne
 */
export async function YoloClass_findOne(
  filter: Filter<any> = {}
): Promise<YoloClass> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /YoloClasses/:id
 */
export async function YoloClass_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/YoloClasses/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /YoloClasses/count
 */
export async function YoloClass_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
