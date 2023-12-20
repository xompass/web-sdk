import { ApiFetch, Filter } from '../core/ApiFetch';
import { EmergencyContact } from '../models/EmergencyContact';
import { Event } from '../models/Event';
import { AssetState } from '../models/AssetState';
import { EventTriggerAssetState } from '../models/EventTriggerAssetState';
import { EventTriggerRule } from '../models/EventTriggerRule';
import { EventComment } from '../models/EventComment';
import { EventData } from '../models/Event';
import { EventStateChange } from '../models/EventStateChange';

/**
 * Api services for the `EventTrigger` model.
 */

/**
 * Buscar un elemento relacionado por id para emergencyContacts.
 * /EventTriggers/:id/emergencyContacts/:fk
 */
export async function EventTrigger_FindByIdEmergencyContacts(
  id: string,
  fk: string,
): Promise<EmergencyContact> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/emergencyContacts/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para emergencyContacts.
 * /EventTriggers/:id/emergencyContacts/rel/:fk
 */
export async function EventTrigger_LinkEmergencyContacts(
  id: string,
  fk: string,
  data: any = {},
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/emergencyContacts/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación emergencyContacts con un elemento por id.
 * /EventTriggers/:id/emergencyContacts/rel/:fk
 */
export async function EventTrigger_UnlinkEmergencyContacts(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggers/:id/emergencyContacts/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para events.
 * /EventTriggers/:id/events/:fk
 */
export async function EventTrigger_FindByIdEvents(
  id: string,
  fk: string,
): Promise<Event> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para events.
 * /EventTriggers/:id/events/:fk
 */
export async function EventTrigger_UpdateByIdEvents(
  id: string,
  fk: string,
  data: any = {},
): Promise<Event> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/events/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para assetStates.
 * /EventTriggers/:id/assetStates/:fk
 */
export async function EventTrigger_FindByIdAssetStates(
  id: string,
  fk: string,
): Promise<AssetState> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/assetStates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assetStates.
 * /EventTriggers/:id/assetStates/rel/:fk
 */
export async function EventTrigger_LinkAssetStates(
  id: string,
  fk: string,
  data: any = {},
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/assetStates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación assetStates con un elemento por id.
 * /EventTriggers/:id/assetStates/rel/:fk
 */
export async function EventTrigger_UnlinkAssetStates(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggers/:id/assetStates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assetStates con un elemento por id.
 * /EventTriggers/:id/assetStates/rel/:fk
 */
export async function EventTrigger_ExistsAssetStates(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/EventTriggers/:id/assetStates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para states.
 * /EventTriggers/:id/states/:fk
 */
export async function EventTrigger_FindByIdStates(
  id: string,
  fk: string,
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/states/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para states.
 * /EventTriggers/:id/states/:fk
 */
export async function EventTrigger_UpdateByIdStates(
  id: string,
  fk: string,
  data: any = {},
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/states/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para rules.
 * /EventTriggers/:id/rules/:fk
 */
export async function EventTrigger_FindByIdRules(
  id: string,
  fk: string,
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/rules/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para rules.
 * /EventTriggers/:id/rules/:fk
 */
export async function EventTrigger_DestroyByIdRules(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggers/:id/rules/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para rules.
 * /EventTriggers/:id/rules/:fk
 */
export async function EventTrigger_UpdateByIdRules(
  id: string,
  fk: string,
  data: any = {},
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/rules/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Añadir un elemento relacionado por id para telegramChats.
 * /EventTriggers/:id/telegramChats/rel/:fk
 */
export async function EventTrigger_LinkTelegramChats(
  id: string,
  fk: string,
  data: any = {},
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/telegramChats/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación telegramChats con un elemento por id.
 * /EventTriggers/:id/telegramChats/rel/:fk
 */
export async function EventTrigger_UnlinkTelegramChats(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggers/:id/telegramChats/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * emergencyContacts consultas de EventTrigger.
 * /EventTriggers/:id/emergencyContacts
 */
export async function EventTrigger_GetEmergencyContacts(
  id: string,
  filter: Filter<any> = {},
): Promise<EmergencyContact[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/emergencyContacts',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos emergencyContacts de EventTrigger.
 * /EventTriggers/:id/emergencyContacts/count
 */
export async function EventTrigger_CountEmergencyContacts(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/emergencyContacts/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * events consultas de EventTrigger.
 * /EventTriggers/:id/events
 */
export async function EventTrigger_GetEvents(
  id: string,
  filter: Filter<any> = {},
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos events de EventTrigger.
 * /EventTriggers/:id/events/count
 */
export async function EventTrigger_CountEvents(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assetStates consultas de EventTrigger.
 * /EventTriggers/:id/assetStates
 */
export async function EventTrigger_GetAssetStates(
  id: string,
  filter: Filter<any> = {},
): Promise<AssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/assetStates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assetStates de EventTrigger.
 * /EventTriggers/:id/assetStates/count
 */
export async function EventTrigger_CountAssetStates(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/assetStates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * states consultas de EventTrigger.
 * /EventTriggers/:id/states
 */
export async function EventTrigger_GetStates(
  id: string,
  filter: Filter<any> = {},
): Promise<EventTriggerAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/states',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos states de EventTrigger.
 * /EventTriggers/:id/states/count
 */
export async function EventTrigger_CountStates(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/states/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * rules consultas de EventTrigger.
 * /EventTriggers/:id/rules
 */
export async function EventTrigger_GetRules(
  id: string,
  filter: Filter<any> = {},
): Promise<EventTriggerRule[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/rules',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en rules de este modelo.
 * /EventTriggers/:id/rules
 */
export async function EventTrigger_CreateRules(
  id: string,
  data: any = {},
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: 'POST',
    url: '/EventTriggers/:id/rules',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos rules de EventTrigger.
 * /EventTriggers/:id/rules/count
 */
export async function EventTrigger_CountRules(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/rules/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
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
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:nk/download/:file',
    routeParams: {
      id,
      nk,
      file,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para comments.
 * /EventTriggers/:id/events/:nk/comments/:fk
 */
export async function EventTrigger_FindByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
): Promise<EventComment> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:nk/comments/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para comments.
 * /EventTriggers/:id/events/:nk/comments/:fk
 */
export async function EventTrigger_DestroyByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggers/:id/events/:nk/comments/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para comments.
 * /EventTriggers/:id/events/:nk/comments/:fk
 */
export async function EventTrigger_UpdateByIdEventsComments(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventComment> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/events/:nk/comments/:fk',
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
 * /EventTriggers/:id/events/:nk/data/:fk
 */
export async function EventTrigger_FindByIdEventsData(
  id: string,
  nk: string,
  fk: string,
): Promise<EventData> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:nk/data/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para data.
 * /EventTriggers/:id/events/:nk/data/:fk
 */
export async function EventTrigger_UpdateByIdEventsData(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventData> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggers/:id/events/:nk/data/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para stateChanges.
 * /EventTriggers/:id/events/:nk/stateChanges/:fk
 */
export async function EventTrigger_FindByIdEventsStateChanges(
  id: string,
  nk: string,
  fk: string,
): Promise<EventStateChange> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:nk/stateChanges/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * comments consultas de Event.
 * /EventTriggers/:id/events/:nk/comments
 */
export async function EventTrigger_GetEventsComments(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<EventComment[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:nk/comments',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Crea una nueva instancia en comments de este modelo.
 * /EventTriggers/:id/events/:nk/comments
 */
export async function EventTrigger_CreateEventsComments(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventComment> {
  return ApiFetch({
    method: 'POST',
    url: '/EventTriggers/:id/events/:nk/comments',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Recuentos comments de Event.
 * /EventTriggers/:id/events/:nk/comments/count
 */
export async function EventTrigger_CountEventsComments(
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
    url: '/EventTriggers/:id/events/:nk/comments/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * data consultas de Event.
 * /EventTriggers/:id/events/:nk/data
 */
export async function EventTrigger_GetEventsData(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<EventData[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:nk/data',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Recuentos data de Event.
 * /EventTriggers/:id/events/:nk/data/count
 */
export async function EventTrigger_CountEventsData(
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
    url: '/EventTriggers/:id/events/:nk/data/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * stateChanges consultas de Event.
 * /EventTriggers/:id/events/:nk/stateChanges
 */
export async function EventTrigger_GetEventsStateChanges(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<EventStateChange[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggers/:id/events/:nk/stateChanges',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Crea una nueva instancia en stateChanges de este modelo.
 * /EventTriggers/:id/events/:nk/stateChanges
 */
export async function EventTrigger_CreateEventsStateChanges(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventStateChange> {
  return ApiFetch({
    method: 'POST',
    url: '/EventTriggers/:id/events/:nk/stateChanges',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Recuentos stateChanges de Event.
 * /EventTriggers/:id/events/:nk/stateChanges/count
 */
export async function EventTrigger_CountEventsStateChanges(
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
    url: '/EventTriggers/:id/events/:nk/stateChanges/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
