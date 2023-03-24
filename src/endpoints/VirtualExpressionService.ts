import { ApiFetch, Filter } from "../core/ApiFetch";
import { VirtualExpression } from "../models/VirtualExpression";
import { Log } from "../models/Log";

/**
 * Api services for the `VirtualExpression` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /VirtualExpressions/:id/trackingLogs/:fk
 */
export async function VirtualExpression_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de VirtualExpression.
 * /VirtualExpressions/:id/trackingLogs
 */
export async function VirtualExpression_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de VirtualExpression.
 * /VirtualExpressions/:id/trackingLogs/count
 */
export async function VirtualExpression_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /VirtualExpressions
 */
export async function VirtualExpression_create(
  data: any = {}
): Promise<VirtualExpression> {
  return ApiFetch({
    method: "POST",
    url: "/VirtualExpressions",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /VirtualExpressions/:id/exists
 */
export async function VirtualExpression_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /VirtualExpressions/:id
 */
export async function VirtualExpression_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<VirtualExpression> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /VirtualExpressions
 */
export async function VirtualExpression_find(
  filter: Filter<any> = {}
): Promise<VirtualExpression[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /VirtualExpressions/findOne
 */
export async function VirtualExpression_findOne(
  filter: Filter<any> = {}
): Promise<VirtualExpression> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /VirtualExpressions/:id
 */
export async function VirtualExpression_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/VirtualExpressions/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /VirtualExpressions/count
 */
export async function VirtualExpression_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualExpressions/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
