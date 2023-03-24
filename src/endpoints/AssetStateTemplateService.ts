import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetStateTemplate } from "../models/AssetStateTemplate";
import { Log } from "../models/Log";
import { SensorAssetStateTemplate } from "../models/SensorAssetStateTemplate";
import { SensorTemplate } from "../models/SensorTemplate";

/**
 * Api services for the `AssetStateTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetStateTemplates/:id/trackingLogs/:fk
 */
export async function AssetStateTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para stateTemplates.
 * /AssetStateTemplates/:id/stateTemplates/:fk
 */
export async function AssetStateTemplate_FindByIdStateTemplates(
  id: string,
  fk: string
): Promise<SensorAssetStateTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/stateTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para sensorTemplates.
 * /AssetStateTemplates/:id/sensorTemplates/:fk
 */
export async function AssetStateTemplate_FindByIdSensorTemplates(
  id: string,
  fk: string
): Promise<SensorTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/sensorTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación sensorTemplates con un elemento por id.
 * /AssetStateTemplates/:id/sensorTemplates/rel/:fk
 */
export async function AssetStateTemplate_ExistsSensorTemplates(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/AssetStateTemplates/:id/sensorTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de AssetStateTemplate.
 * /AssetStateTemplates/:id/trackingLogs
 */
export async function AssetStateTemplate_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetStateTemplate.
 * /AssetStateTemplates/:id/trackingLogs/count
 */
export async function AssetStateTemplate_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * stateTemplates consultas de AssetStateTemplate.
 * /AssetStateTemplates/:id/stateTemplates
 */
export async function AssetStateTemplate_GetStateTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/stateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos stateTemplates de AssetStateTemplate.
 * /AssetStateTemplates/:id/stateTemplates/count
 */
export async function AssetStateTemplate_CountStateTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/stateTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * sensorTemplates consultas de AssetStateTemplate.
 * /AssetStateTemplates/:id/sensorTemplates
 */
export async function AssetStateTemplate_GetSensorTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/sensorTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos sensorTemplates de AssetStateTemplate.
 * /AssetStateTemplates/:id/sensorTemplates/count
 */
export async function AssetStateTemplate_CountSensorTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/sensorTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetStateTemplates
 */
export async function AssetStateTemplate_create(
  data: any = {}
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/AssetStateTemplates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetStateTemplates/:id/exists
 */
export async function AssetStateTemplate_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetStateTemplates/:id
 */
export async function AssetStateTemplate_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetStateTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetStateTemplates
 */
export async function AssetStateTemplate_find(
  filter: Filter<any> = {}
): Promise<AssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetStateTemplates/findOne
 */
export async function AssetStateTemplate_findOne(
  filter: Filter<any> = {}
): Promise<AssetStateTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetStateTemplates/:id
 */
export async function AssetStateTemplate_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetStateTemplates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetStateTemplates/count
 */
export async function AssetStateTemplate_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStateTemplates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
