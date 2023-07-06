import { ApiFetch, Filter } from '../core/ApiFetch';
import { Asset } from '../models/Asset';
import { EventDashboardEventTrigger } from '../models/EventDashboard';
import { EventTrigger } from '../models/EventTrigger';
import { Manager } from '../models/Manager';

/**
 * Api services for the `EventDashboard` model.
 */

/**
 * Buscar un elemento relacionado por id para assets.
 * /EventDashboards/:id/assets/:fk
 */
export async function EventDashboard_FindByIdAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /EventDashboards/:id/assets/rel/:fk
 */
export async function EventDashboard_LinkAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventDashboards/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /EventDashboards/:id/assets/rel/:fk
 */
export async function EventDashboard_UnlinkAssets(
  id: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventDashboards/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assets con un elemento por id.
 * /EventDashboards/:id/assets/rel/:fk
 */
export async function EventDashboard_ExistsAssets(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/EventDashboards/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para eventDashboardEventTriggers.
 * /EventDashboards/:id/eventDashboardEventTriggers/:fk
 */
export async function EventDashboard_FindByIdEventDashboardEventTriggers(
  id: string,
  fk: string
): Promise<EventDashboardEventTrigger> {
  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/eventDashboardEventTriggers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para eventDashboardEventTriggers.
 * /EventDashboards/:id/eventDashboardEventTriggers/:fk
 */
export async function EventDashboard_UpdateByIdEventDashboardEventTriggers(
  id: string,
  fk: string,
  data: any = {}
): Promise<EventDashboardEventTrigger> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventDashboards/:id/eventDashboardEventTriggers/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para eventTriggers.
 * /EventDashboards/:id/eventTriggers/:fk
 */
export async function EventDashboard_FindByIdEventTriggers(
  id: string,
  fk: string
): Promise<EventTrigger> {
  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/eventTriggers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para eventTriggers.
 * /EventDashboards/:id/eventTriggers/rel/:fk
 */
export async function EventDashboard_LinkEventTriggers(
  id: string,
  fk: string,
  data: any = {}
): Promise<EventDashboardEventTrigger> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventDashboards/:id/eventTriggers/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación eventTriggers con un elemento por id.
 * /EventDashboards/:id/eventTriggers/rel/:fk
 */
export async function EventDashboard_UnlinkEventTriggers(
  id: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventDashboards/:id/eventTriggers/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación eventTriggers con un elemento por id.
 * /EventDashboards/:id/eventTriggers/rel/:fk
 */
export async function EventDashboard_ExistsEventTriggers(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/EventDashboards/:id/eventTriggers/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /EventDashboards/:id/managers/:fk
 */
export async function EventDashboard_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * assets consultas de EventDashboard.
 * /EventDashboards/:id/assets
 */
export async function EventDashboard_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assets de EventDashboard.
 * /EventDashboards/:id/assets/count
 */
export async function EventDashboard_CountAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * eventDashboardEventTriggers consultas de EventDashboard.
 * /EventDashboards/:id/eventDashboardEventTriggers
 */
export async function EventDashboard_GetEventDashboardEventTriggers(
  id: string,
  filter: Filter<any> = {}
): Promise<EventDashboardEventTrigger[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/eventDashboardEventTriggers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * eventTriggers consultas de EventDashboard.
 * /EventDashboards/:id/eventTriggers
 */
export async function EventDashboard_GetEventTriggers(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTrigger[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/eventTriggers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventTriggers de EventDashboard.
 * /EventDashboards/:id/eventTriggers/count
 */
export async function EventDashboard_CountEventTriggers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/eventTriggers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de EventDashboard.
 * /EventDashboards/:id/managers
 */
export async function EventDashboard_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de EventDashboard.
 * /EventDashboards/:id/managers/count
 */
export async function EventDashboard_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
