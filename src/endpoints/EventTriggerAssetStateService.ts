import { ApiFetch, Filter } from '../core/ApiFetch';
import { EventTriggerRule } from '../models/EventTriggerRule';

/**
 * Api services for the `EventTriggerAssetState` model.
 */

/**
 * Add a related item by id for emergencyContacts.
 * /EventTriggerAssetStates/:id/emergencyContacts/rel/:fk
 */
export async function EventTriggerAssetState_LinkEmergencyContacts(
  id: string,
  fk: string,
  data: any = {},
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggerAssetStates/:id/emergencyContacts/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Remove the emergencyContacts relation to an item by id.
 * /EventTriggerAssetStates/:id/emergencyContacts/rel/:fk
 */
export async function EventTriggerAssetState_UnlinkEmergencyContacts(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggerAssetStates/:id/emergencyContacts/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for rules.
 * /EventTriggerAssetStates/:id/rules/:fk
 */
export async function EventTriggerAssetState_FindByIdRules(
  id: string,
  fk: string,
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: 'GET',
    url: '/EventTriggerAssetStates/:id/rules/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for rules.
 * /EventTriggerAssetStates/:id/rules/:fk
 */
export async function EventTriggerAssetState_DestroyByIdRules(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EventTriggerAssetStates/:id/rules/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for rules.
 * /EventTriggerAssetStates/:id/rules/:fk
 */
export async function EventTriggerAssetState_UpdateByIdRules(
  id: string,
  fk: string,
  data: any = {},
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: 'PUT',
    url: '/EventTriggerAssetStates/:id/rules/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Queries rules of EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/rules
 */
export async function EventTriggerAssetState_GetRules(
  id: string,
  filter?: Filter<EventTriggerRule>,
): Promise<EventTriggerRule[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggerAssetStates/:id/rules',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in rules of this model.
 * /EventTriggerAssetStates/:id/rules
 */
export async function EventTriggerAssetState_CreateRules(
  id: string,
  data: any = {},
): Promise<EventTriggerRule> {
  return ApiFetch({
    method: 'POST',
    url: '/EventTriggerAssetStates/:id/rules',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts rules of EventTriggerAssetState.
 * /EventTriggerAssetStates/:id/rules/count
 */
export async function EventTriggerAssetState_CountRules(
  id: string,
  where?: Filter<EventTriggerRule>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EventTriggerAssetStates/:id/rules/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
