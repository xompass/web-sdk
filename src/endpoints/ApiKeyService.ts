import { ApiFetch, Filter } from '../core/ApiFetch';
import { ApiKey } from '../models/ApiKey';
import { RateLimit } from '../models/RateLimit';

/**
 * Api services for the `ApiKey` model.
 */

/**
 * Capta la relación hasOne rateLimit.
 * /ApiKeys/:id/rateLimit
 */
export async function ApiKey_GetRateLimit(id: string): Promise<RateLimit> {
  return ApiFetch({
    method: 'GET',
    url: '/ApiKeys/:id/rateLimit',
    routeParams: {
      id,
    },
  });
}
/**
 * Actualizar rateLimit de este modelo.
 * /ApiKeys/:id/rateLimit
 */
export async function ApiKey_UpdateRateLimit(
  id: string,
  data: any = {},
): Promise<RateLimit> {
  return ApiFetch({
    method: 'PUT',
    url: '/ApiKeys/:id/rateLimit',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /ApiKeys/:id
 */
export async function ApiKey_findById(
  id: string,
  filter: Filter<any> = {},
): Promise<ApiKey> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/ApiKeys/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
