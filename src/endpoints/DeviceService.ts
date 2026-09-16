import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { DeviceConfig } from "../models/Device";
import { DeviceEvent } from "../models/DeviceEvent";
import { DeviceEventComment } from "../models/DeviceEventComment";
import { DeviceEventData } from "../models/DeviceEventData";
import { DeviceEventStateChange } from "../models/DeviceEventStateChange";

/**
 * Fetches hasOne relation config.
 * /Devices/:id/config
 */
export async function Device_GetConfig(
  id: string,
  options?: ApiRequestOptions,
): Promise<DeviceConfig> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in config of this model.
 * /Devices/:id/config
 */
export async function Device_CreateConfig(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<DeviceConfig> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Update config of this model.
 * /Devices/:id/config
 */
export async function Device_UpdateConfig(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<DeviceConfig> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for events.
 * /Devices/:id/events/:fk
 */
export async function Device_FindByIdEvents(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<DeviceEvent> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for events.
 * /Devices/:id/events/:fk
 */
export async function Device_UpdateByIdEvents(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<DeviceEvent> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/events/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for telegramChats.
 * /Devices/:id/telegramChats/rel/:fk
 */
export async function Device_LinkTelegramChats(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the telegramChats relation to an item by id.
 * /Devices/:id/telegramChats/rel/:fk
 */
export async function Device_UnlinkTelegramChats(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Devices/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries events of Device.
 * /Devices/:id/events
 */
export async function Device_GetEvents(
  id: string,
  filter?: Filter<DeviceEvent>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts events of Device.
 * /Devices/:id/events/count
 */
export async function Device_CountEvents(
  id: string,
  where?: Filter<DeviceEvent>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Restart Device, using the Command Center
 * /Devices/:id/cmdc/restart
 */
export async function Device_cmdcRestart(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/cmdc/restart",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Restart EdgeAgent module, using the Command Center
 * /Devices/:id/cmdc/modules/:name/restart
 */
export async function Device_cmdcRestartModule(
  id: string,
  name: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/cmdc/modules/:name/restart",
    routeParams: {
      id,
      name,
    },
    ...options,
  });
}
/**
 * Find a related item by id for comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_FindByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/comments/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_DestroyByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Devices/:id/events/:nk/comments/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_UpdateByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/events/:nk/comments/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for data.
 * /Devices/:id/events/:nk/data/:fk
 */
export async function Device_FindByIdEventsData(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<DeviceEventData> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/data/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for stateChanges.
 * /Devices/:id/events/:nk/stateChanges/:fk
 */
export async function Device_FindByIdEventsStateChanges(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<DeviceEventStateChange> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/stateChanges/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Queries comments of DeviceEvent.
 * /Devices/:id/events/:nk/comments
 */
export async function Device_GetEventsComments(
  id: string,
  nk: string,
  filter?: Filter<DeviceEventComment>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Creates a new instance in comments of this model.
 * /Devices/:id/events/:nk/comments
 */
export async function Device_CreateEventsComments(
  id: string,
  nk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/events/:nk/comments",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts comments of DeviceEvent.
 * /Devices/:id/events/:nk/comments/count
 */
export async function Device_CountEventsComments(
  id: string,
  nk: string,
  where?: Filter<DeviceEvent>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/comments/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries data of DeviceEvent.
 * /Devices/:id/events/:nk/data
 */
export async function Device_GetEventsData(
  id: string,
  nk: string,
  filter?: Filter<DeviceEventData>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts data of DeviceEvent.
 * /Devices/:id/events/:nk/data/count
 */
export async function Device_CountEventsData(
  id: string,
  nk: string,
  where?: Filter<DeviceEvent>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/data/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries stateChanges of DeviceEvent.
 * /Devices/:id/events/:nk/stateChanges
 */
export async function Device_GetEventsStateChanges(
  id: string,
  nk: string,
  filter?: Filter<DeviceEventStateChange>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Creates a new instance in stateChanges of this model.
 * /Devices/:id/events/:nk/stateChanges
 */
export async function Device_CreateEventsStateChanges(
  id: string,
  nk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<DeviceEventStateChange> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/events/:nk/stateChanges",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts stateChanges of DeviceEvent.
 * /Devices/:id/events/:nk/stateChanges/count
 */
export async function Device_CountEventsStateChanges(
  id: string,
  nk: string,
  where?: Filter<DeviceEvent>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Devices/:id/events/:nk/stateChanges/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
