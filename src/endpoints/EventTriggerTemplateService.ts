import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventTriggerTemplate } from "../models/EventTriggerTemplate";
import { AssetStateTemplate } from "../models/AssetStateTemplate";
import { EventTriggerAssetStateTemplate } from "../models/EventTriggerAssetStateTemplate";
import { Log } from "../models/Log";

/**
 * Api services for the `EventTriggerTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para assetStateTemplates.
 * /EventTriggerTemplates/:id/assetStateTemplates/:fk
 */
export async function EventTriggerTemplate_FindByIdAssetStateTemplates(
  id: string,
  fk: string
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assetStateTemplates.
 * /EventTriggerTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function EventTriggerTemplate_LinkAssetStateTemplates(
  id: string,
  fk: string,
  data: any = {}
): Promise<EventTriggerAssetStateTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/rel/:fk",
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
 * Eliminar la relación assetStateTemplates con un elemento por id.
 * /EventTriggerTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function EventTriggerTemplate_UnlinkAssetStateTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assetStateTemplates con un elemento por id.
 * /EventTriggerTemplates/:id/assetStateTemplates/rel/:fk
 */
export async function EventTriggerTemplate_ExistsAssetStateTemplates(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para stateTemplates.
 * /EventTriggerTemplates/:id/stateTemplates/:fk
 */
export async function EventTriggerTemplate_FindByIdStateTemplates(
  id: string,
  fk: string
): Promise<EventTriggerAssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/stateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para stateTemplates.
 * /EventTriggerTemplates/:id/stateTemplates/:fk
 */
export async function EventTriggerTemplate_UpdateByIdStateTemplates(
  id: string,
  fk: string,
  data: any = {}
): Promise<EventTriggerAssetStateTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerTemplates/:id/stateTemplates/:fk",
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
 * Buscar un elemento relacionado por id para ruleTemplates.
 * /EventTriggerTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerTemplate_FindByIdRuleTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para ruleTemplates.
 * /EventTriggerTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerTemplate_DestroyByIdRuleTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para ruleTemplates.
 * /EventTriggerTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerTemplate_UpdateByIdRuleTemplates(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerTemplates/:id/ruleTemplates/:fk",
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
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EventTriggerTemplates/:id/trackingLogs/:fk
 */
export async function EventTriggerTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * assetStateTemplates consultas de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/assetStateTemplates
 */
export async function EventTriggerTemplate_GetAssetStateTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/assetStateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assetStateTemplates de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/assetStateTemplates/count
 */
export async function EventTriggerTemplate_CountAssetStateTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/assetStateTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * stateTemplates consultas de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/stateTemplates
 */
export async function EventTriggerTemplate_GetStateTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTriggerAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/stateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos stateTemplates de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/stateTemplates/count
 */
export async function EventTriggerTemplate_CountStateTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/stateTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * ruleTemplates consultas de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/ruleTemplates
 */
export async function EventTriggerTemplate_GetRuleTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/ruleTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en ruleTemplates de este modelo.
 * /EventTriggerTemplates/:id/ruleTemplates
 */
export async function EventTriggerTemplate_CreateRuleTemplates(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerTemplates/:id/ruleTemplates",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos ruleTemplates de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/ruleTemplates/count
 */
export async function EventTriggerTemplate_CountRuleTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/ruleTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/trackingLogs
 */
export async function EventTriggerTemplate_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventTriggerTemplate.
 * /EventTriggerTemplates/:id/trackingLogs/count
 */
export async function EventTriggerTemplate_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventTriggerTemplates
 */
export async function EventTriggerTemplate_create(
  data: any = {}
): Promise<EventTriggerTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerTemplates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventTriggerTemplates/:id/exists
 */
export async function EventTriggerTemplate_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventTriggerTemplates/:id
 */
export async function EventTriggerTemplate_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTriggerTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventTriggerTemplates
 */
export async function EventTriggerTemplate_find(
  filter: Filter<any> = {}
): Promise<EventTriggerTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventTriggerTemplates/findOne
 */
export async function EventTriggerTemplate_findOne(
  filter: Filter<any> = {}
): Promise<EventTriggerTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventTriggerTemplates/:id
 */
export async function EventTriggerTemplate_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerTemplates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventTriggerTemplates/count
 */
export async function EventTriggerTemplate_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerTemplates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
