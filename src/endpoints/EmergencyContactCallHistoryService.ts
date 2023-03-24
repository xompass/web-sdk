import { ApiFetch, Filter } from "../core/ApiFetch";
import { EmergencyContactCallHistory } from "../models/EmergencyContactCallHistory";
import { EmergencyContact } from "../models/EmergencyContact";
import { Log } from "../models/Log";

/**
 * Api services for the `EmergencyContactCallHistory` model.
 */

/**
 * Capta la relación belongsTo emergencyContact.
 * /EmergencyContactCallHistory/:id/emergencyContact
 */
export async function EmergencyContactCallHistory_GetEmergencyContact(
  id: string
): Promise<EmergencyContact> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/:id/emergencyContact",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EmergencyContactCallHistory/:id/trackingLogs/:fk
 */
export async function EmergencyContactCallHistory_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de EmergencyContactCallHistory.
 * /EmergencyContactCallHistory/:id/trackingLogs
 */
export async function EmergencyContactCallHistory_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EmergencyContactCallHistory.
 * /EmergencyContactCallHistory/:id/trackingLogs/count
 */
export async function EmergencyContactCallHistory_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EmergencyContactCallHistory
 */
export async function EmergencyContactCallHistory_create(
  data: any = {}
): Promise<EmergencyContactCallHistory> {
  return ApiFetch({
    method: "POST",
    url: "/EmergencyContactCallHistory",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EmergencyContactCallHistory/:id/exists
 */
export async function EmergencyContactCallHistory_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EmergencyContactCallHistory/:id
 */
export async function EmergencyContactCallHistory_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EmergencyContactCallHistory> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EmergencyContactCallHistory
 */
export async function EmergencyContactCallHistory_find(
  filter: Filter<any> = {}
): Promise<EmergencyContactCallHistory[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EmergencyContactCallHistory/findOne
 */
export async function EmergencyContactCallHistory_findOne(
  filter: Filter<any> = {}
): Promise<EmergencyContactCallHistory> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EmergencyContactCallHistory/:id
 */
export async function EmergencyContactCallHistory_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EmergencyContactCallHistory/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EmergencyContactCallHistory/count
 */
export async function EmergencyContactCallHistory_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get an existing Twilio record
 * /EmergencyContactCallHistory/:id/record
 */
export async function EmergencyContactCallHistory_getRecord(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/EmergencyContactCallHistory/:id/record",
    routeParams: {
      id,
    },
  });
}
