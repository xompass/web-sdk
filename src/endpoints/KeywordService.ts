import { ApiFetch, Filter } from "../core/ApiFetch";
import { Keyword } from "../models/Keyword";
import { Log } from "../models/Log";

/**
 * Api services for the `Keyword` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Keywords/:id/trackingLogs/:fk
 */
export async function Keyword_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Keywords/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Keyword.
 * /Keywords/:id/trackingLogs
 */
export async function Keyword_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Keywords/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Keyword.
 * /Keywords/:id/trackingLogs/count
 */
export async function Keyword_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Keywords/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Keywords
 */
export async function Keyword_create(data: any = {}): Promise<Keyword> {
  return ApiFetch({
    method: "POST",
    url: "/Keywords",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Keywords/:id/exists
 */
export async function Keyword_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Keywords/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Keywords/:id
 */
export async function Keyword_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Keyword> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Keywords/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Keywords
 */
export async function Keyword_find(
  filter: Filter<any> = {}
): Promise<Keyword[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Keywords",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Keywords/findOne
 */
export async function Keyword_findOne(
  filter: Filter<any> = {}
): Promise<Keyword> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Keywords/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Keywords/:id
 */
export async function Keyword_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Keywords/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Keywords/count
 */
export async function Keyword_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Keywords/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
