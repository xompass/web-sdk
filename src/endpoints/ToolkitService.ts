import { ApiFetch, Filter } from "../core/ApiFetch";
import { Toolkit } from "../models/Toolkit";
import { Log } from "../models/Log";

/**
 * Api services for the `Toolkit` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Toolkits/:id/trackingLogs/:fk
 */
export async function Toolkit_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Toolkits/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Toolkit.
 * /Toolkits/:id/trackingLogs
 */
export async function Toolkit_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Toolkit.
 * /Toolkits/:id/trackingLogs/count
 */
export async function Toolkit_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Toolkits
 */
export async function Toolkit_create(data: any = {}): Promise<Toolkit> {
  return ApiFetch({
    method: "POST",
    url: "/Toolkits",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Toolkits/:id/exists
 */
export async function Toolkit_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Toolkits/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Toolkits/:id
 */
export async function Toolkit_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Toolkit> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Toolkits
 */
export async function Toolkit_find(
  filter: Filter<any> = {}
): Promise<Toolkit[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Toolkits/findOne
 */
export async function Toolkit_findOne(
  filter: Filter<any> = {}
): Promise<Toolkit> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Toolkits/:id
 */
export async function Toolkit_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Toolkits/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Toolkits/count
 */
export async function Toolkit_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
