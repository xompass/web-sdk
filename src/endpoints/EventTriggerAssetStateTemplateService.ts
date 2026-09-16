import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { EventTriggerRuleTemplate } from "../models/EventTriggerRuleTemplate";

/**
 * Find a related item by id for ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_FindByIdRuleTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_DestroyByIdRuleTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_UpdateByIdRuleTemplates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries ruleTemplates of EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates
 */
export async function EventTriggerAssetStateTemplate_GetRuleTemplates(
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
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in ruleTemplates of this model.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates
 */
export async function EventTriggerAssetStateTemplate_CreateRuleTemplates(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts ruleTemplates of EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/count
 */
export async function EventTriggerAssetStateTemplate_CountRuleTemplates(
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
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
