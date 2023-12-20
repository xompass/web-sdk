import { ApiFetch, Filter } from '../core/ApiFetch';
import { DeviceConfig } from '../models/Device';
import { DeviceEvent } from '../models/DeviceEvent';
import { DeviceEventComment } from '../models/DeviceEventComment';
import { DeviceEventData } from '../models/DeviceEventData';
import { DeviceEventStateChange } from '../models/DeviceEventStateChange';

/**
 * Api services for the `Device` model.
 */

/**
 * Capta la relación hasOne config.
 * /Devices/:id/config
 */
export async function Device_GetConfig(id: string): Promise<DeviceConfig> {
  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/config',
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en config de este modelo.
 * /Devices/:id/config
 */
export async function Device_CreateConfig(
  id: string,
  data: any = {},
): Promise<DeviceConfig> {
  return ApiFetch({
    method: 'POST',
    url: '/Devices/:id/config',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Actualizar config de este modelo.
 * /Devices/:id/config
 */
export async function Device_UpdateConfig(
  id: string,
  data: any = {},
): Promise<DeviceConfig> {
  return ApiFetch({
    method: 'PUT',
    url: '/Devices/:id/config',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para events.
 * /Devices/:id/events/:fk
 */
export async function Device_FindByIdEvents(
  id: string,
  fk: string,
): Promise<DeviceEvent> {
  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para events.
 * /Devices/:id/events/:fk
 */
export async function Device_UpdateByIdEvents(
  id: string,
  fk: string,
  data: any = {},
): Promise<DeviceEvent> {
  return ApiFetch({
    method: 'PUT',
    url: '/Devices/:id/events/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Añadir un elemento relacionado por id para telegramChats.
 * /Devices/:id/telegramChats/rel/:fk
 */
export async function Device_LinkTelegramChats(
  id: string,
  fk: string,
  data: any = {},
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Devices/:id/telegramChats/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación telegramChats con un elemento por id.
 * /Devices/:id/telegramChats/rel/:fk
 */
export async function Device_UnlinkTelegramChats(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Devices/:id/telegramChats/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * events consultas de Device.
 * /Devices/:id/events
 */
export async function Device_GetEvents(
  id: string,
  filter: Filter<any> = {},
): Promise<DeviceEvent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos events de Device.
 * /Devices/:id/events/count
 */
export async function Device_CountEvents(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Restart Device, using the Command Center
 * /Devices/:id/cmdc/restart
 */
export async function Device_cmdcRestart(id: string): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Devices/:id/cmdc/restart',
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Restart EdgeAgent module, using the Command Center
 * /Devices/:id/cmdc/modules/:name/restart
 */
export async function Device_cmdcRestartModule(
  id: string,
  name: string,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Devices/:id/cmdc/modules/:name/restart',
    routeParams: {
      id,
      name,
    },
    body: {},
  });
}
/**
 * Buscar un elemento relacionado por id para comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_FindByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/comments/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_DestroyByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Devices/:id/events/:nk/comments/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_UpdateByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: 'PUT',
    url: '/Devices/:id/events/:nk/comments/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para data.
 * /Devices/:id/events/:nk/data/:fk
 */
export async function Device_FindByIdEventsData(
  id: string,
  nk: string,
  fk: string,
): Promise<DeviceEventData> {
  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/data/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para stateChanges.
 * /Devices/:id/events/:nk/stateChanges/:fk
 */
export async function Device_FindByIdEventsStateChanges(
  id: string,
  nk: string,
  fk: string,
): Promise<DeviceEventStateChange> {
  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/stateChanges/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * comments consultas de DeviceEvent.
 * /Devices/:id/events/:nk/comments
 */
export async function Device_GetEventsComments(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<DeviceEventComment[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/comments',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Crea una nueva instancia en comments de este modelo.
 * /Devices/:id/events/:nk/comments
 */
export async function Device_CreateEventsComments(
  id: string,
  nk: string,
  data: any = {},
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: 'POST',
    url: '/Devices/:id/events/:nk/comments',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Recuentos comments de DeviceEvent.
 * /Devices/:id/events/:nk/comments/count
 */
export async function Device_CountEventsComments(
  id: string,
  nk: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/comments/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * data consultas de DeviceEvent.
 * /Devices/:id/events/:nk/data
 */
export async function Device_GetEventsData(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<DeviceEventData[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/data',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Recuentos data de DeviceEvent.
 * /Devices/:id/events/:nk/data/count
 */
export async function Device_CountEventsData(
  id: string,
  nk: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/data/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * stateChanges consultas de DeviceEvent.
 * /Devices/:id/events/:nk/stateChanges
 */
export async function Device_GetEventsStateChanges(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<DeviceEventStateChange[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/stateChanges',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Crea una nueva instancia en stateChanges de este modelo.
 * /Devices/:id/events/:nk/stateChanges
 */
export async function Device_CreateEventsStateChanges(
  id: string,
  nk: string,
  data: any = {},
): Promise<DeviceEventStateChange> {
  return ApiFetch({
    method: 'POST',
    url: '/Devices/:id/events/:nk/stateChanges',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Recuentos stateChanges de DeviceEvent.
 * /Devices/:id/events/:nk/stateChanges/count
 */
export async function Device_CountEventsStateChanges(
  id: string,
  nk: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Devices/:id/events/:nk/stateChanges/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
