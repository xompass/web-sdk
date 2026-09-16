import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { Log } from "../models/Log";

/**
 * Find a related item by id for trackingLogs.
 * /Events/:id/trackingLogs/:fk
 */
export async function Event_FindByIdTrackingLogs(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Events/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries trackingLogs of Event.
 * /Events/:id/trackingLogs
 */
export async function Event_GetTrackingLogs(
  id: string,
  filter?: Filter<Log>,
  options?: ApiRequestOptions,
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Events/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts trackingLogs of Event.
 * /Events/:id/trackingLogs/count
 */
export async function Event_CountTrackingLogs(
  id: string,
  where?: Filter<Log>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Events/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
