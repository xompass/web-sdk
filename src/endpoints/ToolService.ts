import { ApiFetch, Filter } from "../core/ApiFetch";
import { Tool } from "../models/Tool";

/**
 * Check whether a model instance exists in the data source.
 * /Tools/:id/exists
 */
export async function Tool_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Tools/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Tools/:id
 */
export async function Tool_findById(
  id: string,
  filter?: Filter<Tool>,
): Promise<Tool> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Tools
 */
export async function Tool_find(filter?: Filter<Tool>): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Tools",
    urlParams: _urlParams,
  });
}
