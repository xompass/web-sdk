import { ApiFetch, Filter } from "../core/ApiFetch";
import { SensorAssetState } from "../models/SensorAssetState";
import { Log } from "../models/Log";
import { AssetState } from "../models/AssetState";

/**
 * Api services for the `SensorAssetState` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /SensorAssetStates/:id/trackingLogs/:fk
 */
export async function SensorAssetState_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo assetState.
 * /SensorAssetStates/:id/assetState
 */
export async function SensorAssetState_GetAssetState(
  id: string
): Promise<AssetState> {
  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/:id/assetState",
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de SensorAssetState.
 * /SensorAssetStates/:id/trackingLogs
 */
export async function SensorAssetState_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de SensorAssetState.
 * /SensorAssetStates/:id/trackingLogs/count
 */
export async function SensorAssetState_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SensorAssetStates
 */
export async function SensorAssetState_create(
  data: any = {}
): Promise<SensorAssetState> {
  return ApiFetch({
    method: "POST",
    url: "/SensorAssetStates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SensorAssetStates/:id/exists
 */
export async function SensorAssetState_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SensorAssetStates/:id
 */
export async function SensorAssetState_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorAssetState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SensorAssetStates
 */
export async function SensorAssetState_find(
  filter: Filter<any> = {}
): Promise<SensorAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SensorAssetStates/findOne
 */
export async function SensorAssetState_findOne(
  filter: Filter<any> = {}
): Promise<SensorAssetState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SensorAssetStates/:id
 */
export async function SensorAssetState_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/SensorAssetStates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SensorAssetStates/count
 */
export async function SensorAssetState_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorAssetStates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
