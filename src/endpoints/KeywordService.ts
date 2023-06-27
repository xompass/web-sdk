import { ApiFetch, Filter } from '../core/ApiFetch';
import { Keyword } from '../models/Keyword';

/**
 * Api services for the `Keyword` model.
 */

/**
 * Check whether a model instance exists in the data source.
 * /Keywords/:id/exists
 */
export async function Keyword_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/Keywords/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Keywords/:id
 */
export async function Keyword_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Keyword> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Keywords/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Keywords
 */
export async function Keyword_find(
  filter: Filter<any> = {}
): Promise<Keyword[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Keywords',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Keywords/findOne
 */
export async function Keyword_findOne(
  filter: Filter<any> = {}
): Promise<Keyword> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Keywords/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Keywords/count
 */
export async function Keyword_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Keywords/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
