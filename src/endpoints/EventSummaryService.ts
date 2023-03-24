import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventSummary } from "../models/EventSummary";
import { Event } from "../models/Event";
import { Log } from "../models/Log";

/**
 * Api services for the `EventSummary` model.
 */

/**
 * Buscar un elemento relacionado por id para events.
 * /EventSummaries/:id/events/:fk
 */
export async function EventSummary_FindByIdEvents(
  id: string,
  fk: string
): Promise<Event> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id/events/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventSummaries/:id/trackingLogs/:fk
 */
export async function EventSummary_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * events consultas de EventSummary.
 * /EventSummaries/:id/events
 */
export async function EventSummary_GetEvents(
  id: string,
  filter: Filter<any> = {}
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id/events",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos events de EventSummary.
 * /EventSummaries/:id/events/count
 */
export async function EventSummary_CountEvents(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id/events/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EventSummary.
 * /EventSummaries/:id/trackingLogs
 */
export async function EventSummary_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventSummary.
 * /EventSummaries/:id/trackingLogs/count
 */
export async function EventSummary_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventSummaries
 */
export async function EventSummary_create(
  data: any = {}
): Promise<EventSummary> {
  return ApiFetch({
    method: "POST",
    url: "/EventSummaries",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventSummaries/:id/exists
 */
export async function EventSummary_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventSummaries/:id
 */
export async function EventSummary_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventSummary> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventSummaries
 */
export async function EventSummary_find(
  filter: Filter<any> = {}
): Promise<EventSummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventSummaries/findOne
 */
export async function EventSummary_findOne(
  filter: Filter<any> = {}
): Promise<EventSummary> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventSummaries/:id
 */
export async function EventSummary_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventSummaries/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventSummaries/count
 */
export async function EventSummary_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventSummaries/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Generate summary information (using related events)
 * /EventSummaries/:id/generate
 */
export async function EventSummary_generateSummary(
  id: string,
  force: boolean,
  minimalResponse: boolean
): Promise<EventSummary> {
  const _urlParams: any = {};
  if (force != null) {
    _urlParams["force"] = force;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "POST",
    url: "/EventSummaries/:id/generate",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
