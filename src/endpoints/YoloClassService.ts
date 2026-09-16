import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { YoloClass } from "../models/YoloClass";

/**
 * Check whether a model instance exists in the data source.
 * /YoloClasses/:id/exists
 */
export async function YoloClass_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /YoloClasses/:id
 */
export async function YoloClass_findById(
  id: string,
  filter?: Filter<YoloClass>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /YoloClasses
 */
export async function YoloClass_find(
  filter?: Filter<YoloClass>,
  options?: ApiRequestOptions,
): Promise<YoloClass[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /YoloClasses/findOne
 */
export async function YoloClass_findOne(
  filter?: Filter<YoloClass>,
  options?: ApiRequestOptions,
): Promise<YoloClass> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/YoloClasses/findOne",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /YoloClasses/count
 */
export async function YoloClass_count(
  where?: Filter<YoloClass>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/YoloClasses/count",
    urlParams: _urlParams,
    ...options,
  });
  return unwrapCount(result);
}
