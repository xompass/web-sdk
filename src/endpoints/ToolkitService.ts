import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { Log } from "../models/Log";
import { Toolkit } from "../models/Toolkit";

/**
 * Find a related item by id for trackingLogs.
 * /Toolkits/:id/trackingLogs/:fk
 */
export async function Toolkit_FindByIdTrackingLogs(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Toolkits/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries trackingLogs of Toolkit.
 * /Toolkits/:id/trackingLogs
 */
export async function Toolkit_GetTrackingLogs(
  id: string,
  filter?: Filter<Log>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts trackingLogs of Toolkit.
 * /Toolkits/:id/trackingLogs/count
 */
export async function Toolkit_CountTrackingLogs(
  id: string,
  where?: Filter<Log>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Toolkits/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Check whether a model instance exists in the data source.
 * /Toolkits/:id/exists
 */
export async function Toolkit_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Toolkits/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Toolkits/:id
 */
export async function Toolkit_findById(
  id: string,
  filter?: Filter<Toolkit>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Toolkits
 */
export async function Toolkit_find(
  filter?: Filter<Toolkit>,
  options?: ApiRequestOptions,
): Promise<Toolkit[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Toolkits/findOne
 */
export async function Toolkit_findOne(
  filter?: Filter<Toolkit>,
  options?: ApiRequestOptions,
): Promise<Toolkit> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Toolkits/findOne",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Toolkits/count
 */
export async function Toolkit_count(
  where?: Filter<Toolkit>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Toolkits/count",
    urlParams: _urlParams,
    ...options,
  });
  return unwrapCount(result);
}
