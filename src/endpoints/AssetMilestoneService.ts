import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetMilestone } from "../models/AssetMilestone";
import { Log } from "../models/Log";

/**
 * Api services for the `AssetMilestone` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetMilestones/:id/trackingLogs/:fk
 */
export async function AssetMilestone_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de AssetMilestone.
 * /AssetMilestones/:id/trackingLogs
 */
export async function AssetMilestone_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetMilestone.
 * /AssetMilestones/:id/trackingLogs/count
 */
export async function AssetMilestone_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetMilestones
 */
export async function AssetMilestone_create(
  data: any = {}
): Promise<AssetMilestone> {
  return ApiFetch({
    method: "POST",
    url: "/AssetMilestones",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetMilestones/:id/exists
 */
export async function AssetMilestone_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetMilestones/:id
 */
export async function AssetMilestone_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetMilestone> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetMilestones
 */
export async function AssetMilestone_find(
  filter: Filter<any> = {}
): Promise<AssetMilestone[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetMilestones/findOne
 */
export async function AssetMilestone_findOne(
  filter: Filter<any> = {}
): Promise<AssetMilestone> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetMilestones/:id
 */
export async function AssetMilestone_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetMilestones/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetMilestones/count
 */
export async function AssetMilestone_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetMilestones/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
