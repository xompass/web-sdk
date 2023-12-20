import { ApiFetch } from '../core/ApiFetch';
import { Summary } from '../models/Summary';

/**
 * Api services for the `Dataset` model.
 */

/**
 * Assign or update summary
 * /Datasets/:id/summary/assign
 */
export async function Dataset_assignOrUpdateSummary(
  id: string,
  minimalResponse?: boolean,
): Promise<Summary> {
  const _urlParams: any = {};
  if (minimalResponse != null) {
    _urlParams['minimal_response'] = minimalResponse;
  }

  return ApiFetch({
    method: 'POST',
    url: '/Datasets/:id/summary/assign',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
