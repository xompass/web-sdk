import { ApiFetch, Filter } from '../core/ApiFetch';
import { CountReportSection } from '../models/CountReport';
import { Manager } from '../models/Manager';

/**
 * Api services for the `CountReport` model.
 */

/**
 * Buscar un elemento relacionado por id para sections.
 * /CountReports/:id/sections/:fk
 */
export async function CountReport_FindByIdSections(
  id: string,
  fk: string,
): Promise<CountReportSection> {
  return ApiFetch({
    method: 'GET',
    url: '/CountReports/:id/sections/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para sections.
 * /CountReports/:id/sections/:fk
 */
export async function CountReport_DestroyByIdSections(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/CountReports/:id/sections/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para sections.
 * /CountReports/:id/sections/:fk
 */
export async function CountReport_UpdateByIdSections(
  id: string,
  fk: string,
  data: any = {},
): Promise<CountReportSection> {
  return ApiFetch({
    method: 'PUT',
    url: '/CountReports/:id/sections/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /CountReports/:id/managers/:fk
 */
export async function CountReport_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/CountReports/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * sections consultas de CountReport.
 * /CountReports/:id/sections
 */
export async function CountReport_GetSections(
  id: string,
  filter: Filter<any> = {},
): Promise<CountReportSection[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CountReports/:id/sections',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en sections de este modelo.
 * /CountReports/:id/sections
 */
export async function CountReport_CreateSections(
  id: string,
  data: any = {},
): Promise<CountReportSection> {
  return ApiFetch({
    method: 'POST',
    url: '/CountReports/:id/sections',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos sections de CountReport.
 * /CountReports/:id/sections/count
 */
export async function CountReport_CountSections(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CountReports/:id/sections/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de CountReport.
 * /CountReports/:id/managers
 */
export async function CountReport_GetManagers(
  id: string,
  filter: Filter<any> = {},
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CountReports/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de CountReport.
 * /CountReports/:id/managers/count
 */
export async function CountReport_CountManagers(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/CountReports/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
