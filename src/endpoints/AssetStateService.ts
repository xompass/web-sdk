import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetState } from "../models/AssetState";
import { EventTriggerAssetState } from "../models/EventTriggerAssetState";
import { Log } from "../models/Log";
import { Sensor } from "../models/Sensor";
import { SensorAssetState } from "../models/SensorAssetState";

/**
 * Api services for the `AssetState` model.
 */

/**
 * Buscar un elemento relacionado por id para eventTriggerAssetStates.
 * /AssetStates/:id/eventTriggerAssetStates/:fk
 */
export async function AssetState_FindByIdEventTriggerAssetStates(
  id: string,
  fk: string
): Promise<EventTriggerAssetState> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/eventTriggerAssetStates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetStates/:id/trackingLogs/:fk
 */
export async function AssetState_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para sensors.
 * /AssetStates/:id/sensors/:fk
 */
export async function AssetState_FindByIdSensors(
  id: string,
  fk: string
): Promise<Sensor> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/sensors/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación sensors con un elemento por id.
 * /AssetStates/:id/sensors/rel/:fk
 */
export async function AssetState_ExistsSensors(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/AssetStates/:id/sensors/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para states.
 * /AssetStates/:id/states/:fk
 */
export async function AssetState_FindByIdStates(
  id: string,
  fk: string
): Promise<SensorAssetState> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/states/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * eventTriggerAssetStates consultas de AssetState.
 * /AssetStates/:id/eventTriggerAssetStates
 */
export async function AssetState_GetEventTriggerAssetStates(
  id: string,
  filter: Filter<any> = {}
): Promise<EventTriggerAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/eventTriggerAssetStates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventTriggerAssetStates de AssetState.
 * /AssetStates/:id/eventTriggerAssetStates/count
 */
export async function AssetState_CountEventTriggerAssetStates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/eventTriggerAssetStates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de AssetState.
 * /AssetStates/:id/trackingLogs
 */
export async function AssetState_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetState.
 * /AssetStates/:id/trackingLogs/count
 */
export async function AssetState_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * sensors consultas de AssetState.
 * /AssetStates/:id/sensors
 */
export async function AssetState_GetSensors(
  id: string,
  filter: Filter<any> = {}
): Promise<Sensor[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/sensors",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos sensors de AssetState.
 * /AssetStates/:id/sensors/count
 */
export async function AssetState_CountSensors(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/sensors/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * states consultas de AssetState.
 * /AssetStates/:id/states
 */
export async function AssetState_GetStates(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/states",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos states de AssetState.
 * /AssetStates/:id/states/count
 */
export async function AssetState_CountStates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/states/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetStates
 */
export async function AssetState_create(data: any = {}): Promise<AssetState> {
  return ApiFetch({
    method: "POST",
    url: "/AssetStates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetStates/:id/exists
 */
export async function AssetState_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetStates/:id
 */
export async function AssetState_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetStates
 */
export async function AssetState_find(
  filter: Filter<any> = {}
): Promise<AssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetStates/findOne
 */
export async function AssetState_findOne(
  filter: Filter<any> = {}
): Promise<AssetState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetStates/:id
 */
export async function AssetState_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetStates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetStates/count
 */
export async function AssetState_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetStates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
