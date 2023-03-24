import { ApiFetch, Filter } from "../core/ApiFetch";
import { BIPanel } from "../models/BIPanel";
import { Log } from "../models/Log";

/**
 * Api services for the `BIPanel` model.
 */

/**
 * Buscar un elemento relacionado por id para series.
 * /BIPanels/:id/series/:fk
 */
export async function BIPanel_FindByIdSeries(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para series.
 * /BIPanels/:id/series/:fk
 */
export async function BIPanel_DestroyByIdSeries(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/BIPanels/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para series.
 * /BIPanels/:id/series/:fk
 */
export async function BIPanel_UpdateByIdSeries(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/BIPanels/:id/series/:fk",
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
 * Buscar un elemento relacionado por id para trackingLogs.
 * /BIPanels/:id/trackingLogs/:fk
 */
export async function BIPanel_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * series consultas de BIPanel.
 * /BIPanels/:id/series
 */
export async function BIPanel_GetSeries(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/series",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en series de este modelo.
 * /BIPanels/:id/series
 */
export async function BIPanel_CreateSeries(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/BIPanels/:id/series",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos series de BIPanel.
 * /BIPanels/:id/series/count
 */
export async function BIPanel_CountSeries(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/series/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de BIPanel.
 * /BIPanels/:id/trackingLogs
 */
export async function BIPanel_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de BIPanel.
 * /BIPanels/:id/trackingLogs/count
 */
export async function BIPanel_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /BIPanels
 */
export async function BIPanel_create(data: any = {}): Promise<BIPanel> {
  return ApiFetch({
    method: "POST",
    url: "/BIPanels",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /BIPanels/:id/exists
 */
export async function BIPanel_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /BIPanels/:id
 */
export async function BIPanel_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<BIPanel> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /BIPanels
 */
export async function BIPanel_find(
  filter: Filter<any> = {}
): Promise<BIPanel[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /BIPanels/findOne
 */
export async function BIPanel_findOne(
  filter: Filter<any> = {}
): Promise<BIPanel> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /BIPanels/:id
 */
export async function BIPanel_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/BIPanels/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /BIPanels/count
 */
export async function BIPanel_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/BIPanels/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
