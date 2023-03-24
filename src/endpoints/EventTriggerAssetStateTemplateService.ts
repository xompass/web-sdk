import { ApiFetch, Filter } from "../core/ApiFetch";
import { EventTriggerAssetStateTemplate } from "../models/EventTriggerAssetStateTemplate";
import { AssetStateTemplate } from "../models/AssetStateTemplate";
import { Log } from "../models/Log";

/**
 * Api services for the `EventTriggerAssetStateTemplate` model.
 */

/**
 * Capta la relación belongsTo assetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/assetStateTemplate
 */
export async function EventTriggerAssetStateTemplate_GetAssetStateTemplate(
  id: string
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/assetStateTemplate",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_FindByIdRuleTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_DestroyByIdRuleTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para ruleTemplates.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk
 */
export async function EventTriggerAssetStateTemplate_UpdateByIdRuleTemplates(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/:fk",
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
 * /EventTriggerAssetStateTemplates/:id/trackingLogs/:fk
 */
export async function EventTriggerAssetStateTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * ruleTemplates consultas de EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates
 */
export async function EventTriggerAssetStateTemplate_GetRuleTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en ruleTemplates de este modelo.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates
 */
export async function EventTriggerAssetStateTemplate_CreateRuleTemplates(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos ruleTemplates de EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/ruleTemplates/count
 */
export async function EventTriggerAssetStateTemplate_CountRuleTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/ruleTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/trackingLogs
 */
export async function EventTriggerAssetStateTemplate_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EventTriggerAssetStateTemplate.
 * /EventTriggerAssetStateTemplates/:id/trackingLogs/count
 */
export async function EventTriggerAssetStateTemplate_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EventTriggerAssetStateTemplates
 */
export async function EventTriggerAssetStateTemplate_create(
  data: any = {}
): Promise<EventTriggerAssetStateTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/EventTriggerAssetStateTemplates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EventTriggerAssetStateTemplates/:id/exists
 */
export async function EventTriggerAssetStateTemplate_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EventTriggerAssetStateTemplates/:id
 */
export async function EventTriggerAssetStateTemplate_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTriggerAssetStateTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EventTriggerAssetStateTemplates
 */
export async function EventTriggerAssetStateTemplate_find(
  filter: Filter<any> = {}
): Promise<EventTriggerAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EventTriggerAssetStateTemplates/findOne
 */
export async function EventTriggerAssetStateTemplate_findOne(
  filter: Filter<any> = {}
): Promise<EventTriggerAssetStateTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EventTriggerAssetStateTemplates/:id
 */
export async function EventTriggerAssetStateTemplate_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EventTriggerAssetStateTemplates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EventTriggerAssetStateTemplates/count
 */
export async function EventTriggerAssetStateTemplate_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EventTriggerAssetStateTemplates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
