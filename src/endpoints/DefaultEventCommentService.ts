import { ApiFetch, Filter } from "../core/ApiFetch";
import { DefaultEventComment } from "../models/DefaultEventComment";
import { Log } from "../models/Log";

/**
 * Api services for the `DefaultEventComment` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /DefaultEventComments/:id/trackingLogs/:fk
 */
export async function DefaultEventComment_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de DefaultEventComment.
 * /DefaultEventComments/:id/trackingLogs
 */
export async function DefaultEventComment_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de DefaultEventComment.
 * /DefaultEventComments/:id/trackingLogs/count
 */
export async function DefaultEventComment_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /DefaultEventComments
 */
export async function DefaultEventComment_create(
  data: any = {}
): Promise<DefaultEventComment> {
  return ApiFetch({
    method: "POST",
    url: "/DefaultEventComments",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /DefaultEventComments/:id/exists
 */
export async function DefaultEventComment_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /DefaultEventComments/:id
 */
export async function DefaultEventComment_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<DefaultEventComment> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /DefaultEventComments
 */
export async function DefaultEventComment_find(
  filter: Filter<any> = {}
): Promise<DefaultEventComment[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /DefaultEventComments/findOne
 */
export async function DefaultEventComment_findOne(
  filter: Filter<any> = {}
): Promise<DefaultEventComment> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /DefaultEventComments/:id
 */
export async function DefaultEventComment_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/DefaultEventComments/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /DefaultEventComments/count
 */
export async function DefaultEventComment_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/DefaultEventComments/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
