import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { CountReportSection } from "../models/CountReport";
import { Manager } from "../models/Manager";

/**
 * Find a related item by id for sections.
 * /CountReports/:id/sections/:fk
 */
export async function CountReport_FindByIdSections(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<CountReportSection> {
  return ApiFetch({
    method: "GET",
    url: "/CountReports/:id/sections/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for sections.
 * /CountReports/:id/sections/:fk
 */
export async function CountReport_DestroyByIdSections(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/CountReports/:id/sections/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for sections.
 * /CountReports/:id/sections/:fk
 */
export async function CountReport_UpdateByIdSections(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<CountReportSection> {
  return ApiFetch({
    method: "PUT",
    url: "/CountReports/:id/sections/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for managers.
 * /CountReports/:id/managers/:fk
 */
export async function CountReport_FindByIdManagers(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/CountReports/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries sections of CountReport.
 * /CountReports/:id/sections
 */
export async function CountReport_GetSections(
  id: string,
  filter?: Filter<CountReportSection>,
  options?: ApiRequestOptions,
): Promise<CountReportSection[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/CountReports/:id/sections",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in sections of this model.
 * /CountReports/:id/sections
 */
export async function CountReport_CreateSections(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<CountReportSection> {
  return ApiFetch({
    method: "POST",
    url: "/CountReports/:id/sections",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts sections of CountReport.
 * /CountReports/:id/sections/count
 */
export async function CountReport_CountSections(
  id: string,
  where?: Filter<CountReportSection>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/CountReports/:id/sections/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries managers of CountReport.
 * /CountReports/:id/managers
 */
export async function CountReport_GetManagers(
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
    url: "/CountReports/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts managers of CountReport.
 * /CountReports/:id/managers/count
 */
export async function CountReport_CountManagers(
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
    url: "/CountReports/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
