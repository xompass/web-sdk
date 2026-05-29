import { ApiFetch, Filter } from '../core/ApiFetch';
import { Log } from '../models/Log';

/**
 * Api services for the `HealthcheckEvent` model.
 */

/**
 * Find a related item by id for trackingLogs.
 * /HealthcheckEvents/:id/trackingLogs/:fk
 */
export async function HealthcheckEvent_FindByIdTrackingLogs(
  id: string,
  fk: string,
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/HealthcheckEvents/:id/trackingLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Queries trackingLogs of HealthcheckEvent.
 * /HealthcheckEvents/:id/trackingLogs
 */
export async function HealthcheckEvent_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {},
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/HealthcheckEvents/:id/trackingLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts trackingLogs of HealthcheckEvent.
 * /HealthcheckEvents/:id/trackingLogs/count
 */
export async function HealthcheckEvent_CountTrackingLogs(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/HealthcheckEvents/:id/trackingLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
