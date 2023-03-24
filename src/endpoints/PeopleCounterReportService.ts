import { ApiFetch, Filter } from "../core/ApiFetch";
import { PeopleCounterReport } from "../models/PeopleCounterReport";
import { Log } from "../models/Log";
import { Manager } from "../models/Manager";

/**
 * Api services for the `PeopleCounterReport` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /PeopleCounterReports/:id/trackingLogs/:fk
 */
export async function PeopleCounterReport_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /PeopleCounterReports/:id/managers/:fk
 */
export async function PeopleCounterReport_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_FindByIdSeries(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_DestroyByIdSeries(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/PeopleCounterReports/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_UpdateByIdSeries(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/PeopleCounterReports/:id/series/:fk",
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
 * trackingLogs consultas de PeopleCounterReport.
 * /PeopleCounterReports/:id/trackingLogs
 */
export async function PeopleCounterReport_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de PeopleCounterReport.
 * /PeopleCounterReports/:id/trackingLogs/count
 */
export async function PeopleCounterReport_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de PeopleCounterReport.
 * /PeopleCounterReports/:id/managers
 */
export async function PeopleCounterReport_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de PeopleCounterReport.
 * /PeopleCounterReports/:id/managers/count
 */
export async function PeopleCounterReport_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * series consultas de PeopleCounterReport.
 * /PeopleCounterReports/:id/series
 */
export async function PeopleCounterReport_GetSeries(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/series",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en series de este modelo.
 * /PeopleCounterReports/:id/series
 */
export async function PeopleCounterReport_CreateSeries(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/PeopleCounterReports/:id/series",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos series de PeopleCounterReport.
 * /PeopleCounterReports/:id/series/count
 */
export async function PeopleCounterReport_CountSeries(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/series/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /PeopleCounterReports
 */
export async function PeopleCounterReport_create(
  data: any = {}
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: "POST",
    url: "/PeopleCounterReports",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /PeopleCounterReports/:id/exists
 */
export async function PeopleCounterReport_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /PeopleCounterReports/:id
 */
export async function PeopleCounterReport_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<PeopleCounterReport> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /PeopleCounterReports
 */
export async function PeopleCounterReport_find(
  filter: Filter<any> = {}
): Promise<PeopleCounterReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /PeopleCounterReports/findOne
 */
export async function PeopleCounterReport_findOne(
  filter: Filter<any> = {}
): Promise<PeopleCounterReport> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /PeopleCounterReports/:id
 */
export async function PeopleCounterReport_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/PeopleCounterReports/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /PeopleCounterReports/count
 */
export async function PeopleCounterReport_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
