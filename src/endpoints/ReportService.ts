import { ApiFetch, Filter } from '../core/ApiFetch';
import { Manager } from '../models/Manager';
import { Asset } from '../models/Asset';

/**
 * Api services for the `Report` model.
 */

/**
 * Find a related item by id for managers.
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
 * Find a related item by id for assets.
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
 * Add a related item by id for assets.
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
  });
}
/**
 * Remove the assets relation to an item by id.
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
 * Check the existence of assets relation to an item by id.
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
 * Queries managers of Report.
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
 * Counts managers of Report.
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
 * Queries assets of Report.
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
 * Counts assets of Report.
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
