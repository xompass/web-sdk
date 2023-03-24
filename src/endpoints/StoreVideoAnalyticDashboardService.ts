import { ApiFetch, Filter } from "../core/ApiFetch";
import { StoreVideoAnalyticDashboard } from "../models/StoreVideoAnalyticDashboard";
import { Log } from "../models/Log";
import { Manager } from "../models/Manager";

/**
 * Api services for the `StoreVideoAnalyticDashboard` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /StoreVideoAnalyticDashboards/:id/trackingLogs/:fk
 */
export async function StoreVideoAnalyticDashboard_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /StoreVideoAnalyticDashboards/:id/managers/:fk
 */
export async function StoreVideoAnalyticDashboard_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación hasOne container.
 * /StoreVideoAnalyticDashboards/:id/container
 */
export async function StoreVideoAnalyticDashboard_GetContainer(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en container de este modelo.
 * /StoreVideoAnalyticDashboards/:id/container
 */
export async function StoreVideoAnalyticDashboard_CreateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/StoreVideoAnalyticDashboards/:id/container",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar container de este modelo.
 * /StoreVideoAnalyticDashboards/:id/container
 */
export async function StoreVideoAnalyticDashboard_UpdateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/StoreVideoAnalyticDashboards/:id/container",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime container de este modelo.
 * /StoreVideoAnalyticDashboards/:id/container
 */
export async function StoreVideoAnalyticDashboard_DestroyContainer(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/StoreVideoAnalyticDashboards/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de StoreVideoAnalyticDashboard.
 * /StoreVideoAnalyticDashboards/:id/trackingLogs
 */
export async function StoreVideoAnalyticDashboard_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de StoreVideoAnalyticDashboard.
 * /StoreVideoAnalyticDashboards/:id/trackingLogs/count
 */
export async function StoreVideoAnalyticDashboard_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de StoreVideoAnalyticDashboard.
 * /StoreVideoAnalyticDashboards/:id/managers
 */
export async function StoreVideoAnalyticDashboard_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de StoreVideoAnalyticDashboard.
 * /StoreVideoAnalyticDashboards/:id/managers/count
 */
export async function StoreVideoAnalyticDashboard_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /StoreVideoAnalyticDashboards
 */
export async function StoreVideoAnalyticDashboard_create(
  data: any = {}
): Promise<StoreVideoAnalyticDashboard> {
  return ApiFetch({
    method: "POST",
    url: "/StoreVideoAnalyticDashboards",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /StoreVideoAnalyticDashboards/:id/exists
 */
export async function StoreVideoAnalyticDashboard_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /StoreVideoAnalyticDashboards/:id
 */
export async function StoreVideoAnalyticDashboard_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<StoreVideoAnalyticDashboard> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /StoreVideoAnalyticDashboards
 */
export async function StoreVideoAnalyticDashboard_find(
  filter: Filter<any> = {}
): Promise<StoreVideoAnalyticDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /StoreVideoAnalyticDashboards/findOne
 */
export async function StoreVideoAnalyticDashboard_findOne(
  filter: Filter<any> = {}
): Promise<StoreVideoAnalyticDashboard> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /StoreVideoAnalyticDashboards/:id
 */
export async function StoreVideoAnalyticDashboard_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/StoreVideoAnalyticDashboards/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /StoreVideoAnalyticDashboards/count
 */
export async function StoreVideoAnalyticDashboard_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a file within a given container by name
 * /StoreVideoAnalyticDashboards/:id/container/files/:file
 */
export async function StoreVideoAnalyticDashboard_removeFile(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/StoreVideoAnalyticDashboards/:id/container/files/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /StoreVideoAnalyticDashboards/:id/container/upload
 */
export async function StoreVideoAnalyticDashboard_upload(
  id: string,
  property: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "POST",
    url: "/StoreVideoAnalyticDashboards/:id/container/upload",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Download a file within specified container
 * /StoreVideoAnalyticDashboards/:id/container/download/:file
 */
export async function StoreVideoAnalyticDashboard_download(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "GET",
    url: "/StoreVideoAnalyticDashboards/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
