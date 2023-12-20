import { ApiFetch, Filter } from '../core/ApiFetch';
import { Asset } from '../models/Asset';
import { Manager } from '../models/Manager';

/**
 * Api services for the `CctvDashboard` model.
 */

/**
 * Buscar un elemento relacionado por id para assets.
 * /CctvDashboards/:id/assets/:fk
 */
export async function CctvDashboard_FindByIdAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: 'GET',
    url: '/CctvDashboards/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_LinkAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: 'PUT',
    url: '/CctvDashboards/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_UnlinkAssets(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/CctvDashboards/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assets con un elemento por id.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_ExistsAssets(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/CctvDashboards/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /CctvDashboards/:id/managers/:fk
 */
export async function CctvDashboard_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/CctvDashboards/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * assets consultas de CctvDashboard.
 * /CctvDashboards/:id/assets
 */
export async function CctvDashboard_GetAssets(
  id: string,
  filter: Filter<any> = {},
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CctvDashboards/:id/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assets de CctvDashboard.
 * /CctvDashboards/:id/assets/count
 */
export async function CctvDashboard_CountAssets(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CctvDashboards/:id/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de CctvDashboard.
 * /CctvDashboards/:id/managers
 */
export async function CctvDashboard_GetManagers(
  id: string,
  filter: Filter<any> = {},
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CctvDashboards/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de CctvDashboard.
 * /CctvDashboards/:id/managers/count
 */
export async function CctvDashboard_CountManagers(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CctvDashboards/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
