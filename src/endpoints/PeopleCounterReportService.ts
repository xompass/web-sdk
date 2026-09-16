import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { Manager } from "../models/Manager";
import { PeopleCounterReportSerie } from "../models/PeopleCounterReport";

/**
 * Find a related item by id for managers.
 * /PeopleCounterReports/:id/managers/:fk
 */
export async function PeopleCounterReport_FindByIdManagers(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_FindByIdSeries(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<PeopleCounterReportSerie> {
  return ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_DestroyByIdSeries(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/PeopleCounterReports/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_UpdateByIdSeries(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<PeopleCounterReportSerie> {
  return ApiFetch({
    method: "PUT",
    url: "/PeopleCounterReports/:id/series/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries managers of PeopleCounterReport.
 * /PeopleCounterReports/:id/managers
 */
export async function PeopleCounterReport_GetManagers(
  id: string,
  filter?: Filter<Manager>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts managers of PeopleCounterReport.
 * /PeopleCounterReports/:id/managers/count
 */
export async function PeopleCounterReport_CountManagers(
  id: string,
  where?: Filter<Manager>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries series of PeopleCounterReport.
 * /PeopleCounterReports/:id/series
 */
export async function PeopleCounterReport_GetSeries(
  id: string,
  filter?: Filter<PeopleCounterReportSerie>,
  options?: ApiRequestOptions,
): Promise<PeopleCounterReportSerie[]> {
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
    ...options,
  });
}
/**
 * Creates a new instance in series of this model.
 * /PeopleCounterReports/:id/series
 */
export async function PeopleCounterReport_CreateSeries(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<PeopleCounterReportSerie> {
  return ApiFetch({
    method: "POST",
    url: "/PeopleCounterReports/:id/series",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts series of PeopleCounterReport.
 * /PeopleCounterReports/:id/series/count
 */
export async function PeopleCounterReport_CountSeries(
  id: string,
  where?: Filter<PeopleCounterReportSerie>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/PeopleCounterReports/:id/series/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
