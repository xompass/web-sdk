import { ApiFetch } from '../core/ApiFetch';
import { ProjectRestrictionTable } from '../models/ProjectRestrictionTable';
import { RateLimit } from '../models/RateLimit';

/**
 * Api services for the `Project` model.
 */

/**
 * Capta la relación hasOne restrictionTable.
 * /Projects/:id/restrictionTable
 */
export async function Project_GetRestrictionTable(
  id: string,
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
 * Capta la relación hasOne rateLimit.
 * /Projects/:id/rateLimit
 */
export async function Project_GetRateLimit(id: string): Promise<RateLimit> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/rateLimit',
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en rateLimit de este modelo.
 * /Projects/:id/rateLimit
 */
export async function Project_CreateRateLimit(
  id: string,
  data: any = {},
): Promise<RateLimit> {
  return ApiFetch({
    method: 'POST',
    url: '/Projects/:id/rateLimit',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Actualizar rateLimit de este modelo.
 * /Projects/:id/rateLimit
 */
export async function Project_UpdateRateLimit(
  id: string,
  data: any = {},
): Promise<RateLimit> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/rateLimit',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Suscribe to web-socket service (WSS)
 * /Projects/:id/sockets/:socketId/subscribe
 */
export async function Project_subscribe(
  id: string,
  socketId: string,
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Projects/:id/sockets/:socketId/subscribe',
    routeParams: {
      id,
      socketId,
    },
    body: {},
  });
}
/**
 * Unsuscribe from web-socket service (WSS)
 * /Projects/:id/sockets/:socketId/unsubscribe
 */
export async function Project_unsubscribe(
  id: string,
  socketId: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Projects/:id/sockets/:socketId/unsubscribe',
    routeParams: {
      id,
      socketId,
    },
  });
}
/**
 * Get merged restriction table
 * /Projects/:id/restrictionTable/merged
 */
export async function Project_getMergedRestrictionTable(
  id: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Projects/:id/restrictionTable/merged',
    routeParams: {
      id,
    },
  });
}
