import { ApiFetch, Filter } from "../core/ApiFetch";
import { TelegramChat } from "../models/TelegramChat";
import { Log } from "../models/Log";
import { Device } from "../models/Device";
import { EdgeAgent } from "../models/EdgeAgent";
import { EventTrigger } from "../models/EventTrigger";

/**
 * Api services for the `TelegramChat` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /TelegramChats/:id/trackingLogs/:fk
 */
export async function TelegramChat_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para devices.
 * /TelegramChats/:id/devices/:fk
 */
export async function TelegramChat_FindByIdDevices(
  id: string,
  fk: string
): Promise<Device> {
  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/devices/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para devices.
 * /TelegramChats/:id/devices/rel/:fk
 */
export async function TelegramChat_LinkDevices(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/TelegramChats/:id/devices/rel/:fk",
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
 * Eliminar la relación devices con un elemento por id.
 * /TelegramChats/:id/devices/rel/:fk
 */
export async function TelegramChat_UnlinkDevices(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TelegramChats/:id/devices/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación devices con un elemento por id.
 * /TelegramChats/:id/devices/rel/:fk
 */
export async function TelegramChat_ExistsDevices(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/TelegramChats/:id/devices/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para edgeAgents.
 * /TelegramChats/:id/edgeAgents/:fk
 */
export async function TelegramChat_FindByIdEdgeAgents(
  id: string,
  fk: string
): Promise<EdgeAgent> {
  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/edgeAgents/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para edgeAgents.
 * /TelegramChats/:id/edgeAgents/rel/:fk
 */
export async function TelegramChat_LinkEdgeAgents(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/TelegramChats/:id/edgeAgents/rel/:fk",
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
 * Eliminar la relación edgeAgents con un elemento por id.
 * /TelegramChats/:id/edgeAgents/rel/:fk
 */
export async function TelegramChat_UnlinkEdgeAgents(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TelegramChats/:id/edgeAgents/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación edgeAgents con un elemento por id.
 * /TelegramChats/:id/edgeAgents/rel/:fk
 */
export async function TelegramChat_ExistsEdgeAgents(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/TelegramChats/:id/edgeAgents/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para eventTriggers.
 * /TelegramChats/:id/eventTriggers/:fk
 */
export async function TelegramChat_FindByIdEventTriggers(
  id: string,
  fk: string
): Promise<EventTrigger> {
  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/eventTriggers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para eventTriggers.
 * /TelegramChats/:id/eventTriggers/rel/:fk
 */
export async function TelegramChat_LinkEventTriggers(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/TelegramChats/:id/eventTriggers/rel/:fk",
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
 * Eliminar la relación eventTriggers con un elemento por id.
 * /TelegramChats/:id/eventTriggers/rel/:fk
 */
export async function TelegramChat_UnlinkEventTriggers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TelegramChats/:id/eventTriggers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación eventTriggers con un elemento por id.
 * /TelegramChats/:id/eventTriggers/rel/:fk
 */
export async function TelegramChat_ExistsEventTriggers(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/TelegramChats/:id/eventTriggers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de TelegramChat.
 * /TelegramChats/:id/trackingLogs
 */
export async function TelegramChat_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de TelegramChat.
 * /TelegramChats/:id/trackingLogs/count
 */
export async function TelegramChat_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * devices consultas de TelegramChat.
 * /TelegramChats/:id/devices
 */
export async function TelegramChat_GetDevices(
  id: string,
  filter: Filter<any> = {}
): Promise<Device[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/devices",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos devices de TelegramChat.
 * /TelegramChats/:id/devices/count
 */
export async function TelegramChat_CountDevices(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/devices/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * edgeAgents consultas de TelegramChat.
 * /TelegramChats/:id/edgeAgents
 */
export async function TelegramChat_GetEdgeAgents(
  id: string,
  filter: Filter<any> = {}
): Promise<EdgeAgent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/edgeAgents",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos edgeAgents de TelegramChat.
 * /TelegramChats/:id/edgeAgents/count
 */
export async function TelegramChat_CountEdgeAgents(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/edgeAgents/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * eventTriggers consultas de TelegramChat.
 * /TelegramChats/:id/eventTriggers
 */
export async function TelegramChat_GetEventTriggers(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTrigger[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/eventTriggers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventTriggers de TelegramChat.
 * /TelegramChats/:id/eventTriggers/count
 */
export async function TelegramChat_CountEventTriggers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/eventTriggers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /TelegramChats
 */
export async function TelegramChat_create(
  data: any = {}
): Promise<TelegramChat> {
  return ApiFetch({
    method: "POST",
    url: "/TelegramChats",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /TelegramChats/:id/exists
 */
export async function TelegramChat_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /TelegramChats/:id
 */
export async function TelegramChat_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<TelegramChat> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /TelegramChats
 */
export async function TelegramChat_find(
  filter: Filter<any> = {}
): Promise<TelegramChat[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /TelegramChats/findOne
 */
export async function TelegramChat_findOne(
  filter: Filter<any> = {}
): Promise<TelegramChat> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /TelegramChats/:id
 */
export async function TelegramChat_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TelegramChats/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /TelegramChats/count
 */
export async function TelegramChat_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TelegramChats/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
