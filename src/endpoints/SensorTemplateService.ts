import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { AssetStateTemplate } from "../models/AssetStateTemplate";
import { SensorAssetStateTemplate } from "../models/SensorAssetStateTemplate";
import { SensorTemplate } from "../models/SensorTemplate";

/**
 * Find a related item by id for assetStateTemplates.
 * /SensorTemplates/:id/assetStateTemplates/:fk
 */
export async function SensorTemplate_FindByIdAssetStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id/assetStateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for assetStateTemplates.
 * /SensorTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function SensorTemplate_LinkAssetStateTemplates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/SensorTemplates/:id/assetStateTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the assetStateTemplates relation to an item by id.
 * /SensorTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function SensorTemplate_UnlinkAssetStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/SensorTemplates/:id/assetStateTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Check the existence of assetStateTemplates relation to an item by id.
 * /SensorTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function SensorTemplate_ExistsAssetStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/SensorTemplates/:id/assetStateTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for stateTemplates.
 * /SensorTemplates/:id/stateTemplates/:fk
 */
export async function SensorTemplate_FindByIdStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id/stateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for stateTemplates.
 * /SensorTemplates/:id/stateTemplates/:fk
 */
export async function SensorTemplate_UpdateByIdStateTemplates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/SensorTemplates/:id/stateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries assetStateTemplates of SensorTemplate.
 * /SensorTemplates/:id/assetStateTemplates
 */
export async function SensorTemplate_GetAssetStateTemplates(
  id: string,
  filter?: Filter<AssetStateTemplate>,
  options?: ApiRequestOptions,
): Promise<AssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id/assetStateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts assetStateTemplates of SensorTemplate.
 * /SensorTemplates/:id/assetStateTemplates/count
 */
export async function SensorTemplate_CountAssetStateTemplates(
  id: string,
  where?: Filter<AssetStateTemplate>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id/assetStateTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries stateTemplates of SensorTemplate.
 * /SensorTemplates/:id/stateTemplates
 */
export async function SensorTemplate_GetStateTemplates(
  id: string,
  filter?: Filter<SensorAssetStateTemplate>,
  options?: ApiRequestOptions,
): Promise<SensorAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id/stateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts stateTemplates of SensorTemplate.
 * /SensorTemplates/:id/stateTemplates/count
 */
export async function SensorTemplate_CountStateTemplates(
  id: string,
  where?: Filter<SensorAssetStateTemplate>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id/stateTemplates/count",
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
 * /SensorTemplates/:id/exists
 */
export async function SensorTemplate_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SensorTemplates/:id
 */
export async function SensorTemplate_findById(
  id: string,
  filter?: Filter<SensorTemplate>,
  options?: ApiRequestOptions,
): Promise<SensorTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
