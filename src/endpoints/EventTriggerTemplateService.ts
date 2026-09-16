import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { AssetStateTemplate } from "../models/AssetStateTemplate";
import { EventTriggerAssetStateTemplate } from "../models/EventTriggerAssetStateTemplate";
import { EventTriggerRuleTemplate } from "../models/EventTriggerRuleTemplate";

/**
 * Find a related item by id for assetStateTemplates.
 * /EventTriggerTemplates/:id/assetStateTemplates/:fk
 */
export async function EventTriggerTemplate_FindByIdAssetStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for assetStateTemplates.
 * /EventTriggerTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function EventTriggerTemplate_LinkAssetStateTemplates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetStateTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/rel/:fk",
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
 * /EventTriggerTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function EventTriggerTemplate_UnlinkAssetStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Check the existence of assetStateTemplates relation to an item by id.
 * /EventTriggerTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function EventTriggerTemplate_ExistsAssetStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for stateTemplates.
 * /EventTriggerTemplates/:id/stateTemplates/:fk
 */
export async function EventTriggerTemplate_FindByIdStateTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/stateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for stateTemplates.
 * /EventTriggerTemplates/:id/stateTemplates/:fk
 */
export async function EventTriggerTemplate_UpdateByIdStateTemplates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetStateTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerTemplates/:id/stateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for ruleTemplates.
 * /EventTriggerTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerTemplate_FindByIdRuleTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for ruleTemplates.
 * /EventTriggerTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerTemplate_DestroyByIdRuleTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for ruleTemplates.
 * /EventTriggerTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerTemplate_UpdateByIdRuleTemplates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries assetStateTemplates of EventTriggerTemplate.
 * /EventTriggerTemplates/:id/assetStateTemplates
 */
export async function EventTriggerTemplate_GetAssetStateTemplates(
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
    url: "/EventTriggerTemplates/:id/assetStateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts assetStateTemplates of EventTriggerTemplate.
 * /EventTriggerTemplates/:id/assetStateTemplates/count
 */
export async function EventTriggerTemplate_CountAssetStateTemplates(
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
    url: "/EventTriggerTemplates/:id/assetStateTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries stateTemplates of EventTriggerTemplate.
 * /EventTriggerTemplates/:id/stateTemplates
 */
export async function EventTriggerTemplate_GetStateTemplates(
  id: string,
  filter?: Filter<EventTriggerAssetStateTemplate>,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/stateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts stateTemplates of EventTriggerTemplate.
 * /EventTriggerTemplates/:id/stateTemplates/count
 */
export async function EventTriggerTemplate_CountStateTemplates(
  id: string,
  where?: Filter<EventTriggerAssetStateTemplate>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/stateTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries ruleTemplates of EventTriggerTemplate.
 * /EventTriggerTemplates/:id/ruleTemplates
 */
export async function EventTriggerTemplate_GetRuleTemplates(
  id: string,
  filter?: Filter<EventTriggerRuleTemplate>,
  options?: ApiRequestOptions,
): Promise<EventTriggerRuleTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/ruleTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in ruleTemplates of this model.
 * /EventTriggerTemplates/:id/ruleTemplates
 */
export async function EventTriggerTemplate_CreateRuleTemplates(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerTemplates/:id/ruleTemplates",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts ruleTemplates of EventTriggerTemplate.
 * /EventTriggerTemplates/:id/ruleTemplates/count
 */
export async function EventTriggerTemplate_CountRuleTemplates(
  id: string,
  where?: Filter<EventTriggerRuleTemplate>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/ruleTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
