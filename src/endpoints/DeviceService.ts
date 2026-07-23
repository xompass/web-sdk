import { ApiFetch, Filter } from "../core/ApiFetch";
import { DeviceConfig } from "../models/Device";
import { DeviceEvent } from "../models/DeviceEvent";
import { DeviceEventComment } from "../models/DeviceEventComment";
import { DeviceEventData } from "../models/DeviceEventData";
import { DeviceEventStateChange } from "../models/DeviceEventStateChange";

/**
 * Fetches hasOne relation config.
 * /Devices/:id/config
 */
export async function Device_GetConfig(id: string): Promise<DeviceConfig> {
  return ApiFetch({
    method: "GET",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in config of this model.
 * /Devices/:id/config
 */
export async function Device_CreateConfig(
  id: string,
  data?: any,
): Promise<DeviceConfig> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Update config of this model.
 * /Devices/:id/config
 */
export async function Device_UpdateConfig(
  id: string,
  data?: any,
): Promise<DeviceConfig> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/config",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Find a related item by id for events.
 * /Devices/:id/events/:fk
 */
export async function Device_FindByIdEvents(
  id: string,
  fk: string,
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
 * Update a related item by id for events.
 * /Devices/:id/events/:fk
 */
export async function Device_UpdateByIdEvents(
  id: string,
  fk: string,
  data?: any,
): Promise<DeviceEvent> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/events/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
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
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Devices/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Remove the telegramChats relation to an item by id.
 * /Devices/:id/telegramChats/rel/:fk
 */
export async function Device_UnlinkTelegramChats(
  id: string,
  fk: string,
): Promise<void> {
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
 * Queries events of Device.
 * /Devices/:id/events
 */
export async function Device_GetEvents(
  id: string,
  filter?: Filter<DeviceEvent>,
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
 * Counts events of Device.
 * /Devices/:id/events/count
 */
export async function Device_CountEvents(
  id: string,
  where?: Filter<DeviceEvent>["where"],
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
    method: "POST",
    url: "/Devices/:id/cmdc/modules/:name/restart",
    routeParams: {
      id,
      name,
    },
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
 * Delete a related item by id for comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_DestroyByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
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
 * Update a related item by id for comments.
 * /Devices/:id/events/:nk/comments/:fk
 */
export async function Device_UpdateByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  data?: any,
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
 * Find a related item by id for stateChanges.
 * /Devices/:id/events/:nk/stateChanges/:fk
 */
export async function Device_FindByIdEventsStateChanges(
  id: string,
  nk: string,
  fk: string,
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
 * Queries comments of DeviceEvent.
 * /Devices/:id/events/:nk/comments
 */
export async function Device_GetEventsComments(
  id: string,
  nk: string,
  filter?: Filter<DeviceEventComment>,
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
 * Creates a new instance in comments of this model.
 * /Devices/:id/events/:nk/comments
 */
export async function Device_CreateEventsComments(
  id: string,
  nk: string,
  data?: any,
): Promise<DeviceEventComment> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/events/:nk/comments",
    routeParams: {
      id,
      nk,
    },
    body: data,
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
 * Queries data of DeviceEvent.
 * /Devices/:id/events/:nk/data
 */
export async function Device_GetEventsData(
  id: string,
  nk: string,
  filter?: Filter<DeviceEventData>,
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
 * Counts data of DeviceEvent.
 * /Devices/:id/events/:nk/data/count
 */
export async function Device_CountEventsData(
  id: string,
  nk: string,
  where?: Filter<DeviceEvent>["where"],
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
 * Queries stateChanges of DeviceEvent.
 * /Devices/:id/events/:nk/stateChanges
 */
export async function Device_GetEventsStateChanges(
  id: string,
  nk: string,
  filter?: Filter<DeviceEventStateChange>,
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
 * Creates a new instance in stateChanges of this model.
 * /Devices/:id/events/:nk/stateChanges
 */
export async function Device_CreateEventsStateChanges(
  id: string,
  nk: string,
  data?: any,
): Promise<DeviceEventStateChange> {
  return ApiFetch({
    method: "POST",
    url: "/Devices/:id/events/:nk/stateChanges",
    routeParams: {
      id,
      nk,
    },
    body: data,
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
