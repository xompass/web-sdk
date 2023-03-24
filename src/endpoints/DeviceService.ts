import { ApiFetch, Filter } from "../core/ApiFetch";
import { Device } from "../models/Device";
import { EdgeAgent } from "../models/EdgeAgent";
import { Log } from "../models/Log";
import { TelegramChat } from "../models/TelegramChat";
import { DeviceEventComment } from "../models/DeviceEventComment";
import { DeviceEventData } from "../models/DeviceEventData";
import { DeviceEventStateChange } from "../models/DeviceEventStateChange";
import { DeviceEvent } from "../models/DeviceEvent";

/**
 * Api services for the `Device` model.
 */

/**
 * Capta la relación hasOne config.
 * /Devices/:id/config
 */
export async function Device_GetConfig(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/config",
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
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar config de este modelo.
 * /Devices/:id/config
 */
export async function Device_UpdateConfig(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime config de este modelo.
 * /Devices/:id/config
 */
export async function Device_DestroyConfig(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para events.
 * /Devices/:id/events/:fk
 */
export async function Device_FindByIdEvents(
  id: string,
  fk: string
): Promise<DeviceEvent> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:fk",
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
  data: any = {}
): Promise<DeviceEvent> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/events/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para edgeAgents.
 * /Devices/:id/edgeAgents/:fk
 */
export async function Device_FindByIdEdgeAgents(
  id: string,
  fk: string
): Promise<EdgeAgent> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/edgeAgents/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Devices/:id/trackingLogs/:fk
 */
export async function Device_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para telegramChats.
 * /Devices/:id/telegramChats/:fk
 */
export async function Device_FindByIdTelegramChats(
  id: string,
  fk: string
): Promise<TelegramChat> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/telegramChats/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para telegramChats.
 * /Devices/:id/telegramChats/rel/:fk
 */
export async function Device_LinkTelegramChats(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación telegramChats con un elemento por id.
 * /Devices/:id/telegramChats/rel/:fk
 */
export async function Device_UnlinkTelegramChats(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Devices/:id/telegramChats/rel/:fk",
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
  filter: Filter<any> = {}
): Promise<DeviceEvent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events",
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
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * edgeAgents consultas de Device.
 * /Devices/:id/edgeAgents
 */
export async function Device_GetEdgeAgents(
  id: string,
  filter: Filter<any> = {}
): Promise<EdgeAgent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/edgeAgents",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos edgeAgents de Device.
 * /Devices/:id/edgeAgents/count
 */
export async function Device_CountEdgeAgents(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/edgeAgents/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Device.
 * /Devices/:id/trackingLogs
 */
export async function Device_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Device.
 * /Devices/:id/trackingLogs/count
 */
export async function Device_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * telegramChats consultas de Device.
 * /Devices/:id/telegramChats
 */
export async function Device_GetTelegramChats(
  id: string,
  filter: Filter<any> = {}
): Promise<TelegramChat[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/telegramChats",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos telegramChats de Device.
 * /Devices/:id/telegramChats/count
 */
export async function Device_CountTelegramChats(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/telegramChats/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Devices
 */
export async function Device_create(data: any = {}): Promise<Device> {
  return ApiFetch({
    method: "POST",
    url: "/Devices",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Devices/:id/exists
 */
export async function Device_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Devices/:id
 */
export async function Device_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Device> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Devices
 */
export async function Device_find(filter: Filter<any> = {}): Promise<Device[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Devices/findOne
 */
export async function Device_findOne(
  filter: Filter<any> = {}
): Promise<Device> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Devices/:id
 */
export async function Device_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Devices/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Devices/count
 */
export async function Device_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Restart Device, using the Command Center
 * /Devices/:id/cmdc/restart
 */
export async function Device_cmdcRestart(id: string): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/cmdc/restart",
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
  name: string
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/cmdc/modules/:name/restart",
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
  fk: string
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/comments/:fk",
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
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Devices/:id/events/:nk/comments/:fk",
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
  data: any = {}
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/events/:nk/comments/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para data.
 * /Devices/:id/events/:nk/data/:fk
 */
export async function Device_FindByIdEventsData(
  id: string,
  nk: string,
  fk: string
): Promise<DeviceEventData> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/data/:fk",
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
  fk: string
): Promise<DeviceEventStateChange> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/stateChanges/:fk",
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
  filter: Filter<any> = {}
): Promise<DeviceEventComment[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/comments",
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
  data: any = {}
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/events/:nk/comments",
    routeParams: {
      id,
      nk,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos comments de DeviceEvent.
 * /Devices/:id/events/:nk/comments/count
 */
export async function Device_CountEventsComments(
  id: string,
  nk: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/comments/count",
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
  filter: Filter<any> = {}
): Promise<DeviceEventData[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/data",
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
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/data/count",
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
  filter: Filter<any> = {}
): Promise<DeviceEventStateChange[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/stateChanges",
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
  data: any = {}
): Promise<DeviceEventStateChange> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/events/:nk/stateChanges",
    routeParams: {
      id,
      nk,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos stateChanges de DeviceEvent.
 * /Devices/:id/events/:nk/stateChanges/count
 */
export async function Device_CountEventsStateChanges(
  id: string,
  nk: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/stateChanges/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
