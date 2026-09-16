import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { BIPanelSerie } from "../models/BIPanel";

/**
 * Find a related item by id for series.
 * /BIPanels/:id/series/:fk
 */
export async function BIPanel_FindByIdSeries(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<BIPanelSerie> {
  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for series.
 * /BIPanels/:id/series/:fk
 */
export async function BIPanel_DestroyByIdSeries(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/BIPanels/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for series.
 * /BIPanels/:id/series/:fk
 */
export async function BIPanel_UpdateByIdSeries(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<BIPanelSerie> {
  return ApiFetch({
    method: "PUT",
    url: "/BIPanels/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries series of BIPanel.
 * /BIPanels/:id/series
 */
export async function BIPanel_GetSeries(
  id: string,
  filter?: Filter<BIPanelSerie>,
  options?: ApiRequestOptions,
): Promise<BIPanelSerie[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/series",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in series of this model.
 * /BIPanels/:id/series
 */
export async function BIPanel_CreateSeries(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<BIPanelSerie> {
  return ApiFetch({
    method: "POST",
    url: "/BIPanels/:id/series",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts series of BIPanel.
 * /BIPanels/:id/series/count
 */
export async function BIPanel_CountSeries(
  id: string,
  where?: Filter<BIPanelSerie>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/series/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
