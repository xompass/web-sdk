import { ApiFetch, Filter } from '../core/ApiFetch';
import { EdgeAgentTemplate } from '../models/EdgeAgentTemplate';
import { EdgeAgentTemplateTag } from '../models/EdgeAgentTemplateTag';

/**
 * Api services for the `EdgeAgentTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para tags.
 * /EdgeAgentTemplates/:id/tags/:fk
 */
export async function EdgeAgentTemplate_FindByIdTags(
  id: string,
  fk: string,
): Promise<EdgeAgentTemplateTag> {
  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/:id/tags/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * tags consultas de EdgeAgentTemplate.
 * /EdgeAgentTemplates/:id/tags
 */
export async function EdgeAgentTemplate_GetTags(
  id: string,
  filter: Filter<any> = {},
): Promise<EdgeAgentTemplateTag[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/:id/tags',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos tags de EdgeAgentTemplate.
 * /EdgeAgentTemplates/:id/tags/count
 */
export async function EdgeAgentTemplate_CountTags(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/:id/tags/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EdgeAgentTemplates/:id
 */
export async function EdgeAgentTemplate_findById(
  id: string,
  filter: Filter<any> = {},
): Promise<EdgeAgentTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EdgeAgentTemplates
 */
export async function EdgeAgentTemplate_find(
  filter: Filter<any> = {},
): Promise<EdgeAgentTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EdgeAgentTemplates/count
 */
export async function EdgeAgentTemplate_count(
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find all templates
 * /EdgeAgentTemplates/v2
 */
export async function EdgeAgentTemplate_v2Find(): Promise<any[]> {
  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/v2',
    routeParams: {},
  });
}
/**
 * Find a template by id
 * /EdgeAgentTemplates/v2/:id
 */
export async function EdgeAgentTemplate_v2FindById(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/v2/:id',
    routeParams: {
      id,
    },
  });
}
/**
 * Find all template templateTags
 * /EdgeAgentTemplates/v2/:id/tags
 */
export async function EdgeAgentTemplate_v2GetTemplateTags(
  id: string,
): Promise<any[]> {
  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/v2/:id/tags',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a templateTag by id
 * /EdgeAgentTemplates/v2/:id/tags/:fk
 */
export async function EdgeAgentTemplate_v2GetTemplateTagById(
  id: string,
  fk: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgentTemplates/v2/:id/tags/:fk',
    routeParams: {
      id,
      fk,
    },
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
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/EdgeAgentTemplates/v2/:id/tags/:fk/generate',
    routeParams: {
      id,
      fk,
    },
    body: {
      params,
    },
  });
}
