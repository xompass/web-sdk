import { ApiFetch, Filter } from '../core/ApiFetch';
import { Manager } from '../models/Manager';
import { PeopleCounterReportSerie } from '../models/PeopleCounterReport';

/**
 * Api services for the `PeopleCounterReport` model.
 */

/**
 * Find a related item by id for managers.
 * /PeopleCounterReports/:id/managers/:fk
 */
export async function PeopleCounterReport_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/PeopleCounterReports/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_FindByIdSeries(
  id: string,
  fk: string,
): Promise<PeopleCounterReportSerie> {
  return ApiFetch({
    method: 'GET',
    url: '/PeopleCounterReports/:id/series/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_DestroyByIdSeries(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/PeopleCounterReports/:id/series/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for series.
 * /PeopleCounterReports/:id/series/:fk
 */
export async function PeopleCounterReport_UpdateByIdSeries(
  id: string,
  fk: string,
  data: any = {},
): Promise<PeopleCounterReportSerie> {
  return ApiFetch({
    method: 'PUT',
    url: '/PeopleCounterReports/:id/series/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Queries managers of PeopleCounterReport.
 * /PeopleCounterReports/:id/managers
 */
export async function PeopleCounterReport_GetManagers(
  id: string,
  filter: Filter<any> = {},
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/PeopleCounterReports/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts managers of PeopleCounterReport.
 * /PeopleCounterReports/:id/managers/count
 */
export async function PeopleCounterReport_CountManagers(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/PeopleCounterReports/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries series of PeopleCounterReport.
 * /PeopleCounterReports/:id/series
 */
export async function PeopleCounterReport_GetSeries(
  id: string,
  filter: Filter<any> = {},
): Promise<PeopleCounterReportSerie[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/PeopleCounterReports/:id/series',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in series of this model.
 * /PeopleCounterReports/:id/series
 */
export async function PeopleCounterReport_CreateSeries(
  id: string,
  data: any = {},
): Promise<PeopleCounterReportSerie> {
  return ApiFetch({
    method: 'POST',
    url: '/PeopleCounterReports/:id/series',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts series of PeopleCounterReport.
 * /PeopleCounterReports/:id/series/count
 */
export async function PeopleCounterReport_CountSeries(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/PeopleCounterReports/:id/series/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
