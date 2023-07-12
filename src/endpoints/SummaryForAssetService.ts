import { ApiFetch } from '../core/ApiFetch';
import { SummaryForAsset } from '../models/SummaryForAsset';

/**
 * Api services for the `SummaryForAsset` model.
 */

/**
 * Generate summary information (using related Summary instances)
 * /SummaryForAssets/:id/generate
 */
export async function SummaryForAsset_generateSummary(
  id: string,
  force?: boolean,
  minimalResponse?: boolean
): Promise<SummaryForAsset> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams['force'] = force;
  }
  if (minimalResponse != null) {
    _urlParams['minimal_response'] = minimalResponse;
  }

  return ApiFetch({
    method: 'POST',
    url: '/SummaryForAssets/:id/generate',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
