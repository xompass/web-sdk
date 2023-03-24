import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetTemplate } from "../models/AssetTemplate";
import { Log } from "../models/Log";
import { Project } from "../models/Project";
import { SensorTemplate } from "../models/SensorTemplate";
import { EventTriggerAssetStateTemplate } from "../models/EventTriggerAssetStateTemplate";
import { SensorAssetStateTemplate } from "../models/SensorAssetStateTemplate";

/**
 * Api services for the `AssetTemplate` model.
 */

/**
 * Capta la relación hasOne config.
 * /AssetTemplates/:id/config
 */
export async function AssetTemplate_GetConfig(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/config",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en config de este modelo.
 * /AssetTemplates/:id/config
 */
export async function AssetTemplate_CreateConfig(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/AssetTemplates/:id/config",
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
 * /AssetTemplates/:id/config
 */
export async function AssetTemplate_UpdateConfig(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTemplates/:id/config",
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
 * /AssetTemplates/:id/config
 */
export async function AssetTemplate_DestroyConfig(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTemplates/:id/config",
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación hasOne container.
 * /AssetTemplates/:id/container
 */
export async function AssetTemplate_GetContainer(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en container de este modelo.
 * /AssetTemplates/:id/container
 */
export async function AssetTemplate_CreateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/AssetTemplates/:id/container",
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
 * /AssetTemplates/:id/container
 */
export async function AssetTemplate_UpdateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTemplates/:id/container",
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
 * /AssetTemplates/:id/container
 */
export async function AssetTemplate_DestroyContainer(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTemplates/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetTemplates/:id/trackingLogs/:fk
 */
export async function AssetTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo project.
 * /AssetTemplates/:id/project
 */
export async function AssetTemplate_GetProject(id: string): Promise<Project> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/project",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para sensorTemplates.
 * /AssetTemplates/:id/sensorTemplates/:fk
 */
export async function AssetTemplate_FindByIdSensorTemplates(
  id: string,
  fk: string
): Promise<SensorTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/sensorTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para sensorTemplates.
 * /AssetTemplates/:id/sensorTemplates/:fk
 */
export async function AssetTemplate_UpdateByIdSensorTemplates(
  id: string,
  fk: string,
  data: any = {}
): Promise<SensorTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTemplates/:id/sensorTemplates/:fk",
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
 * trackingLogs consultas de AssetTemplate.
 * /AssetTemplates/:id/trackingLogs
 */
export async function AssetTemplate_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetTemplate.
 * /AssetTemplates/:id/trackingLogs/count
 */
export async function AssetTemplate_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * sensorTemplates consultas de AssetTemplate.
 * /AssetTemplates/:id/sensorTemplates
 */
export async function AssetTemplate_GetSensorTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/sensorTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en sensorTemplates de este modelo.
 * /AssetTemplates/:id/sensorTemplates
 */
export async function AssetTemplate_CreateSensorTemplates(
  id: string,
  data: any = {}
): Promise<SensorTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/AssetTemplates/:id/sensorTemplates",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos sensorTemplates de AssetTemplate.
 * /AssetTemplates/:id/sensorTemplates/count
 */
export async function AssetTemplate_CountSensorTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/sensorTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetTemplates
 */
export async function AssetTemplate_create(
  data: any = {}
): Promise<AssetTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/AssetTemplates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetTemplates/:id/exists
 */
export async function AssetTemplate_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetTemplates/:id
 */
export async function AssetTemplate_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetTemplates
 */
export async function AssetTemplate_find(
  filter: Filter<any> = {}
): Promise<AssetTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetTemplates/findOne
 */
export async function AssetTemplate_findOne(
  filter: Filter<any> = {}
): Promise<AssetTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetTemplates/:id
 */
export async function AssetTemplate_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTemplates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetTemplates/count
 */
export async function AssetTemplate_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Suscribe to web-socket service (WSS)
 * /AssetTemplates/:id/sockets/:socketId/subscribe
 */
export async function AssetTemplate_subscribe(
  id: string,
  socketId: string
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetTemplates/:id/sockets/:socketId/subscribe",
    routeParams: {
      id,
      socketId,
    },
    body: {},
  });
}
/**
 * Unsuscribe from web-socket service (WSS)
 * /AssetTemplates/:id/sockets/:socketId/unsubscribe
 */
export async function AssetTemplate_unsubscribe(
  id: string,
  socketId: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetTemplates/:id/sockets/:socketId/unsubscribe",
    routeParams: {
      id,
      socketId,
    },
  });
}
/**
 * Get information about specified container
 * /AssetTemplates/:id/container/info
 */
export async function AssetTemplate_getContainerInfo(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/container/info",
    routeParams: {
      id,
    },
  });
}
/**
 * List all files within specified container
 * /AssetTemplates/:id/container/files
 */
export async function AssetTemplate_getFiles(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/container/files",
    routeParams: {
      id,
    },
  });
}
/**
 * Get information for specified file within specified container
 * /AssetTemplates/:id/container/files/:file
 */
export async function AssetTemplate_getFile(
  id: string,
  file: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/container/files/:file",
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Delete a file within a given container by name
 * /AssetTemplates/:id/container/files/:file
 */
export async function AssetTemplate_removeFile(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/AssetTemplates/:id/container/files/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /AssetTemplates/:id/container/upload
 */
export async function AssetTemplate_upload(
  id: string,
  property: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "POST",
    url: "/AssetTemplates/:id/container/upload",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Download a file within specified container
 * /AssetTemplates/:id/container/download/:file
 */
export async function AssetTemplate_download(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Instantiate and instantiate the asset template structure (sensors, states, etc.)
 * /AssetTemplates/:id/instantiate
 */
export async function AssetTemplate_instantiate(
  id: string,
  options: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/AssetTemplates/:id/instantiate",
    routeParams: {
      id,
    },
    body: {
      options,
    },
  });
}
/**
 * eventTriggerAssetStateTemplates consultas de AssetStateTemplate.
 * /AssetTemplates/:id/assetStateTemplates/:nk/eventTriggerAssetStateTemplates
 */
export async function AssetTemplate_GetAssetStateTemplatesEventTriggerAssetStateTemplates(
  id: string,
  nk: string,
  filter: Filter<any> = {}
): Promise<EventTriggerAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/assetStateTemplates/:nk/eventTriggerAssetStateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * stateTemplates consultas de AssetStateTemplate.
 * /AssetTemplates/:id/assetStateTemplates/:nk/stateTemplates
 */
export async function AssetTemplate_GetAssetStateTemplatesStateTemplates(
  id: string,
  nk: string,
  filter: Filter<any> = {}
): Promise<SensorAssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetTemplates/:id/assetStateTemplates/:nk/stateTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
