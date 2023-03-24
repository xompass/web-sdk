import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetStaff } from "../models/AssetStaff";
import { Log } from "../models/Log";

/**
 * Api services for the `AssetStaff` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetStaffs/:id/trackingLogs/:fk
 */
export async function AssetStaff_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de AssetStaff.
 * /AssetStaffs/:id/trackingLogs
 */
export async function AssetStaff_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetStaff.
 * /AssetStaffs/:id/trackingLogs/count
 */
export async function AssetStaff_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetStaffs
 */
export async function AssetStaff_create(data: any = {}): Promise<AssetStaff> {
  return ApiFetch({
    method: "POST",
    url: "/AssetStaffs",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetStaffs/:id/exists
 */
export async function AssetStaff_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetStaffs/:id
 */
export async function AssetStaff_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetStaff> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetStaffs
 */
export async function AssetStaff_find(
  filter: Filter<any> = {}
): Promise<AssetStaff[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetStaffs/findOne
 */
export async function AssetStaff_findOne(
  filter: Filter<any> = {}
): Promise<AssetStaff> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetStaffs/:id
 */
export async function AssetStaff_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetStaffs/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetStaffs/count
 */
export async function AssetStaff_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStaffs/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
