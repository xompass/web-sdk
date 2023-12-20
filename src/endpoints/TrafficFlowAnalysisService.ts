import { ApiFetch, Filter } from '../core/ApiFetch';
import { Manager } from '../models/Manager';
import { TrafficFlowAnalysisKPI } from '../models/TrafficFlowAnalysis';
import { TrafficFlowAnalysisVertice } from '../models/TrafficFlowAnalysis';

/**
 * Api services for the `TrafficFlowAnalysis` model.
 */

/**
 * Buscar un elemento relacionado por id para managers.
 * /TrafficFlowAnalysis/:id/managers/:fk
 */
export async function TrafficFlowAnalysis_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/managers/:fk',
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
  fk: string,
): Promise<TrafficFlowAnalysisKPI> {
  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/kpis/:fk',
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
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/TrafficFlowAnalysis/:id/kpis/:fk',
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
  data: any = {},
): Promise<TrafficFlowAnalysisKPI> {
  return ApiFetch({
    method: 'PUT',
    url: '/TrafficFlowAnalysis/:id/kpis/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para vertices.
 * /TrafficFlowAnalysis/:id/vertices/:fk
 */
export async function TrafficFlowAnalysis_FindByIdVertices(
  id: string,
  fk: string,
): Promise<TrafficFlowAnalysisVertice> {
  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/vertices/:fk',
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
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/TrafficFlowAnalysis/:id/vertices/:fk',
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
  data: any = {},
): Promise<TrafficFlowAnalysisVertice> {
  return ApiFetch({
    method: 'PUT',
    url: '/TrafficFlowAnalysis/:id/vertices/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * managers consultas de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/managers
 */
export async function TrafficFlowAnalysis_GetManagers(
  id: string,
  filter: Filter<any> = {},
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/managers',
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
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/managers/count',
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
  filter: Filter<any> = {},
): Promise<TrafficFlowAnalysisKPI[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/kpis',
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
  data: any = {},
): Promise<TrafficFlowAnalysisKPI> {
  return ApiFetch({
    method: 'POST',
    url: '/TrafficFlowAnalysis/:id/kpis',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos kpis de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/kpis/count
 */
export async function TrafficFlowAnalysis_CountKpis(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/kpis/count',
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
  filter: Filter<any> = {},
): Promise<TrafficFlowAnalysisVertice[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/vertices',
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
  data: any = {},
): Promise<TrafficFlowAnalysisVertice> {
  return ApiFetch({
    method: 'POST',
    url: '/TrafficFlowAnalysis/:id/vertices',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos vertices de TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/vertices/count
 */
export async function TrafficFlowAnalysis_CountVertices(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/TrafficFlowAnalysis/:id/vertices/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
