import { ApiFetch } from '../core/ApiFetch';
import { ProjectRestrictionTable } from '../models/ProjectRestrictionTable';

/**
 * Api services for the `Project` model.
 */

/**
 * Capta la relación hasOne restrictionTable.
 * /Projects/:id/restrictionTable
 */
export async function Project_GetRestrictionTable(
  id: string
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/restrictionTable',
    routeParams: {
      id,
    },
  });
}
/**
 * Get merged restriction table
 * /Projects/:id/restrictionTable/merged
 */
export async function Project_getMergedRestrictionTable(
  id: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/restrictionTable/merged',
    routeParams: {
      id,
    },
  });
}
