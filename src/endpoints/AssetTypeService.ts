import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetType } from "../models/AssetType";
import { AssetWizardType } from "../models/AssetWizardType";
import { EventType } from "../models/EventType";
import { Log } from "../models/Log";
import { SensorType } from "../models/SensorType";

/**
 * Api services for the `AssetType` model.
 */

/**
 * Buscar un elemento relacionado por id para assetWizardTypes.
 * /AssetTypes/:id/assetWizardTypes/:fk
 */
export async function AssetType_FindByIdAssetWizardTypes(
  id: string,
  fk: string
): Promise<AssetWizardType> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id/assetWizardTypes/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para assetWizardTypes.
 * /AssetTypes/:id/assetWizardTypes/:fk
 */
export async function AssetType_DestroyByIdAssetWizardTypes(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTypes/:id/assetWizardTypes/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para assetWizardTypes.
 * /AssetTypes/:id/assetWizardTypes/:fk
 */
export async function AssetType_UpdateByIdAssetWizardTypes(
  id: string,
  fk: string,
  data: any = {}
): Promise<AssetWizardType> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTypes/:id/assetWizardTypes/:fk",
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
 * Añadir un elemento relacionado por id para assetWizardTypes.
 * /AssetTypes/:id/assetWizardTypes/rel/:fk
 */
export async function AssetType_LinkAssetWizardTypes(
  id: string,
  fk: string
): Promise<AssetWizardType> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTypes/:id/assetWizardTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación assetWizardTypes con un elemento por id.
 * /AssetTypes/:id/assetWizardTypes/rel/:fk
 */
export async function AssetType_UnlinkAssetWizardTypes(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTypes/:id/assetWizardTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para eventTypes.
 * /AssetTypes/:id/eventTypes/rel/:fk
 */
export async function AssetType_LinkEventTypes(
  id: string,
  fk: string
): Promise<EventType> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTypes/:id/eventTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación eventTypes con un elemento por id.
 * /AssetTypes/:id/eventTypes/rel/:fk
 */
export async function AssetType_UnlinkEventTypes(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTypes/:id/eventTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetTypes/:id/trackingLogs/:fk
 */
export async function AssetType_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para sensorTypes.
 * /AssetTypes/:id/sensorTypes/rel/:fk
 */
export async function AssetType_LinkSensorTypes(
  id: string,
  fk: string
): Promise<SensorType> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTypes/:id/sensorTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación sensorTypes con un elemento por id.
 * /AssetTypes/:id/sensorTypes/rel/:fk
 */
export async function AssetType_UnlinkSensorTypes(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTypes/:id/sensorTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * assetWizardTypes consultas de AssetType.
 * /AssetTypes/:id/assetWizardTypes
 */
export async function AssetType_GetAssetWizardTypes(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetWizardType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id/assetWizardTypes",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en assetWizardTypes de este modelo.
 * /AssetTypes/:id/assetWizardTypes
 */
export async function AssetType_CreateAssetWizardTypes(
  id: string,
  data: any = {}
): Promise<AssetWizardType> {
  return ApiFetch({
    method: "POST",
    url: "/AssetTypes/:id/assetWizardTypes",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos assetWizardTypes de AssetType.
 * /AssetTypes/:id/assetWizardTypes/count
 */
export async function AssetType_CountAssetWizardTypes(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id/assetWizardTypes/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de AssetType.
 * /AssetTypes/:id/trackingLogs
 */
export async function AssetType_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetType.
 * /AssetTypes/:id/trackingLogs/count
 */
export async function AssetType_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetTypes
 */
export async function AssetType_create(data: any = {}): Promise<AssetType> {
  return ApiFetch({
    method: "POST",
    url: "/AssetTypes",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetTypes/:id/exists
 */
export async function AssetType_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetTypes/:id
 */
export async function AssetType_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetTypes
 */
export async function AssetType_find(
  filter: Filter<any> = {}
): Promise<AssetType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetTypes/findOne
 */
export async function AssetType_findOne(
  filter: Filter<any> = {}
): Promise<AssetType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetTypes/:id
 */
export async function AssetType_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTypes/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetTypes/count
 */
export async function AssetType_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTypes/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
