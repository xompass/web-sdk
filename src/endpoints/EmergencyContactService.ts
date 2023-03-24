import { ApiFetch, Filter } from "../core/ApiFetch";
import { EmergencyContact } from "../models/EmergencyContact";
import { Customer } from "../models/Customer";
import { EmergencyContactCallHistory } from "../models/EmergencyContactCallHistory";
import { EventTrigger } from "../models/EventTrigger";
import { EventTriggerAssetState } from "../models/EventTriggerAssetState";
import { Log } from "../models/Log";

/**
 * Api services for the `EmergencyContact` model.
 */

/**
 * Capta la relación belongsTo customer.
 * /EmergencyContacts/:id/customer
 */
export async function EmergencyContact_GetCustomer(
  id: string
): Promise<Customer> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/customer",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para callHistory.
 * /EmergencyContacts/:id/callHistory/:fk
 */
export async function EmergencyContact_FindByIdCallHistory(
  id: string,
  fk: string
): Promise<EmergencyContactCallHistory> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/callHistory/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para eventTriggers.
 * /EmergencyContacts/:id/eventTriggers/:fk
 */
export async function EmergencyContact_FindByIdEventTriggers(
  id: string,
  fk: string
): Promise<EventTrigger> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/eventTriggers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para eventTriggers.
 * /EmergencyContacts/:id/eventTriggers/rel/:fk
 */
export async function EmergencyContact_LinkEventTriggers(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EmergencyContacts/:id/eventTriggers/rel/:fk",
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
 * /EmergencyContacts/:id/eventTriggers/rel/:fk
 */
export async function EmergencyContact_UnlinkEventTriggers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EmergencyContacts/:id/eventTriggers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación eventTriggers con un elemento por id.
 * /EmergencyContacts/:id/eventTriggers/rel/:fk
 */
export async function EmergencyContact_ExistsEventTriggers(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/EmergencyContacts/:id/eventTriggers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para eventTriggerAssetStates.
 * /EmergencyContacts/:id/eventTriggerAssetStates/:fk
 */
export async function EmergencyContact_FindByIdEventTriggerAssetStates(
  id: string,
  fk: string
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/eventTriggerAssetStates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para eventTriggerAssetStates.
 * /EmergencyContacts/:id/eventTriggerAssetStates/rel/:fk
 */
export async function EmergencyContact_LinkEventTriggerAssetStates(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EmergencyContacts/:id/eventTriggerAssetStates/rel/:fk",
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
 * Eliminar la relación eventTriggerAssetStates con un elemento por id.
 * /EmergencyContacts/:id/eventTriggerAssetStates/rel/:fk
 */
export async function EmergencyContact_UnlinkEventTriggerAssetStates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EmergencyContacts/:id/eventTriggerAssetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación eventTriggerAssetStates con un elemento por id.
 * /EmergencyContacts/:id/eventTriggerAssetStates/rel/:fk
 */
export async function EmergencyContact_ExistsEventTriggerAssetStates(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/EmergencyContacts/:id/eventTriggerAssetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EmergencyContacts/:id/trackingLogs/:fk
 */
export async function EmergencyContact_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * callHistory consultas de EmergencyContact.
 * /EmergencyContacts/:id/callHistory
 */
export async function EmergencyContact_GetCallHistory(
  id: string,
  filter: Filter<any> = {}
): Promise<EmergencyContactCallHistory[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/callHistory",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos callHistory de EmergencyContact.
 * /EmergencyContacts/:id/callHistory/count
 */
export async function EmergencyContact_CountCallHistory(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/callHistory/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * eventTriggers consultas de EmergencyContact.
 * /EmergencyContacts/:id/eventTriggers
 */
export async function EmergencyContact_GetEventTriggers(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTrigger[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/eventTriggers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventTriggers de EmergencyContact.
 * /EmergencyContacts/:id/eventTriggers/count
 */
export async function EmergencyContact_CountEventTriggers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/eventTriggers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * eventTriggerAssetStates consultas de EmergencyContact.
 * /EmergencyContacts/:id/eventTriggerAssetStates
 */
export async function EmergencyContact_GetEventTriggerAssetStates(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTriggerAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/eventTriggerAssetStates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventTriggerAssetStates de EmergencyContact.
 * /EmergencyContacts/:id/eventTriggerAssetStates/count
 */
export async function EmergencyContact_CountEventTriggerAssetStates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/eventTriggerAssetStates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EmergencyContact.
 * /EmergencyContacts/:id/trackingLogs
 */
export async function EmergencyContact_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EmergencyContact.
 * /EmergencyContacts/:id/trackingLogs/count
 */
export async function EmergencyContact_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EmergencyContacts
 */
export async function EmergencyContact_create(
  data: any = {}
): Promise<EmergencyContact> {
  return ApiFetch({
    method: "POST",
    url: "/EmergencyContacts",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EmergencyContacts/:id/exists
 */
export async function EmergencyContact_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EmergencyContacts/:id
 */
export async function EmergencyContact_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EmergencyContact> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EmergencyContacts
 */
export async function EmergencyContact_find(
  filter: Filter<any> = {}
): Promise<EmergencyContact[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EmergencyContacts/findOne
 */
export async function EmergencyContact_findOne(
  filter: Filter<any> = {}
): Promise<EmergencyContact> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EmergencyContacts/:id
 */
export async function EmergencyContact_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EmergencyContacts/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EmergencyContacts/count
 */
export async function EmergencyContact_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContacts/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
