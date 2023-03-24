import { ApiFetch, Filter } from "../core/ApiFetch";
import { EdgeAgent } from "../models/EdgeAgent";
import { Asset } from "../models/Asset";
import { Log } from "../models/Log";
import { TelegramChat } from "../models/TelegramChat";

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
    method: "GET",
    url: "/EdgeAgents/:id/assets/:fk",
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
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EdgeAgents/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /EdgeAgents/:id/assets/rel/:fk
 */
export async function EdgeAgent_UnlinkAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgents/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EdgeAgents/:id/trackingLogs/:fk
 */
export async function EdgeAgent_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para telegramChats.
 * /EdgeAgents/:id/telegramChats/:fk
 */
export async function EdgeAgent_FindByIdTelegramChats(
  id: string,
  fk: string
): Promise<TelegramChat> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/telegramChats/:fk",
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
    method: "PUT",
    url: "/EdgeAgents/:id/telegramChats/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación telegramChats con un elemento por id.
 * /EdgeAgents/:id/telegramChats/rel/:fk
 */
export async function EdgeAgent_UnlinkTelegramChats(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgents/:id/telegramChats/rel/:fk",
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
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EdgeAgent.
 * /EdgeAgents/:id/trackingLogs
 */
export async function EdgeAgent_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EdgeAgent.
 * /EdgeAgents/:id/trackingLogs/count
 */
export async function EdgeAgent_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * telegramChats consultas de EdgeAgent.
 * /EdgeAgents/:id/telegramChats
 */
export async function EdgeAgent_GetTelegramChats(
  id: string,
  filter: Filter<any> = {}
): Promise<TelegramChat[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/telegramChats",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos telegramChats de EdgeAgent.
 * /EdgeAgents/:id/telegramChats/count
 */
export async function EdgeAgent_CountTelegramChats(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/telegramChats/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EdgeAgents
 */
export async function EdgeAgent_create(data: any = {}): Promise<EdgeAgent> {
  return ApiFetch({
    method: "POST",
    url: "/EdgeAgents",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EdgeAgents/:id/exists
 */
export async function EdgeAgent_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EdgeAgents/:id
 */
export async function EdgeAgent_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EdgeAgent> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EdgeAgents
 */
export async function EdgeAgent_find(
  filter: Filter<any> = {}
): Promise<EdgeAgent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EdgeAgents/findOne
 */
export async function EdgeAgent_findOne(
  filter: Filter<any> = {}
): Promise<EdgeAgent> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EdgeAgents/:id
 */
export async function EdgeAgent_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgents/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EdgeAgents/count
 */
export async function EdgeAgent_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgents/count",
    urlParams: _urlParams,
    routeParams: {},
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
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "PUT",
    url: "/EdgeAgents/:id/assets/rel",
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
): Promise<any> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgents/:id/assets/rel",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
