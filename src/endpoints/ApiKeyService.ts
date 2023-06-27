import { ApiFetch, Filter } from '../core/ApiFetch';
import { ApiKey } from '../models/ApiKey';

/**
 * Api services for the `ApiKey` model.
 */

/**
 * Find a model instance by {{id}} from the data source.
 * /ApiKeys/:id
 */
export async function ApiKey_findById(
  id: string,
  filter: Filter<any> = {}
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
