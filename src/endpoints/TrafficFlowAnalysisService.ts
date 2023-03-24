import { ApiFetch, Filter } from "../core/ApiFetch";
import { TrafficFlowAnalysis } from "../models/TrafficFlowAnalysis";
import { Log } from "../models/Log";
import { Manager } from "../models/Manager";

/**
 * Api services for the `TrafficFlowAnalysis` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /TrafficFlowAnalysis/:id/trackingLogs/:fk
 */
export async function TrafficFlowAnalysis_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /TrafficFlowAnalysis/:id/managers/:fk
 */
export async function TrafficFlowAnalysis_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para kpis.
 * /TrafficFlowAnalysis/:id/kpis/:fk
 */
export async function TrafficFlowAnalysis_FindByIdKpis(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/kpis/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para kpis.
 * /TrafficFlowAnalysis/:id/kpis/:fk
 */
export async function TrafficFlowAnalysis_DestroyByIdKpis(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TrafficFlowAnalysis/:id/kpis/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para kpis.
 * /TrafficFlowAnalysis/:id/kpis/:fk
 */
export async function TrafficFlowAnalysis_UpdateByIdKpis(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/TrafficFlowAnalysis/:id/kpis/:fk",
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
 * Buscar un elemento relacionado por id para vertices.
 * /TrafficFlowAnalysis/:id/vertices/:fk
 */
export async function TrafficFlowAnalysis_FindByIdVertices(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/vertices/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para vertices.
 * /TrafficFlowAnalysis/:id/vertices/:fk
 */
export async function TrafficFlowAnalysis_DestroyByIdVertices(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TrafficFlowAnalysis/:id/vertices/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para vertices.
 * /TrafficFlowAnalysis/:id/vertices/:fk
 */
export async function TrafficFlowAnalysis_UpdateByIdVertices(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/TrafficFlowAnalysis/:id/vertices/:fk",
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
 * trackingLogs consultas de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/trackingLogs
 */
export async function TrafficFlowAnalysis_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/trackingLogs/count
 */
export async function TrafficFlowAnalysis_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/managers
 */
export async function TrafficFlowAnalysis_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/managers/count
 */
export async function TrafficFlowAnalysis_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * kpis consultas de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/kpis
 */
export async function TrafficFlowAnalysis_GetKpis(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/kpis",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en kpis de este modelo.
 * /TrafficFlowAnalysis/:id/kpis
 */
export async function TrafficFlowAnalysis_CreateKpis(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/TrafficFlowAnalysis/:id/kpis",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos kpis de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/kpis/count
 */
export async function TrafficFlowAnalysis_CountKpis(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/kpis/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * vertices consultas de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/vertices
 */
export async function TrafficFlowAnalysis_GetVertices(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/vertices",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en vertices de este modelo.
 * /TrafficFlowAnalysis/:id/vertices
 */
export async function TrafficFlowAnalysis_CreateVertices(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/TrafficFlowAnalysis/:id/vertices",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos vertices de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/vertices/count
 */
export async function TrafficFlowAnalysis_CountVertices(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/vertices/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /TrafficFlowAnalysis
 */
export async function TrafficFlowAnalysis_create(
  data: any = {}
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: "POST",
    url: "/TrafficFlowAnalysis",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /TrafficFlowAnalysis/:id/exists
 */
export async function TrafficFlowAnalysis_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /TrafficFlowAnalysis/:id
 */
export async function TrafficFlowAnalysis_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<TrafficFlowAnalysis> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /TrafficFlowAnalysis
 */
export async function TrafficFlowAnalysis_find(
  filter: Filter<any> = {}
): Promise<TrafficFlowAnalysis[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /TrafficFlowAnalysis/findOne
 */
export async function TrafficFlowAnalysis_findOne(
  filter: Filter<any> = {}
): Promise<TrafficFlowAnalysis> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /TrafficFlowAnalysis/:id
 */
export async function TrafficFlowAnalysis_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/TrafficFlowAnalysis/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /TrafficFlowAnalysis/count
 */
export async function TrafficFlowAnalysis_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
