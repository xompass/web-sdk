import { ApiFetch, Filter } from "../core/ApiFetch";
import { Asset } from "../models/Asset";
import { AssetMilestone } from "../models/AssetMilestone";
import { AssetRestrictionTable } from "../models/AssetRestrictionTable";
import { Credential } from "../models/Credential";
import { Dataset } from "../models/Dataset";
import { EdgeAgent } from "../models/EdgeAgent";
import { Log } from "../models/Log";
import { Project } from "../models/Project";
import { Sensor } from "../models/Sensor";
import { EventTriggerAssetState } from "../models/EventTriggerAssetState";
import { SensorAssetState } from "../models/SensorAssetState";

/**
 * Api services for the `Asset` model.
 */

/**
 * Capta la relación hasOne config.
 * /Assets/:id/config
 */
export async function Asset_GetConfig(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/config",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en config de este modelo.
 * /Assets/:id/config
 */
export async function Asset_CreateConfig(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/config",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar config de este modelo.
 * /Assets/:id/config
 */
export async function Asset_UpdateConfig(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/config",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime config de este modelo.
 * /Assets/:id/config
 */
export async function Asset_DestroyConfig(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/config",
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación hasOne milestone.
 * /Assets/:id/milestone
 */
export async function Asset_GetMilestone(id: string): Promise<AssetMilestone> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/milestone",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en milestone de este modelo.
 * /Assets/:id/milestone
 */
export async function Asset_CreateMilestone(
  id: string,
  data: any = {}
): Promise<AssetMilestone> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/milestone",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar milestone de este modelo.
 * /Assets/:id/milestone
 */
export async function Asset_UpdateMilestone(
  id: string,
  data: any = {}
): Promise<AssetMilestone> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/milestone",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime milestone de este modelo.
 * /Assets/:id/milestone
 */
export async function Asset_DestroyMilestone(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/milestone",
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación hasOne restrictionTable.
 * /Assets/:id/restrictionTable
 */
export async function Asset_GetRestrictionTable(
  id: string
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/restrictionTable",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en restrictionTable de este modelo.
 * /Assets/:id/restrictionTable
 */
export async function Asset_CreateRestrictionTable(
  id: string,
  data: any = {}
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar restrictionTable de este modelo.
 * /Assets/:id/restrictionTable
 */
export async function Asset_UpdateRestrictionTable(
  id: string,
  data: any = {}
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime restrictionTable de este modelo.
 * /Assets/:id/restrictionTable
 */
export async function Asset_DestroyRestrictionTable(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/restrictionTable",
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación hasOne container.
 * /Assets/:id/container
 */
export async function Asset_GetContainer(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en container de este modelo.
 * /Assets/:id/container
 */
export async function Asset_CreateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/container",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar container de este modelo.
 * /Assets/:id/container
 */
export async function Asset_UpdateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/container",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime container de este modelo.
 * /Assets/:id/container
 */
export async function Asset_DestroyContainer(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para credentials.
 * /Assets/:id/credentials/:fk
 */
export async function Asset_FindByIdCredentials(
  id: string,
  fk: string
): Promise<Credential> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/credentials/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para credentials.
 * /Assets/:id/credentials/:fk
 */
export async function Asset_DestroyByIdCredentials(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/credentials/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para credentials.
 * /Assets/:id/credentials/:fk
 */
export async function Asset_UpdateByIdCredentials(
  id: string,
  fk: string,
  data: any = {}
): Promise<Credential> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/credentials/:fk",
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
 * Añadir un elemento relacionado por id para credentials.
 * /Assets/:id/credentials/rel/:fk
 */
export async function Asset_LinkCredentials(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/credentials/rel/:fk",
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
 * Eliminar la relación credentials con un elemento por id.
 * /Assets/:id/credentials/rel/:fk
 */
export async function Asset_UnlinkCredentials(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/credentials/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación credentials con un elemento por id.
 * /Assets/:id/credentials/rel/:fk
 */
export async function Asset_ExistsCredentials(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Assets/:id/credentials/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para datasets.
 * /Assets/:id/datasets/:fk
 */
export async function Asset_FindByIdDatasets(
  id: string,
  fk: string
): Promise<Dataset> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/datasets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para edgeAgents.
 * /Assets/:id/edgeAgents/:fk
 */
export async function Asset_FindByIdEdgeAgents(
  id: string,
  fk: string
): Promise<EdgeAgent> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/edgeAgents/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para edgeAgents.
 * /Assets/:id/edgeAgents/rel/:fk
 */
export async function Asset_LinkEdgeAgents(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/edgeAgents/rel/:fk",
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
 * Eliminar la relación edgeAgents con un elemento por id.
 * /Assets/:id/edgeAgents/rel/:fk
 */
export async function Asset_UnlinkEdgeAgents(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/edgeAgents/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Assets/:id/trackingLogs/:fk
 */
export async function Asset_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo project.
 * /Assets/:id/project
 */
export async function Asset_GetProject(id: string): Promise<Project> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/project",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para sensors.
 * /Assets/:id/sensors/:fk
 */
export async function Asset_FindByIdSensors(
  id: string,
  fk: string
): Promise<Sensor> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/sensors/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para sensors.
 * /Assets/:id/sensors/:fk
 */
export async function Asset_UpdateByIdSensors(
  id: string,
  fk: string,
  data: any = {}
): Promise<Sensor> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/sensors/:fk",
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
 * credentials consultas de Asset.
 * /Assets/:id/credentials
 */
export async function Asset_GetCredentials(
  id: string,
  filter: Filter<any> = {}
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/credentials",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en credentials de este modelo.
 * /Assets/:id/credentials
 */
export async function Asset_CreateCredentials(
  id: string,
  data: any = {}
): Promise<Credential> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/credentials",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos credentials de Asset.
 * /Assets/:id/credentials/count
 */
export async function Asset_CountCredentials(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/credentials/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * datasets consultas de Asset.
 * /Assets/:id/datasets
 */
export async function Asset_GetDatasets(
  id: string,
  filter: Filter<any> = {}
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/datasets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos datasets de Asset.
 * /Assets/:id/datasets/count
 */
export async function Asset_CountDatasets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/datasets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * edgeAgents consultas de Asset.
 * /Assets/:id/edgeAgents
 */
export async function Asset_GetEdgeAgents(
  id: string,
  filter: Filter<any> = {}
): Promise<EdgeAgent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/edgeAgents",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos edgeAgents de Asset.
 * /Assets/:id/edgeAgents/count
 */
export async function Asset_CountEdgeAgents(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/edgeAgents/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Asset.
 * /Assets/:id/trackingLogs
 */
export async function Asset_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Asset.
 * /Assets/:id/trackingLogs/count
 */
export async function Asset_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * sensors consultas de Asset.
 * /Assets/:id/sensors
 */
export async function Asset_GetSensors(
  id: string,
  filter: Filter<any> = {}
): Promise<Sensor[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/sensors",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en sensors de este modelo.
 * /Assets/:id/sensors
 */
export async function Asset_CreateSensors(
  id: string,
  data: any = {}
): Promise<Sensor> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/sensors",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos sensors de Asset.
 * /Assets/:id/sensors/count
 */
export async function Asset_CountSensors(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/sensors/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Assets
 */
export async function Asset_create(data: any = {}): Promise<Asset> {
  return ApiFetch({
    method: "POST",
    url: "/Assets",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Assets/:id/exists
 */
export async function Asset_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Assets/:id
 */
export async function Asset_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Assets
 */
export async function Asset_find(filter: Filter<any> = {}): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Assets/findOne
 */
export async function Asset_findOne(filter: Filter<any> = {}): Promise<Asset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Assets/:id
 */
export async function Asset_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Assets/count
 */
export async function Asset_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Suscribe to web-socket service (WSS)
 * /Assets/:id/sockets/:socketId/subscribe
 */
export async function Asset_subscribe(
  id: string,
  socketId: string
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/sockets/:socketId/subscribe",
    routeParams: {
      id,
      socketId,
    },
    body: {},
  });
}
/**
 * Unsuscribe from web-socket service (WSS)
 * /Assets/:id/sockets/:socketId/unsubscribe
 */
export async function Asset_unsubscribe(
  id: string,
  socketId: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/sockets/:socketId/unsubscribe",
    routeParams: {
      id,
      socketId,
    },
  });
}
/**
 * Get information about specified container
 * /Assets/:id/container/info
 */
export async function Asset_getContainerInfo(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container/info",
    routeParams: {
      id,
    },
  });
}
/**
 * List all files within specified container
 * /Assets/:id/container/files
 */
export async function Asset_getFiles(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container/files",
    routeParams: {
      id,
    },
  });
}
/**
 * Get information for specified file within specified container
 * /Assets/:id/container/files/:file
 */
export async function Asset_getFile(id: string, file: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container/files/:file",
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Delete a file within a given container by name
 * /Assets/:id/container/files/:file
 */
export async function Asset_removeFile(
  id: string,
  property: string,
  file: string,
  datasourceName: string,
  resourceName: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }
  if (datasourceName != null) {
    _urlParams["datasourceName"] = datasourceName;
  }
  if (resourceName != null) {
    _urlParams["resource_name"] = resourceName;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/container/files/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /Assets/:id/container/upload
 */
export async function Asset_upload(
  id: string,
  property: string,
  resourceName: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }
  if (resourceName != null) {
    _urlParams["resource_name"] = resourceName;
  }

  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/container/upload",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Download a file within specified container
 * /Assets/:id/container/download/:file
 */
export async function Asset_download(
  id: string,
  property: string,
  file: string,
  datasourceName: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }
  if (datasourceName != null) {
    _urlParams["datasourceName"] = datasourceName;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Get sensors with its current state
 * /Assets/:id/sensors/withCurrentState
 */
export async function Asset_getSensorsWithCurrentState(
  id: string,
  filter: Filter<any> = {}
): Promise<Sensor> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/sensors/withCurrentState",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Set the current asset state and queue the next one, using its cron configuration
 * /Assets/:id/assetStates/setAndQueue
 */
export async function Asset_setAndQueueAssetStates(
  id: string,
  minimalResponse: boolean,
  timeZone: string
): Promise<any> {
  const _urlParams: any = {};
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }
  if (timeZone != null) {
    _urlParams["timeZone"] = timeZone;
  }

  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/assetStates/setAndQueue",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Find and filter datasets
 * /Assets/:id/datasets/filter
 */
export async function Asset_findAndFilterDatasets(
  id: string,
  filter: Filter<any> = {}
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/datasets/filter",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get the current TTL, if there is AssetConfig dataTTL, then get the CustomerConfig dataTTL info)
 * /Assets/:id/currentTTL
 */
export async function Asset_getCurrentTTL(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/currentTTL",
    routeParams: {
      id,
    },
  });
}
/**
 * Delete datasets using a TTL condition since it was created
 * /Assets/:id/datasets/ttl
 */
export async function Asset_deleteDatasetsByTTL(
  id: string,
  ttl: number,
  minimalResponse: string
): Promise<any> {
  const _urlParams: any = {};
  if (ttl != null) {
    _urlParams["ttl"] = ttl;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/datasets/ttl",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Delete events using a TTL condition since it was created
 * /Assets/:id/events/ttl
 */
export async function Asset_deleteEventsByTTL(
  id: string,
  ttl: number,
  minimalResponse: string
): Promise<any> {
  const _urlParams: any = {};
  if (ttl != null) {
    _urlParams["ttl"] = ttl;
  }
  if (minimalResponse != null) {
    _urlParams["minimal_response"] = minimalResponse;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/events/ttl",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get merged restriction table
 * /Assets/:id/restrictionTable/merged
 */
export async function Asset_getMergedRestrictionTable(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/restrictionTable/merged",
    routeParams: {
      id,
    },
  });
}
/**
 * eventTriggerAssetStates consultas de AssetState.
 * /Assets/:id/assetStates/:nk/eventTriggerAssetStates
 */
export async function Asset_GetAssetStatesEventTriggerAssetStates(
  id: string,
  nk: string,
  filter: Filter<any> = {}
): Promise<EventTriggerAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/assetStates/:nk/eventTriggerAssetStates",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * states consultas de AssetState.
 * /Assets/:id/assetStates/:nk/states
 */
export async function Asset_GetAssetStatesStates(
  id: string,
  nk: string,
  filter: Filter<any> = {}
): Promise<SensorAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/assetStates/:nk/states",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
