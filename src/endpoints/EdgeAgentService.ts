import { ApiFetch, Filter } from '../core/ApiFetch';
import { Asset } from '../models/Asset';
import { EdgeAgentAsset } from '../models/EdgeAgent';

/**
 * Api services for the `EdgeAgent` model.
 */

/**
 * Buscar un elemento relacionado por id para assets.
 * /EdgeAgents/:id/assets/:fk
 */
export async function EdgeAgent_FindByIdAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgents/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /EdgeAgents/:id/assets/rel/:fk
 */
export async function EdgeAgent_LinkAssets(
  id: string,
  fk: string,
  data: any = {}
): Promise<EdgeAgentAsset> {
  return ApiFetch({
    method: 'PUT',
    url: '/EdgeAgents/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /EdgeAgents/:id/assets/rel/:fk
 */
export async function EdgeAgent_UnlinkAssets(
  id: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EdgeAgents/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para telegramChats.
 * /EdgeAgents/:id/telegramChats/rel/:fk
 */
export async function EdgeAgent_LinkTelegramChats(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/EdgeAgents/:id/telegramChats/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación telegramChats con un elemento por id.
 * /EdgeAgents/:id/telegramChats/rel/:fk
 */
export async function EdgeAgent_UnlinkTelegramChats(
  id: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/EdgeAgents/:id/telegramChats/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * assets consultas de EdgeAgent.
 * /EdgeAgents/:id/assets
 */
export async function EdgeAgent_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/EdgeAgents/:id/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Link assets in a bulk operation
 * /EdgeAgents/:id/assets/rel
 */
export async function EdgeAgent_BulkLinkAssets(
  id: string,
  where: any
): Promise<any[]> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'PUT',
    url: '/EdgeAgents/:id/assets/rel',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Unlink assets in a bulk operation
 * /EdgeAgents/:id/assets/rel
 */
export async function EdgeAgent_BulkUnlinkAssets(
  id: string,
  where: any
): Promise<void> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/EdgeAgents/:id/assets/rel',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
