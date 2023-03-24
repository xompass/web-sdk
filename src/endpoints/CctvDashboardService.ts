import { ApiFetch, Filter } from "../core/ApiFetch";
import { CctvDashboard } from "../models/CctvDashboard";
import { Asset } from "../models/Asset";
import { Log } from "../models/Log";
import { Manager } from "../models/Manager";

/**
 * Api services for the `CctvDashboard` model.
 */

/**
 * Buscar un elemento relacionado por id para assets.
 * /CctvDashboards/:id/assets/:fk
 */
export async function CctvDashboard_FindByIdAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_LinkAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: "PUT",
    url: "/CctvDashboards/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_UnlinkAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/CctvDashboards/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assets con un elemento por id.
 * /CctvDashboards/:id/assets/rel/:fk
 */
export async function CctvDashboard_ExistsAssets(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/CctvDashboards/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /CctvDashboards/:id/trackingLogs/:fk
 */
export async function CctvDashboard_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /CctvDashboards/:id/managers/:fk
 */
export async function CctvDashboard_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * assets consultas de CctvDashboard.
 * /CctvDashboards/:id/assets
 */
export async function CctvDashboard_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assets de CctvDashboard.
 * /CctvDashboards/:id/assets/count
 */
export async function CctvDashboard_CountAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de CctvDashboard.
 * /CctvDashboards/:id/trackingLogs
 */
export async function CctvDashboard_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de CctvDashboard.
 * /CctvDashboards/:id/trackingLogs/count
 */
export async function CctvDashboard_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de CctvDashboard.
 * /CctvDashboards/:id/managers
 */
export async function CctvDashboard_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de CctvDashboard.
 * /CctvDashboards/:id/managers/count
 */
export async function CctvDashboard_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /CctvDashboards
 */
export async function CctvDashboard_create(
  data: any = {}
): Promise<CctvDashboard> {
  return ApiFetch({
    method: "POST",
    url: "/CctvDashboards",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /CctvDashboards/:id/exists
 */
export async function CctvDashboard_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /CctvDashboards/:id
 */
export async function CctvDashboard_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<CctvDashboard> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /CctvDashboards
 */
export async function CctvDashboard_find(
  filter: Filter<any> = {}
): Promise<CctvDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /CctvDashboards/findOne
 */
export async function CctvDashboard_findOne(
  filter: Filter<any> = {}
): Promise<CctvDashboard> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /CctvDashboards/:id
 */
export async function CctvDashboard_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/CctvDashboards/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /CctvDashboards/count
 */
export async function CctvDashboard_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/CctvDashboards/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
