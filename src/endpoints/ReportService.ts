import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { Asset } from "../models/Asset";
import { Manager } from "../models/Manager";

/**
 * Find a related item by id for managers.
 * /Reports/:id/managers/:fk
 */
export async function Report_FindByIdManagers(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for assets.
 * /Reports/:id/assets/:fk
 */
export async function Report_FindByIdAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for assets.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_LinkAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Asset> {
  return ApiFetch({
    method: "PUT",
    url: "/Reports/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Remove the assets relation to an item by id.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_UnlinkAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Reports/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Check the existence of assets relation to an item by id.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_ExistsAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Reports/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries managers of Report.
 * /Reports/:id/managers
 */
export async function Report_GetManagers(
  id: string,
  filter?: Filter<Manager>,
  options?: ApiRequestOptions,
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts managers of Report.
 * /Reports/:id/managers/count
 */
export async function Report_CountManagers(
  id: string,
  where?: Filter<Manager>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Reports/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries assets of Report.
 * /Reports/:id/assets
 */
export async function Report_GetAssets(
  id: string,
  filter?: Filter<Asset>,
  options?: ApiRequestOptions,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts assets of Report.
 * /Reports/:id/assets/count
 */
export async function Report_CountAssets(
  id: string,
  where?: Filter<Asset>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Reports/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
