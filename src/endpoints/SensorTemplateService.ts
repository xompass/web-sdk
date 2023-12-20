import { ApiFetch, Filter } from '../core/ApiFetch';
import { SensorTemplate } from '../models/SensorTemplate';
import { AssetStateTemplate } from '../models/AssetStateTemplate';
import { SensorAssetStateTemplate } from '../models/SensorAssetStateTemplate';

/**
 * Api services for the `SensorTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para assetStateTemplates.
 * /SensorTemplates/:id/assetStateTemplates/:fk
 */
export async function SensorTemplate_FindByIdAssetStateTemplates(
  id: string,
  fk: string,
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id/assetStateTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assetStateTemplates.
 * /SensorTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function SensorTemplate_LinkAssetStateTemplates(
  id: string,
  fk: string,
  data: any = {},
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/SensorTemplates/:id/assetStateTemplates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación assetStateTemplates con un elemento por id.
 * /SensorTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function SensorTemplate_UnlinkAssetStateTemplates(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/SensorTemplates/:id/assetStateTemplates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assetStateTemplates con un elemento por id.
 * /SensorTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function SensorTemplate_ExistsAssetStateTemplates(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/SensorTemplates/:id/assetStateTemplates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para stateTemplates.
 * /SensorTemplates/:id/stateTemplates/:fk
 */
export async function SensorTemplate_FindByIdStateTemplates(
  id: string,
  fk: string,
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id/stateTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para stateTemplates.
 * /SensorTemplates/:id/stateTemplates/:fk
 */
export async function SensorTemplate_UpdateByIdStateTemplates(
  id: string,
  fk: string,
  data: any = {},
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/SensorTemplates/:id/stateTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * assetStateTemplates consultas de SensorTemplate.
 * /SensorTemplates/:id/assetStateTemplates
 */
export async function SensorTemplate_GetAssetStateTemplates(
  id: string,
  filter: Filter<any> = {},
): Promise<AssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id/assetStateTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assetStateTemplates de SensorTemplate.
 * /SensorTemplates/:id/assetStateTemplates/count
 */
export async function SensorTemplate_CountAssetStateTemplates(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id/assetStateTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * stateTemplates consultas de SensorTemplate.
 * /SensorTemplates/:id/stateTemplates
 */
export async function SensorTemplate_GetStateTemplates(
  id: string,
  filter: Filter<any> = {},
): Promise<SensorAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id/stateTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos stateTemplates de SensorTemplate.
 * /SensorTemplates/:id/stateTemplates/count
 */
export async function SensorTemplate_CountStateTemplates(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id/stateTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SensorTemplates/:id/exists
 */
export async function SensorTemplate_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SensorTemplates/:id
 */
export async function SensorTemplate_findById(
  id: string,
  filter: Filter<any> = {},
): Promise<SensorTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTemplates/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
