import { ApiFetch, Filter } from "../core/ApiFetch";
import { VirtualVariable } from "../models/VirtualVariable";
import { Log } from "../models/Log";

/**
 * Api services for the `VirtualVariable` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /VirtualVariables/:id/trackingLogs/:fk
 */
export async function VirtualVariable_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de VirtualVariable.
 * /VirtualVariables/:id/trackingLogs
 */
export async function VirtualVariable_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de VirtualVariable.
 * /VirtualVariables/:id/trackingLogs/count
 */
export async function VirtualVariable_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /VirtualVariables
 */
export async function VirtualVariable_create(
  data: any = {}
): Promise<VirtualVariable> {
  return ApiFetch({
    method: "POST",
    url: "/VirtualVariables",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /VirtualVariables/:id/exists
 */
export async function VirtualVariable_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /VirtualVariables/:id
 */
export async function VirtualVariable_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<VirtualVariable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /VirtualVariables
 */
export async function VirtualVariable_find(
  filter: Filter<any> = {}
): Promise<VirtualVariable[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /VirtualVariables/findOne
 */
export async function VirtualVariable_findOne(
  filter: Filter<any> = {}
): Promise<VirtualVariable> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /VirtualVariables/:id
 */
export async function VirtualVariable_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/VirtualVariables/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /VirtualVariables/count
 */
export async function VirtualVariable_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualVariables/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
