import { ApiFetch, Filter } from '../core/ApiFetch';
import { Log } from '../models/Log';

/**
 * Api services for the `Event` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Events/:id/trackingLogs/:fk
 */
export async function Event_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/Events/:id/trackingLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Event.
 * /Events/:id/trackingLogs
 */
export async function Event_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Events/:id/trackingLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Event.
 * /Events/:id/trackingLogs/count
 */
export async function Event_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Events/:id/trackingLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
