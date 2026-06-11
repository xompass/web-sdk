import { ApiFetch, Filter } from '../core/ApiFetch';
import { EventDashboard } from '../models/EventDashboard';
import { Asset } from '../models/Asset';
import { EventDashboardEventTrigger } from '../models/EventDashboard';
import { EventTrigger } from '../models/EventTrigger';
import { Manager } from '../models/Manager';
import { Event } from '../models/Event';
import { Feature } from '../models/GeoJSON';

/**
 * Api services for the `EventDashboard` model.
 */

/**
 * Find a related item by id for assets.
 * /EventDashboards/:id/assets/:fk
 */
export async function EventDashboard_FindByIdAssets(
  id: string,
  fk: string,
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
 * Add a related item by id for assets.
 * /EventDashboards/:id/assets/rel/:fk
 */
export async function EventDashboard_LinkAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventDashboards/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Remove the assets relation to an item by id.
 * /EventDashboards/:id/assets/rel/:fk
 */
export async function EventDashboard_UnlinkAssets(
  id: string,
  fk: string,
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
 * Check the existence of assets relation to an item by id.
 * /EventDashboards/:id/assets/rel/:fk
 */
export async function EventDashboard_ExistsAssets(
  id: string,
  fk: string,
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
 * Find a related item by id for eventDashboardEventTriggers.
 * /EventDashboards/:id/eventDashboardEventTriggers/:fk
 */
export async function EventDashboard_FindByIdEventDashboardEventTriggers(
  id: string,
  fk: string,
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
 * Update a related item by id for eventDashboardEventTriggers.
 * /EventDashboards/:id/eventDashboardEventTriggers/:fk
 */
export async function EventDashboard_UpdateByIdEventDashboardEventTriggers(
  id: string,
  fk: string,
  data: any = {},
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
 * Find a related item by id for eventTriggers.
 * /EventDashboards/:id/eventTriggers/:fk
 */
export async function EventDashboard_FindByIdEventTriggers(
  id: string,
  fk: string,
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
 * Add a related item by id for eventTriggers.
 * /EventDashboards/:id/eventTriggers/rel/:fk
 */
export async function EventDashboard_LinkEventTriggers(
  id: string,
  fk: string,
  data: any = {},
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
 * Remove the eventTriggers relation to an item by id.
 * /EventDashboards/:id/eventTriggers/rel/:fk
 */
export async function EventDashboard_UnlinkEventTriggers(
  id: string,
  fk: string,
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
 * Check the existence of eventTriggers relation to an item by id.
 * /EventDashboards/:id/eventTriggers/rel/:fk
 */
export async function EventDashboard_ExistsEventTriggers(
  id: string,
  fk: string,
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
 * Find a related item by id for managers.
 * /EventDashboards/:id/managers/:fk
 */
export async function EventDashboard_FindByIdManagers(
  id: string,
  fk: string,
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
 * Queries assets of EventDashboard.
 * /EventDashboards/:id/assets
 */
export async function EventDashboard_GetAssets(
  id: string,
  filter?: Filter<Asset>,
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
 * Counts assets of EventDashboard.
 * /EventDashboards/:id/assets/count
 */
export async function EventDashboard_CountAssets(
  id: string,
  where?: Filter<Asset>['where'],
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
 * Queries eventDashboardEventTriggers of EventDashboard.
 * /EventDashboards/:id/eventDashboardEventTriggers
 */
export async function EventDashboard_GetEventDashboardEventTriggers(
  id: string,
  filter?: Filter<EventDashboardEventTrigger>,
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
 * Queries eventTriggers of EventDashboard.
 * /EventDashboards/:id/eventTriggers
 */
export async function EventDashboard_GetEventTriggers(
  id: string,
  filter?: Filter<EventTrigger>,
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
 * Counts eventTriggers of EventDashboard.
 * /EventDashboards/:id/eventTriggers/count
 */
export async function EventDashboard_CountEventTriggers(
  id: string,
  where?: Filter<EventTrigger>['where'],
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
 * Queries managers of EventDashboard.
 * /EventDashboards/:id/managers
 */
export async function EventDashboard_GetManagers(
  id: string,
  filter?: Filter<Manager>,
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
 * Counts managers of EventDashboard.
 * /EventDashboards/:id/managers/count
 */
export async function EventDashboard_CountManagers(
  id: string,
  where?: Filter<Manager>['where'],
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
/**
 * Find a model instance by {{id}} from the data source.
 * /EventDashboards/:id
 */
export async function EventDashboard_findById(
  id: string,
  filter?: Filter<EventDashboard>,
): Promise<EventDashboard> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get events
 * /EventDashboards/:id/events
 */

export type EventDashboard_GetEventsResponse = {
  events: Event[];
  eventTriggers?: {
    id: string;
    name: string;
    subject: string;
    type: string;
    assetId: string;
    eventGroupId: string;
  }[];
  eventGroups?: {
    id: string;
    name: string;
    color: string;
  }[];
  assets?: {
    id: string;
    name: string;
    type: string;
    assetId?: string;
    currentStateId?: string;
    _config?: {
      address?: string;
      feature?: Feature;
    };
  }[];
};

export async function EventDashboard_GetEvents(
  id: string,
  filter?: Filter<Event>,
  eventTriggers?: boolean,
  assets?: boolean,
): Promise<EventDashboard_GetEventsResponse> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }
  if (eventTriggers != null) {
    _urlParams['eventTriggers'] = eventTriggers;
  }
  if (assets != null) {
    _urlParams['assets'] = assets;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/events',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get disabled event triggers
 * /EventDashboards/:id/disabledEventTriggers
 */

export type EventDashboard_GetDisabledEventTriggersResponse = {
  assetStates?: { id: string; name: string }[];
  eventTriggers: {
    id: string;
    name: string;
    subject: string;
    assetId: string;
    states: { id: string; assetStateId: string }[];
  }[];
};

export async function EventDashboard_GetDisabledEventTriggers(
  id: string,
): Promise<EventDashboard_GetDisabledEventTriggersResponse> {
  return ApiFetch({
    method: 'GET',
    url: '/EventDashboards/:id/disabledEventTriggers',
    routeParams: {
      id,
    },
  });
}
