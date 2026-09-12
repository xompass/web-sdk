import { ApiFetch, Filter } from "../core/ApiFetch";
import { Asset } from "../models/Asset";
import { Manager } from "../models/Manager";

/**
 * Find a related item by id for assets.
 * /CctvDashboards/:id/assets/:fk
 */
export async function CctvDashboard_FindByIdAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Add a related item by id for assets.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_LinkAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: "PUT",
    url: "/CctvDashboards/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Remove the assets relation to an item by id.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_UnlinkAssets(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/CctvDashboards/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Check the existence of assets relation to an item by id.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_ExistsAssets(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/CctvDashboards/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for managers.
 * /CctvDashboards/:id/managers/:fk
 */
export async function CctvDashboard_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Queries assets of CctvDashboard.
 * /CctvDashboards/:id/assets
 */
export async function CctvDashboard_GetAssets(
  id: string,
  filter?: Filter<Asset>,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts assets of CctvDashboard.
 * /CctvDashboards/:id/assets/count
 */
export async function CctvDashboard_CountAssets(
  id: string,
  where?: Filter<Asset>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries managers of CctvDashboard.
 * /CctvDashboards/:id/managers
 */
export async function CctvDashboard_GetManagers(
  id: string,
  filter?: Filter<Manager>,
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts managers of CctvDashboard.
 * /CctvDashboards/:id/managers/count
 */
export async function CctvDashboard_CountManagers(
  id: string,
  where?: Filter<Manager>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
