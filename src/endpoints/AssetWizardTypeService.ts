import { ApiFetch, Filter } from '../core/ApiFetch';
import { EdgeAgentTemplate } from '../models/EdgeAgentTemplate';

/**
 * Api services for the `AssetWizardType` model.
 */

/**
 * Buscar un elemento relacionado por id para edgeAgentTemplates.
 * /AssetWizardTypes/:id/edgeAgentTemplates/:fk
 */
export async function AssetWizardType_FindByIdEdgeAgentTemplates(
  id: string,
  fk: string,
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/AssetWizardTypes/:id/edgeAgentTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * edgeAgentTemplates consultas de AssetWizardType.
 * /AssetWizardTypes/:id/edgeAgentTemplates
 */
export async function AssetWizardType_GetEdgeAgentTemplates(
  id: string,
  filter: Filter<any> = {},
): Promise<EdgeAgentTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/AssetWizardTypes/:id/edgeAgentTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos edgeAgentTemplates de AssetWizardType.
 * /AssetWizardTypes/:id/edgeAgentTemplates/count
 */
export async function AssetWizardType_CountEdgeAgentTemplates(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/AssetWizardTypes/:id/edgeAgentTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
