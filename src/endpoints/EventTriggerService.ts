import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { AssetState } from "../models/AssetState";
import { EmergencyContact } from "../models/EmergencyContact";
import { Event, EventData } from "../models/Event";
import { EventComment } from "../models/EventComment";
import { EventStateChange } from "../models/EventStateChange";
import { EventTriggerAssetState } from "../models/EventTriggerAssetState";
import { EventTriggerRule } from "../models/EventTriggerRule";

/**
 * Find a related item by id for emergencyContacts.
 * /EventTriggers/:id/emergencyContacts/:fk
 */
export async function EventTrigger_FindByIdEmergencyContacts(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EmergencyContact> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/emergencyContacts/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for emergencyContacts.
 * /EventTriggers/:id/emergencyContacts/rel/:fk
 */
export async function EventTrigger_LinkEmergencyContacts(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/emergencyContacts/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the emergencyContacts relation to an item by id.
 * /EventTriggers/:id/emergencyContacts/rel/:fk
 */
export async function EventTrigger_UnlinkEmergencyContacts(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggers/:id/emergencyContacts/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for events.
 * /EventTriggers/:id/events/:fk
 */
export async function EventTrigger_FindByIdEvents(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Event> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for events.
 * /EventTriggers/:id/events/:fk
 */
export async function EventTrigger_UpdateByIdEvents(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Event> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/events/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for assetStates.
 * /EventTriggers/:id/assetStates/:fk
 */
export async function EventTrigger_FindByIdAssetStates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<AssetState> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/assetStates/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for assetStates.
 * /EventTriggers/:id/assetStates/rel/:fk
 */
export async function EventTrigger_LinkAssetStates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/assetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the assetStates relation to an item by id.
 * /EventTriggers/:id/assetStates/rel/:fk
 */
export async function EventTrigger_UnlinkAssetStates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggers/:id/assetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Check the existence of assetStates relation to an item by id.
 * /EventTriggers/:id/assetStates/rel/:fk
 */
export async function EventTrigger_ExistsAssetStates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/EventTriggers/:id/assetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for states.
 * /EventTriggers/:id/states/:fk
 */
export async function EventTrigger_FindByIdStates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/states/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for states.
 * /EventTriggers/:id/states/:fk
 */
export async function EventTrigger_UpdateByIdStates(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/states/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for rules.
 * /EventTriggers/:id/rules/:fk
 */
export async function EventTrigger_FindByIdRules(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/rules/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for rules.
 * /EventTriggers/:id/rules/:fk
 */
export async function EventTrigger_DestroyByIdRules(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggers/:id/rules/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for rules.
 * /EventTriggers/:id/rules/:fk
 */
export async function EventTrigger_UpdateByIdRules(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/rules/:fk",
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
 * /EventTriggers/:id/telegramChats/rel/:fk
 */
export async function EventTrigger_LinkTelegramChats(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/telegramChats/rel/:fk",
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
 * /EventTriggers/:id/telegramChats/rel/:fk
 */
export async function EventTrigger_UnlinkTelegramChats(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggers/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries emergencyContacts of EventTrigger.
 * /EventTriggers/:id/emergencyContacts
 */
export async function EventTrigger_GetEmergencyContacts(
  id: string,
  filter?: Filter<EmergencyContact>,
  options?: ApiRequestOptions,
): Promise<EmergencyContact[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/emergencyContacts",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts emergencyContacts of EventTrigger.
 * /EventTriggers/:id/emergencyContacts/count
 */
export async function EventTrigger_CountEmergencyContacts(
  id: string,
  where?: Filter<EmergencyContact>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/emergencyContacts/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries events of EventTrigger.
 * /EventTriggers/:id/events
 */
export async function EventTrigger_GetEvents(
  id: string,
  filter?: Filter<Event>,
  options?: ApiRequestOptions,
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts events of EventTrigger.
 * /EventTriggers/:id/events/count
 */
export async function EventTrigger_CountEvents(
  id: string,
  where?: Filter<Event>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries assetStates of EventTrigger.
 * /EventTriggers/:id/assetStates
 */
export async function EventTrigger_GetAssetStates(
  id: string,
  filter?: Filter<AssetState>,
  options?: ApiRequestOptions,
): Promise<AssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/assetStates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts assetStates of EventTrigger.
 * /EventTriggers/:id/assetStates/count
 */
export async function EventTrigger_CountAssetStates(
  id: string,
  where?: Filter<AssetState>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/assetStates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries states of EventTrigger.
 * /EventTriggers/:id/states
 */
export async function EventTrigger_GetStates(
  id: string,
  filter?: Filter<EventTriggerAssetState>,
  options?: ApiRequestOptions,
): Promise<EventTriggerAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/states",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts states of EventTrigger.
 * /EventTriggers/:id/states/count
 */
export async function EventTrigger_CountStates(
  id: string,
  where?: Filter<EventTriggerAssetState>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/states/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries rules of EventTrigger.
 * /EventTriggers/:id/rules
 */
export async function EventTrigger_GetRules(
  id: string,
  filter?: Filter<EventTriggerRule>,
  options?: ApiRequestOptions,
): Promise<EventTriggerRule[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/rules",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in rules of this model.
 * /EventTriggers/:id/rules
 */
export async function EventTrigger_CreateRules(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggers/:id/rules",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts rules of EventTrigger.
 * /EventTriggers/:id/rules/count
 */
export async function EventTrigger_CountRules(
  id: string,
  where?: Filter<EventTriggerRule>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/rules/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Close an event so the next EventTrigger data ingestion opens a new event instead of grouping
 * /EventTriggers/:id/events/:nk/close
 */
export async function EventTrigger_CloseEvents(
  id: string,
  nk: string,
  options?: ApiRequestOptions,
): Promise<Event> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggers/:id/events/:nk/close",
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
}
/**
 * Download a file within specified container
 * /EventTriggers/:id/events/:nk/download/:file
 */
export async function EventTrigger_DownloadEvents(
  id: string,
  nk: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/download/:file",
    routeParams: {
      id,
      nk,
      file,
    },
    ...options,
  });
}
/**
 * Download a file within specified container
 * /EventTriggers/:id/events/:nk/data/:fk/download
 */
export async function EventTrigger_DownloadByIdEventsData(
  id: string,
  nk: string,
  fk: string,
  file?: string,
  draw?: string,
  wm?: boolean,
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (file != null) {
    _urlParams["file"] = file;
  }
  if (draw != null) {
    _urlParams["draw"] = draw;
  }
  if (wm != null) {
    _urlParams["wm"] = wm;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/data/:fk/download",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for comments.
 * /EventTriggers/:id/events/:nk/comments/:fk
 */
export async function EventTrigger_FindByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventComment> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/comments/:fk",
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
 * /EventTriggers/:id/events/:nk/comments/:fk
 */
export async function EventTrigger_DestroyByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggers/:id/events/:nk/comments/:fk",
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
 * /EventTriggers/:id/events/:nk/comments/:fk
 */
export async function EventTrigger_UpdateByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventComment> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/events/:nk/comments/:fk",
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
 * /EventTriggers/:id/events/:nk/data/:fk
 */
export async function EventTrigger_FindByIdEventsData(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventData> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/data/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for data.
 * /EventTriggers/:id/events/:nk/data/:fk
 */
export async function EventTrigger_UpdateByIdEventsData(
  id: string,
  nk: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventData> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggers/:id/events/:nk/data/:fk",
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
 * Find a related item by id for stateChanges.
 * /EventTriggers/:id/events/:nk/stateChanges/:fk
 */
export async function EventTrigger_FindByIdEventsStateChanges(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventStateChange> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/stateChanges/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Queries comments of Event.
 * /EventTriggers/:id/events/:nk/comments
 */
export async function EventTrigger_GetEventsComments(
  id: string,
  nk: string,
  filter?: Filter<EventComment>,
  options?: ApiRequestOptions,
): Promise<EventComment[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/comments",
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
 * /EventTriggers/:id/events/:nk/comments
 */
export async function EventTrigger_CreateEventsComments(
  id: string,
  nk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventComment> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggers/:id/events/:nk/comments",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts comments of Event.
 * /EventTriggers/:id/events/:nk/comments/count
 */
export async function EventTrigger_CountEventsComments(
  id: string,
  nk: string,
  where?: Filter<Event>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/comments/count",
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
 * Queries data of Event.
 * /EventTriggers/:id/events/:nk/data
 */
export async function EventTrigger_GetEventsData(
  id: string,
  nk: string,
  filter?: Filter<EventData>,
  options?: ApiRequestOptions,
): Promise<EventData[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/data",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
}
/**
 * Counts data of Event.
 * /EventTriggers/:id/events/:nk/data/count
 */
export async function EventTrigger_CountEventsData(
  id: string,
  nk: string,
  where?: Filter<Event>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/data/count",
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
 * Queries stateChanges of Event.
 * /EventTriggers/:id/events/:nk/stateChanges
 */
export async function EventTrigger_GetEventsStateChanges(
  id: string,
  nk: string,
  filter?: Filter<EventStateChange>,
  options?: ApiRequestOptions,
): Promise<EventStateChange[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/stateChanges",
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
 * /EventTriggers/:id/events/:nk/stateChanges
 */
export async function EventTrigger_CreateEventsStateChanges(
  id: string,
  nk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventStateChange> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggers/:id/events/:nk/stateChanges",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts stateChanges of Event.
 * /EventTriggers/:id/events/:nk/stateChanges/count
 */
export async function EventTrigger_CountEventsStateChanges(
  id: string,
  nk: string,
  where?: Filter<Event>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/EventTriggers/:id/events/:nk/stateChanges/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
