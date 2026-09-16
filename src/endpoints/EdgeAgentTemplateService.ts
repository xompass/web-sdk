import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { EdgeAgentTemplate } from "../models/EdgeAgentTemplate";
import { EdgeAgentTemplateTag } from "../models/EdgeAgentTemplateTag";

/**
 * Find a related item by id for tags.
 * /EdgeAgentTemplates/:id/tags/:fk
 */
export async function EdgeAgentTemplate_FindByIdTags(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EdgeAgentTemplateTag> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/:id/tags/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries tags of EdgeAgentTemplate.
 * /EdgeAgentTemplates/:id/tags
 */
export async function EdgeAgentTemplate_GetTags(
  id: string,
  filter?: Filter<EdgeAgentTemplateTag>,
  options?: ApiRequestOptions,
): Promise<EdgeAgentTemplateTag[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/:id/tags",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts tags of EdgeAgentTemplate.
 * /EdgeAgentTemplates/:id/tags/count
 */
export async function EdgeAgentTemplate_CountTags(
  id: string,
  where?: Filter<EdgeAgentTemplateTag>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/:id/tags/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EdgeAgentTemplates/:id
 */
export async function EdgeAgentTemplate_findById(
  id: string,
  filter?: Filter<EdgeAgentTemplate>,
  options?: ApiRequestOptions,
): Promise<EdgeAgentTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EdgeAgentTemplates
 */
export async function EdgeAgentTemplate_find(
  filter?: Filter<EdgeAgentTemplate>,
  options?: ApiRequestOptions,
): Promise<EdgeAgentTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EdgeAgentTemplates/count
 */
export async function EdgeAgentTemplate_count(
  where?: Filter<EdgeAgentTemplate>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/count",
    urlParams: _urlParams,
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Find all templates
 * /EdgeAgentTemplates/v2
 */
export async function EdgeAgentTemplate_v2Find(
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/v2",
    ...options,
  });
}
/**
 * Find a template by id
 * /EdgeAgentTemplates/v2/:id
 */
export async function EdgeAgentTemplate_v2FindById(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/v2/:id",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find all template templateTags
 * /EdgeAgentTemplates/v2/:id/tags
 */
export async function EdgeAgentTemplate_v2GetTemplateTags(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/v2/:id/tags",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a templateTag by id
 * /EdgeAgentTemplates/v2/:id/tags/:fk
 */
export async function EdgeAgentTemplate_v2GetTemplateTagById(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplates/v2/:id/tags/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Generate a new EdgeAgent instance based on a template tag
 * /EdgeAgentTemplates/v2/:id/tags/:fk/generate
 */
export async function EdgeAgentTemplate_v2Generate(
  id: string,
  fk: string,
  params: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/EdgeAgentTemplates/v2/:id/tags/:fk/generate",
    routeParams: {
      id,
      fk,
    },
    body: params,
    ...options,
  });
}
