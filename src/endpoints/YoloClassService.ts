import { ApiFetch, Filter } from '../core/ApiFetch';
import { YoloClass } from '../models/YoloClass';

/**
 * Api services for the `YoloClass` model.
 */

/**
 * Check whether a model instance exists in the data source.
 * /YoloClasses/:id/exists
 */
export async function YoloClass_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/YoloClasses/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /YoloClasses/:id
 */
export async function YoloClass_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<YoloClass> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/YoloClasses/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /YoloClasses
 */
export async function YoloClass_find(
  filter: Filter<any> = {}
): Promise<YoloClass[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/YoloClasses',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /YoloClasses/findOne
 */
export async function YoloClass_findOne(
  filter: Filter<any> = {}
): Promise<YoloClass> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/YoloClasses/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /YoloClasses/count
 */
export async function YoloClass_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/YoloClasses/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
