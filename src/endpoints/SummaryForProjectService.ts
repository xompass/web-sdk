import { ApiFetch } from '../core/ApiFetch';
import { SummaryForProject } from '../models/SummaryForProject';

/**
 * Api services for the `SummaryForProject` model.
 */

/**
 * Generate summary information (using related SummaryForAsset instances)
 * /SummaryForProjects/:id/generate
 */
export async function SummaryForProject_generateSummary(
  id: string,
  force?: boolean,
  minimalResponse?: boolean,
): Promise<SummaryForProject> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams['force'] = force;
  }
  if (minimalResponse != null) {
    _urlParams['minimal_response'] = minimalResponse;
  }

  return ApiFetch({
    method: 'POST',
    url: '/SummaryForProjects/:id/generate',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
