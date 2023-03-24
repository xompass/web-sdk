import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventGroupTemplate } from "../models/EventGroupTemplate";
import { Log } from "../models/Log";

/**
 * Api services for the `EventGroupTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventGroupTemplates/:id/trackingLogs/:fk
 */
export async function EventGroupTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de EventGroupTemplate.
 * /EventGroupTemplates/:id/trackingLogs
 */
export async function EventGroupTemplate_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventGroupTemplate.
 * /EventGroupTemplates/:id/trackingLogs/count
 */
export async function EventGroupTemplate_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventGroupTemplates
 */
export async function EventGroupTemplate_create(
  data: any = {}
): Promise<EventGroupTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/EventGroupTemplates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventGroupTemplates/:id/exists
 */
export async function EventGroupTemplate_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventGroupTemplates/:id
 */
export async function EventGroupTemplate_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventGroupTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventGroupTemplates
 */
export async function EventGroupTemplate_find(
  filter: Filter<any> = {}
): Promise<EventGroupTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventGroupTemplates/findOne
 */
export async function EventGroupTemplate_findOne(
  filter: Filter<any> = {}
): Promise<EventGroupTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventGroupTemplates/:id
 */
export async function EventGroupTemplate_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventGroupTemplates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventGroupTemplates/count
 */
export async function EventGroupTemplate_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventGroupTemplates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
