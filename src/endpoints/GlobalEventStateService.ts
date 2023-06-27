import { ApiFetch, Filter } from '../core/ApiFetch';
import { GlobalEventState } from '../models/GlobalEventState';

/**
 * Api services for the `GlobalEventState` model.
 */

/**
 * Check whether a model instance exists in the data source.
 * /GlobalEventStates/:id/exists
 */
export async function GlobalEventState_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/GlobalEventStates/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /GlobalEventStates/:id
 */
export async function GlobalEventState_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<GlobalEventState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/GlobalEventStates/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /GlobalEventStates
 */
export async function GlobalEventState_find(
  filter: Filter<any> = {}
): Promise<GlobalEventState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/GlobalEventStates',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /GlobalEventStates/findOne
 */
export async function GlobalEventState_findOne(
  filter: Filter<any> = {}
): Promise<GlobalEventState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/GlobalEventStates/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /GlobalEventStates/count
 */
export async function GlobalEventState_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/GlobalEventStates/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
