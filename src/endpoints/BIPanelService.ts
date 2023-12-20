import { ApiFetch, Filter } from '../core/ApiFetch';
import { BIPanelSerie } from '../models/BIPanel';

/**
 * Api services for the `BIPanel` model.
 */

/**
 * Buscar un elemento relacionado por id para series.
 * /BIPanels/:id/series/:fk
 */
export async function BIPanel_FindByIdSeries(
  id: string,
  fk: string,
): Promise<BIPanelSerie> {
  return ApiFetch({
    method: 'GET',
    url: '/BIPanels/:id/series/:fk',
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
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/BIPanels/:id/series/:fk',
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
  data: any = {},
): Promise<BIPanelSerie> {
  return ApiFetch({
    method: 'PUT',
    url: '/BIPanels/:id/series/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * series consultas de BIPanel.
 * /BIPanels/:id/series
 */
export async function BIPanel_GetSeries(
  id: string,
  filter: Filter<any> = {},
): Promise<BIPanelSerie[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/BIPanels/:id/series',
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
  data: any = {},
): Promise<BIPanelSerie> {
  return ApiFetch({
    method: 'POST',
    url: '/BIPanels/:id/series',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos series de BIPanel.
 * /BIPanels/:id/series/count
 */
export async function BIPanel_CountSeries(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/BIPanels/:id/series/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
