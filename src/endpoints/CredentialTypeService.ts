import { ApiFetch, Filter } from "../core/ApiFetch";
import { CredentialType } from "../models/CredentialType";
import { Log } from "../models/Log";

/**
 * Api services for the `CredentialType` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /CredentialTypes/:id/trackingLogs/:fk
 */
export async function CredentialType_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de CredentialType.
 * /CredentialTypes/:id/trackingLogs
 */
export async function CredentialType_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de CredentialType.
 * /CredentialTypes/:id/trackingLogs/count
 */
export async function CredentialType_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /CredentialTypes
 */
export async function CredentialType_create(
  data: any = {}
): Promise<CredentialType> {
  return ApiFetch({
    method: "POST",
    url: "/CredentialTypes",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /CredentialTypes/:id/exists
 */
export async function CredentialType_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /CredentialTypes/:id
 */
export async function CredentialType_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<CredentialType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /CredentialTypes
 */
export async function CredentialType_find(
  filter: Filter<any> = {}
): Promise<CredentialType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /CredentialTypes/findOne
 */
export async function CredentialType_findOne(
  filter: Filter<any> = {}
): Promise<CredentialType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /CredentialTypes/:id
 */
export async function CredentialType_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/CredentialTypes/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /CredentialTypes/count
 */
export async function CredentialType_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CredentialTypes/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
