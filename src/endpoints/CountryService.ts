import { ApiFetch, Filter } from "../core/ApiFetch";
import { Country } from "../models/Country";
import { Log } from "../models/Log";

/**
 * Api services for the `Country` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Countries/:id/trackingLogs/:fk
 */
export async function Country_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Countries/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Country.
 * /Countries/:id/trackingLogs
 */
export async function Country_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Country.
 * /Countries/:id/trackingLogs/count
 */
export async function Country_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Countries
 */
export async function Country_create(data: any = {}): Promise<Country> {
  return ApiFetch({
    method: "POST",
    url: "/Countries",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Countries/:id/exists
 */
export async function Country_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Countries/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Countries/:id
 */
export async function Country_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Country> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Countries
 */
export async function Country_find(
  filter: Filter<any> = {}
): Promise<Country[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Countries/findOne
 */
export async function Country_findOne(
  filter: Filter<any> = {}
): Promise<Country> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Countries/:id
 */
export async function Country_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Countries/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Countries/count
 */
export async function Country_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
