import { ApiFetch, Filter } from '../core/ApiFetch';
import { AssetTemplateStorageContainer } from '../models/AssetTemplate';
import { File } from '../models/File';
import { EventTriggerAssetStateTemplate } from '../models/EventTriggerAssetStateTemplate';
import { SensorAssetStateTemplate } from '../models/SensorAssetStateTemplate';

/**
 * Api services for the `AssetTemplate` model.
 */

/**
 * Capta la relación hasOne container.
 * /AssetTemplates/:id/container
 */
export async function AssetTemplate_GetContainer(
  id: string
): Promise<AssetTemplateStorageContainer> {
  return ApiFetch({
    method: 'GET',
    url: '/AssetTemplates/:id/container',
    routeParams: {
      id,
    },
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
    method: 'PUT',
    url: '/AssetTemplates/:id/sockets/:socketId/subscribe',
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
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/AssetTemplates/:id/sockets/:socketId/unsubscribe',
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
    method: 'GET',
    url: '/AssetTemplates/:id/container/info',
    routeParams: {
      id,
    },
  });
}
/**
 * List all files within specified container
 * /AssetTemplates/:id/container/files
 */
export async function AssetTemplate_getFiles(id: string): Promise<File[]> {
  return ApiFetch({
    method: 'GET',
    url: '/AssetTemplates/:id/container/files',
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
): Promise<File> {
  return ApiFetch({
    method: 'GET',
    url: '/AssetTemplates/:id/container/files/:file',
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
): Promise<void> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/AssetTemplates/:id/container/files/:file',
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
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'POST',
    url: '/AssetTemplates/:id/container/upload',
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
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'GET',
    url: '/AssetTemplates/:id/container/download/:file',
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
    method: 'POST',
    url: '/AssetTemplates/:id/instantiate',
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
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/AssetTemplates/:id/assetStateTemplates/:nk/eventTriggerAssetStateTemplates',
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
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/AssetTemplates/:id/assetStateTemplates/:nk/stateTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
