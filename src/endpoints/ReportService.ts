import { ApiFetch, Filter } from "../core/ApiFetch";
import { Report } from "../models/Report";
import { Log } from "../models/Log";
import { Manager } from "../models/Manager";
import { Asset } from "../models/Asset";

/**
 * Api services for the `Report` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Reports/:id/trackingLogs/:fk
 */
export async function Report_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /Reports/:id/managers/:fk
 */
export async function Report_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para assets.
 * /Reports/:id/assets/:fk
 */
export async function Report_FindByIdAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_LinkAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: "PUT",
    url: "/Reports/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_UnlinkAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Reports/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assets con un elemento por id.
 * /Reports/:id/assets/rel/:fk
 */
export async function Report_ExistsAssets(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Reports/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Report.
 * /Reports/:id/trackingLogs
 */
export async function Report_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Report.
 * /Reports/:id/trackingLogs/count
 */
export async function Report_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de Report.
 * /Reports/:id/managers
 */
export async function Report_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de Report.
 * /Reports/:id/managers/count
 */
export async function Report_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assets consultas de Report.
 * /Reports/:id/assets
 */
export async function Report_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assets de Report.
 * /Reports/:id/assets/count
 */
export async function Report_CountAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Reports
 */
export async function Report_create(data: any = {}): Promise<Report> {
  return ApiFetch({
    method: "POST",
    url: "/Reports",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Reports/:id/exists
 */
export async function Report_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Reports/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Reports/:id
 */
export async function Report_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Report> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Reports
 */
export async function Report_find(filter: Filter<any> = {}): Promise<Report[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Reports/findOne
 */
export async function Report_findOne(
  filter: Filter<any> = {}
): Promise<Report> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Reports/:id
 */
export async function Report_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Reports/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Reports/count
 */
export async function Report_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Reports/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
