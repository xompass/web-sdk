import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { Country } from "../models/Country";

/**
 * Check whether a model instance exists in the data source.
 * /Countries/:id/exists
 */
export async function Country_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Countries/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Countries/:id
 */
export async function Country_findById(
  id: string,
  filter?: Filter<Country>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Countries
 */
export async function Country_find(
  filter?: Filter<Country>,
  options?: ApiRequestOptions,
): Promise<Country[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Countries/findOne
 */
export async function Country_findOne(
  filter?: Filter<Country>,
  options?: ApiRequestOptions,
): Promise<Country> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Countries/findOne",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Countries/count
 */
export async function Country_count(
  where?: Filter<Country>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Countries/count",
    urlParams: _urlParams,
    ...options,
  });
  return unwrapCount(result);
}
