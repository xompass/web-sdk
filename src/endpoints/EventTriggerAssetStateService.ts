import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventTriggerAssetState } from "../models/EventTriggerAssetState";
import { AssetState } from "../models/AssetState";
import { EmergencyContact } from "../models/EmergencyContact";
import { Log } from "../models/Log";

/**
 * Api services for the `EventTriggerAssetState` model.
 */

/**
 * Capta la relación belongsTo assetState.
 * /EventTriggerAssetStates/:id/assetState
 */
export async function EventTriggerAssetState_GetAssetState(
  id: string
): Promise<AssetState> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/assetState",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para emergencyContacts.
 * /EventTriggerAssetStates/:id/emergencyContacts/:fk
 */
export async function EventTriggerAssetState_FindByIdEmergencyContacts(
  id: string,
  fk: string
): Promise<EmergencyContact> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/emergencyContacts/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para emergencyContacts.
 * /EventTriggerAssetStates/:id/emergencyContacts/rel/:fk
 */
export async function EventTriggerAssetState_LinkEmergencyContacts(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerAssetStates/:id/emergencyContacts/rel/:fk",
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
 * Eliminar la relación emergencyContacts con un elemento por id.
 * /EventTriggerAssetStates/:id/emergencyContacts/rel/:fk
 */
export async function EventTriggerAssetState_UnlinkEmergencyContacts(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerAssetStates/:id/emergencyContacts/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para rules.
 * /EventTriggerAssetStates/:id/rules/:fk
 */
export async function EventTriggerAssetState_FindByIdRules(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/rules/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para rules.
 * /EventTriggerAssetStates/:id/rules/:fk
 */
export async function EventTriggerAssetState_DestroyByIdRules(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerAssetStates/:id/rules/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para rules.
 * /EventTriggerAssetStates/:id/rules/:fk
 */
export async function EventTriggerAssetState_UpdateByIdRules(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerAssetStates/:id/rules/:fk",
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
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventTriggerAssetStates/:id/trackingLogs/:fk
 */
export async function EventTriggerAssetState_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * emergencyContacts consultas de EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/emergencyContacts
 */
export async function EventTriggerAssetState_GetEmergencyContacts(
  id: string,
  filter: Filter<any> = {}
): Promise<EmergencyContact[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/emergencyContacts",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos emergencyContacts de EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/emergencyContacts/count
 */
export async function EventTriggerAssetState_CountEmergencyContacts(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/emergencyContacts/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * rules consultas de EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/rules
 */
export async function EventTriggerAssetState_GetRules(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/rules",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en rules de este modelo.
 * /EventTriggerAssetStates/:id/rules
 */
export async function EventTriggerAssetState_CreateRules(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerAssetStates/:id/rules",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos rules de EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/rules/count
 */
export async function EventTriggerAssetState_CountRules(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/rules/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/trackingLogs
 */
export async function EventTriggerAssetState_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/trackingLogs/count
 */
export async function EventTriggerAssetState_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventTriggerAssetStates
 */
export async function EventTriggerAssetState_create(
  data: any = {}
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerAssetStates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventTriggerAssetStates/:id/exists
 */
export async function EventTriggerAssetState_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventTriggerAssetStates/:id
 */
export async function EventTriggerAssetState_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTriggerAssetState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventTriggerAssetStates
 */
export async function EventTriggerAssetState_find(
  filter: Filter<any> = {}
): Promise<EventTriggerAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventTriggerAssetStates/findOne
 */
export async function EventTriggerAssetState_findOne(
  filter: Filter<any> = {}
): Promise<EventTriggerAssetState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventTriggerAssetStates/:id
 */
export async function EventTriggerAssetState_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerAssetStates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventTriggerAssetStates/count
 */
export async function EventTriggerAssetState_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
