import { ApiFetch, Filter } from '../core/ApiFetch';
import { FaceSubject } from '../models/FaceSubject';

/**
 * Api services for the `FaceSubject` model.
 */

/**
 * Find a model instance by {{id}} from the data source.
 * /FaceSubjects/:id
 */
export async function FaceSubject_findById(
  id: string,
  filter?: Filter<FaceSubject>,
): Promise<FaceSubject> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/FaceSubjects/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
