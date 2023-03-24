import { ApiFetch, Filter } from "../core/ApiFetch";
import { View } from "../models/View";
import { Log } from "../models/Log";
import { Manager } from "../models/Manager";

/**
 * Api services for the `View` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Views/:id/trackingLogs/:fk
 */
export async function View_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Views/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /Views/:id/managers/:fk
 */
export async function View_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/Views/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para managers.
 * /Views/:id/managers/:fk
 */
export async function View_DestroyByIdManagers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Views/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para managers.
 * /Views/:id/managers/:fk
 */
export async function View_UpdateByIdManagers(
  id: string,
  fk: string,
  data: any = {}
): Promise<Manager> {
  return ApiFetch({
    method: "PUT",
    url: "/Views/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para managers.
 * /Views/:id/managers/rel/:fk
 */
export async function View_LinkManagers(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Views/:id/managers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación managers con un elemento por id.
 * /Views/:id/managers/rel/:fk
 */
export async function View_UnlinkManagers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Views/:id/managers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación managers con un elemento por id.
 * /Views/:id/managers/rel/:fk
 */
export async function View_ExistsManagers(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Views/:id/managers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de View.
 * /Views/:id/trackingLogs
 */
export async function View_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de View.
 * /Views/:id/trackingLogs/count
 */
export async function View_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de View.
 * /Views/:id/managers
 */
export async function View_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en managers de este modelo.
 * /Views/:id/managers
 */
export async function View_CreateManagers(
  id: string,
  data: any = {}
): Promise<Manager> {
  return ApiFetch({
    method: "POST",
    url: "/Views/:id/managers",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos managers de View.
 * /Views/:id/managers/count
 */
export async function View_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Views
 */
export async function View_create(data: any = {}): Promise<View> {
  return ApiFetch({
    method: "POST",
    url: "/Views",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Views/:id/exists
 */
export async function View_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Views/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Views/:id
 */
export async function View_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<View> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Views
 */
export async function View_find(filter: Filter<any> = {}): Promise<View[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Views/findOne
 */
export async function View_findOne(filter: Filter<any> = {}): Promise<View> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Views/:id
 */
export async function View_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Views/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Views/count
 */
export async function View_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Views/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
