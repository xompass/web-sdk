import { ApiFetch, Filter } from "../core/ApiFetch";
import { ProjectTag } from "../models/ProjectTag";
import { Log } from "../models/Log";

/**
 * Api services for the `ProjectTag` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /ProjectTags/:id/trackingLogs/:fk
 */
export async function ProjectTag_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/ProjectTags/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de ProjectTag.
 * /ProjectTags/:id/trackingLogs
 */
export async function ProjectTag_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectTags/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de ProjectTag.
 * /ProjectTags/:id/trackingLogs/count
 */
export async function ProjectTag_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectTags/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /ProjectTags
 */
export async function ProjectTag_create(data: any = {}): Promise<ProjectTag> {
  return ApiFetch({
    method: "POST",
    url: "/ProjectTags",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /ProjectTags/:id/exists
 */
export async function ProjectTag_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/ProjectTags/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /ProjectTags/:id
 */
export async function ProjectTag_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<ProjectTag> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectTags/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /ProjectTags
 */
export async function ProjectTag_find(
  filter: Filter<any> = {}
): Promise<ProjectTag[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectTags",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /ProjectTags/findOne
 */
export async function ProjectTag_findOne(
  filter: Filter<any> = {}
): Promise<ProjectTag> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectTags/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /ProjectTags/:id
 */
export async function ProjectTag_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/ProjectTags/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /ProjectTags/count
 */
export async function ProjectTag_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ProjectTags/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
