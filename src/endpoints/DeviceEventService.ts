import { ApiFetch, Filter } from '../core/ApiFetch';
import { DeviceEvent } from '../models/DeviceEvent';
import { Log } from '../models/Log';

/**
 * Api services for the `DeviceEvent` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /DeviceEvents/:id/trackingLogs/:fk
 */
export async function DeviceEvent_FindByIdTrackingLogs(
  id: string,
  fk: string,
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents/:id/trackingLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de DeviceEvent.
 * /DeviceEvents/:id/trackingLogs
 */
export async function DeviceEvent_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {},
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents/:id/trackingLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de DeviceEvent.
 * /DeviceEvents/:id/trackingLogs/count
 */
export async function DeviceEvent_CountTrackingLogs(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents/:id/trackingLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /DeviceEvents
 */
export async function DeviceEvent_create(data: any = {}): Promise<DeviceEvent> {
  return ApiFetch({
    method: 'POST',
    url: '/DeviceEvents',
    routeParams: {},
    body: data,
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /DeviceEvents/:id/exists
 */
export async function DeviceEvent_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /DeviceEvents/:id
 */
export async function DeviceEvent_findById(
  id: string,
  filter: Filter<any> = {},
): Promise<DeviceEvent> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /DeviceEvents
 */
export async function DeviceEvent_find(
  filter: Filter<any> = {},
): Promise<DeviceEvent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /DeviceEvents/findOne
 */
export async function DeviceEvent_findOne(
  filter: Filter<any> = {},
): Promise<DeviceEvent> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /DeviceEvents/:id
 */
export async function DeviceEvent_deleteById(id: string): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/DeviceEvents/:id',
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /DeviceEvents/count
 */
export async function DeviceEvent_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/DeviceEvents/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
