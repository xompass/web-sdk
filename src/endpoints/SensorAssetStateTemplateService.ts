import { ApiFetch, Filter } from "../core/ApiFetch";
import { SensorAssetStateTemplate } from "../models/SensorAssetStateTemplate";
import { Log } from "../models/Log";
import { AssetStateTemplate } from "../models/AssetStateTemplate";

/**
 * Api services for the `SensorAssetStateTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /SensorAssetStateTemplates/:id/trackingLogs/:fk
 */
export async function SensorAssetStateTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo assetStateTemplate.
 * /SensorAssetStateTemplates/:id/assetStateTemplate
 */
export async function SensorAssetStateTemplate_GetAssetStateTemplate(
  id: string
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/:id/assetStateTemplate",
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de SensorAssetStateTemplate.
 * /SensorAssetStateTemplates/:id/trackingLogs
 */
export async function SensorAssetStateTemplate_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de SensorAssetStateTemplate.
 * /SensorAssetStateTemplates/:id/trackingLogs/count
 */
export async function SensorAssetStateTemplate_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SensorAssetStateTemplates
 */
export async function SensorAssetStateTemplate_create(
  data: any = {}
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/SensorAssetStateTemplates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SensorAssetStateTemplates/:id/exists
 */
export async function SensorAssetStateTemplate_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SensorAssetStateTemplates/:id
 */
export async function SensorAssetStateTemplate_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorAssetStateTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SensorAssetStateTemplates
 */
export async function SensorAssetStateTemplate_find(
  filter: Filter<any> = {}
): Promise<SensorAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SensorAssetStateTemplates/findOne
 */
export async function SensorAssetStateTemplate_findOne(
  filter: Filter<any> = {}
): Promise<SensorAssetStateTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SensorAssetStateTemplates/:id
 */
export async function SensorAssetStateTemplate_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/SensorAssetStateTemplates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SensorAssetStateTemplates/count
 */
export async function SensorAssetStateTemplate_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStateTemplates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
