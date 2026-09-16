import { ApiFetch, ApiRequestOptions, Filter } from "../core/ApiFetch";
import { Asset } from "../models/Asset";
import { EdgeAgentAsset } from "../models/EdgeAgent";

/**
 * Find a related item by id for assets.
 * /EdgeAgents/:id/assets/:fk
 */
export async function EdgeAgent_FindByIdAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for assets.
 * /EdgeAgents/:id/assets/rel/:fk
 */
export async function EdgeAgent_LinkAssets(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EdgeAgentAsset> {
  return ApiFetch({
    method: "PUT",
    url: "/EdgeAgents/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the assets relation to an item by id.
 * /EdgeAgents/:id/assets/rel/:fk
 */
export async function EdgeAgent_UnlinkAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgents/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for telegramChats.
 * /EdgeAgents/:id/telegramChats/rel/:fk
 */
export async function EdgeAgent_LinkTelegramChats(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EdgeAgents/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the telegramChats relation to an item by id.
 * /EdgeAgents/:id/telegramChats/rel/:fk
 */
export async function EdgeAgent_UnlinkTelegramChats(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgents/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries assets of EdgeAgent.
 * /EdgeAgents/:id/assets
 */
export async function EdgeAgent_GetAssets(
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
    url: "/EdgeAgents/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Link assets in a bulk operation
 * /EdgeAgents/:id/assets/rel
 */
export async function EdgeAgent_BulkLinkAssets(
  id: string,
  where: Filter<Asset>["where"],
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "PUT",
    url: "/EdgeAgents/:id/assets/rel",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Unlink assets in a bulk operation
 * /EdgeAgents/:id/assets/rel
 */
export async function EdgeAgent_BulkUnlinkAssets(
  id: string,
  where: Filter<Asset>["where"],
  options?: ApiRequestOptions,
): Promise<void> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgents/:id/assets/rel",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
