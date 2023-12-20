import { ApiFetch, Filter } from '../core/ApiFetch';
import { Manager } from '../models/Manager';
import { Asset } from '../models/Asset';

/**
 * Api services for the `Report` model.
 */

/**
 * Buscar un elemento relacionado por id para managers.
 * /Reports/:id/managers/:fk
 */
export async function Report_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/Reports/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para assets.
 * /Reports/:id/assets/:fk
 */
export async function Report_FindByIdAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: 'GET',
    url: '/Reports/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_LinkAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: 'PUT',
    url: '/Reports/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_UnlinkAssets(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Reports/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assets con un elemento por id.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_ExistsAssets(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/Reports/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * managers consultas de Report.
 * /Reports/:id/managers
 */
export async function Report_GetManagers(
  id: string,
  filter: Filter<any> = {},
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Reports/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de Report.
 * /Reports/:id/managers/count
 */
export async function Report_CountManagers(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Reports/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assets consultas de Report.
 * /Reports/:id/assets
 */
export async function Report_GetAssets(
  id: string,
  filter: Filter<any> = {},
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Reports/:id/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assets de Report.
 * /Reports/:id/assets/count
 */
export async function Report_CountAssets(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Reports/:id/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
