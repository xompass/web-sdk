import { ApiFetch, Filter } from '../core/ApiFetch';
import { EventTriggerRuleTemplate } from '../models/EventTriggerRuleTemplate';

/**
 * Api services for the `EventTriggerAssetStateTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_FindByIdRuleTemplates(
  id: string,
  fk: string,
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_DestroyByIdRuleTemplates(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_UpdateByIdRuleTemplates(
  id: string,
  fk: string,
  data: any = {},
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * ruleTemplates consultas de EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates
 */
export async function EventTriggerAssetStateTemplate_GetRuleTemplates(
  id: string,
  filter: Filter<any> = {},
): Promise<EventTriggerRuleTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggerAssetStateTemplates/:id/ruleTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en ruleTemplates de este modelo.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates
 */
export async function EventTriggerAssetStateTemplate_CreateRuleTemplates(
  id: string,
  data: any = {},
): Promise<EventTriggerRuleTemplate> {
  return ApiFetch({
    method: 'POST',
    url: '/EventTriggerAssetStateTemplates/:id/ruleTemplates',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos ruleTemplates de EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/count
 */
export async function EventTriggerAssetStateTemplate_CountRuleTemplates(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggerAssetStateTemplates/:id/ruleTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
