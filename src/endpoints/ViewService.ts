import { ApiFetch, Filter } from '../core/ApiFetch';
import { View } from '../models/View';
import { Manager } from '../models/Manager';

/**
 * Api services for the `View` model.
 */

/**
 * Buscar un elemento relacionado por id para managers.
 * /Views/:id/managers/:fk
 */
export async function View_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/Views/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación managers con un elemento por id.
 * /Views/:id/managers/rel/:fk
 */
export async function View_ExistsManagers(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/Views/:id/managers/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * managers consultas de View.
 * /Views/:id/managers
 */
export async function View_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Views/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de View.
 * /Views/:id/managers/count
 */
export async function View_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Views/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Views/:id/exists
 */
export async function View_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/Views/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Views/:id
 */
export async function View_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<View> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Views/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Views
 */
export async function View_find(filter: Filter<any> = {}): Promise<View[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Views',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Views/findOne
 */
export async function View_findOne(filter: Filter<any> = {}): Promise<View> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Views/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Views/count
 */
export async function View_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Views/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
