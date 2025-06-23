import { ApiFetch, UploadFile, Filter } from '../core/ApiFetch';
import { AssetOperabilitySummary } from '../models/AssetOperabilitySummary';
import { AssetRestrictionTable } from '../models/AssetRestrictionTable';
import { AssetStorageContainer } from '../models/Asset';
import { Dataset } from '../models/Dataset';
import { EdgeAgent } from '../models/EdgeAgent';
import { EdgeAgentAsset } from '../models/EdgeAgent';
import { Event } from '../models/Event';
import { EventTrigger } from '../models/EventTrigger';
import { HealthcheckEvent } from '../models/HealthcheckEvent';
import { RateLimit } from '../models/RateLimit';
import { SensorWithCurrentState } from '../models/Sensor';
import { EventTriggerAssetState } from '../models/EventTriggerAssetState';
import { SensorAssetState } from '../models/SensorAssetState';
import { EventComment } from '../models/EventComment';
import { EventStateChange } from '../models/EventStateChange';

/**
 * Api services for the `Asset` model.
 */

/**
 * Actualizar un elemento relacionado por id para operabilitySummaries.
 * /Assets/:id/operabilitySummaries/:fk
 */
export async function Asset_UpdateByIdOperabilitySummaries(
  id: string,
  fk: string,
  data: any = {},
): Promise<AssetOperabilitySummary> {
  return ApiFetch({
    method: 'PUT',
    url: '/Assets/:id/operabilitySummaries/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Capta la relación hasOne restrictionTable.
 * /Assets/:id/restrictionTable
 */
export async function Asset_GetRestrictionTable(
  id: string,
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/restrictionTable',
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación hasOne container.
 * /Assets/:id/container
 */
export async function Asset_GetContainer(
  id: string,
): Promise<AssetStorageContainer> {
  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para datasets.
 * /Assets/:id/datasets/:fk
 */
export async function Asset_FindByIdDatasets(
  id: string,
  fk: string,
): Promise<Dataset> {
  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/datasets/:fk',
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
  fk: string,
): Promise<EdgeAgent> {
  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/edgeAgents/:fk',
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
  data: any = {},
): Promise<EdgeAgentAsset> {
  return ApiFetch({
    method: 'PUT',
    url: '/Assets/:id/edgeAgents/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación edgeAgents con un elemento por id.
 * /Assets/:id/edgeAgents/rel/:fk
 */
export async function Asset_UnlinkEdgeAgents(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Assets/:id/edgeAgents/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para healthcheckEvents.
 * /Assets/:id/healthcheckEvents/:fk
 */
export async function Asset_FindByIdHealthcheckEvents(
  id: string,
  fk: string,
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/healthcheckEvents/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para healthcheckEvents.
 * /Assets/:id/healthcheckEvents/:fk
 */
export async function Asset_UpdateByIdHealthcheckEvents(
  id: string,
  fk: string,
  data: any = {},
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: 'PUT',
    url: '/Assets/:id/healthcheckEvents/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Capta la relación hasOne rateLimit.
 * /Assets/:id/rateLimit
 */
export async function Asset_GetRateLimit(id: string): Promise<RateLimit> {
  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/rateLimit',
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en rateLimit de este modelo.
 * /Assets/:id/rateLimit
 */
export async function Asset_CreateRateLimit(
  id: string,
  data: any = {},
): Promise<RateLimit> {
  return ApiFetch({
    method: 'POST',
    url: '/Assets/:id/rateLimit',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Actualizar rateLimit de este modelo.
 * /Assets/:id/rateLimit
 */
export async function Asset_UpdateRateLimit(
  id: string,
  data: any = {},
): Promise<RateLimit> {
  return ApiFetch({
    method: 'PUT',
    url: '/Assets/:id/rateLimit',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * operabilitySummaries consultas de Asset.
 * /Assets/:id/operabilitySummaries
 */
export async function Asset_GetOperabilitySummaries(
  id: string,
  filter: Filter<any> = {},
): Promise<AssetOperabilitySummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/operabilitySummaries',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos operabilitySummaries de Asset.
 * /Assets/:id/operabilitySummaries/count
 */
export async function Asset_CountOperabilitySummaries(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/operabilitySummaries/count',
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
  filter: Filter<any> = {},
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/datasets',
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
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/datasets/count',
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
  filter: Filter<any> = {},
): Promise<EdgeAgent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/edgeAgents',
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
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/edgeAgents/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * events consultas de Asset.
 * /Assets/:id/events
 */
export async function Asset_GetEvents(
  id: string,
  filter: Filter<any> = {},
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/events',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * eventTriggers consultas de Asset.
 * /Assets/:id/eventTriggers
 */
export async function Asset_GetEventTriggers(
  id: string,
  filter: Filter<any> = {},
): Promise<EventTrigger[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/eventTriggers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * healthcheckEvents consultas de Asset.
 * /Assets/:id/healthcheckEvents
 */
export async function Asset_GetHealthcheckEvents(
  id: string,
  filter: Filter<any> = {},
): Promise<HealthcheckEvent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/healthcheckEvents',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en healthcheckEvents de este modelo.
 * /Assets/:id/healthcheckEvents
 */
export async function Asset_CreateHealthcheckEvents(
  id: string,
  data: any = {},
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: 'POST',
    url: '/Assets/:id/healthcheckEvents',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Suscribe to web-socket service (WSS)
 * /Assets/:id/sockets/:socketId/subscribe
 */
export async function Asset_subscribe(
  id: string,
  socketId: string,
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Assets/:id/sockets/:socketId/subscribe',
    routeParams: {
      id,
      socketId,
    },
    body: {
      id,
      socketId,
    },
  });
}
/**
 * Unsuscribe from web-socket service (WSS)
 * /Assets/:id/sockets/:socketId/unsubscribe
 */
export async function Asset_unsubscribe(
  id: string,
  socketId: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Assets/:id/sockets/:socketId/unsubscribe',
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
    method: 'GET',
    url: '/Assets/:id/container/info',
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
    method: 'GET',
    url: '/Assets/:id/container/files',
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
    method: 'GET',
    url: '/Assets/:id/container/files/:file',
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
  datasourceName?: string,
  resourceName?: string,
): Promise<void> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }
  if (resourceName != null) {
    _urlParams['resource_name'] = resourceName;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Assets/:id/container/files/:file',
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
  file: File,
  resourceName?: string,
  onProgress?: (progress: number) => void,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }
  if (resourceName != null) {
    _urlParams['resource_name'] = resourceName;
  }

  return UploadFile({
    url: '/Assets/:id/container/upload',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    file: file,
    onProgress: onProgress,
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
  datasourceName?: string,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/container/download/:file',
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
  filter: Filter<any> = {},
): Promise<SensorWithCurrentState> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/sensors/withCurrentState',
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
  minimalResponse?: boolean,
  timeZone?: string,
): Promise<any> {
  const _urlParams: any = {};
  if (minimalResponse != null) {
    _urlParams['minimal_response'] = minimalResponse;
  }
  if (timeZone != null) {
    _urlParams['timeZone'] = timeZone;
  }

  return ApiFetch({
    method: 'POST',
    url: '/Assets/:id/assetStates/setAndQueue',
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
  filter: Filter<any> = {},
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/datasets/filter',
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
    method: 'GET',
    url: '/Assets/:id/currentTTL',
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
  ttl?: number,
  minimalResponse?: string,
): Promise<void> {
  const _urlParams: any = {};
  if (ttl != null) {
    _urlParams['ttl'] = ttl;
  }
  if (minimalResponse != null) {
    _urlParams['minimal_response'] = minimalResponse;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Assets/:id/datasets/ttl',
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
  ttl?: number,
  minimalResponse?: string,
): Promise<void> {
  const _urlParams: any = {};
  if (ttl != null) {
    _urlParams['ttl'] = ttl;
  }
  if (minimalResponse != null) {
    _urlParams['minimal_response'] = minimalResponse;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Assets/:id/events/ttl',
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
  id: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/restrictionTable/merged',
    routeParams: {
      id,
    },
  });
}
/**
 * Notify an asset health status
 * /Assets/:id/notify-health-status
 */
export async function Asset_notifyHealthStatus(
  id: string,
  status: any,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Assets/:id/notify-health-status',
    routeParams: {
      id,
    },
    body: {
      status,
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
  filter: Filter<any> = {},
): Promise<EventTriggerAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/assetStates/:nk/eventTriggerAssetStates',
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
  filter: Filter<any> = {},
): Promise<SensorAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Assets/:id/assetStates/:nk/states',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para comments.
 * /Assets/:id/healthcheckEvents/:nk/comments/:fk
 */
export async function Asset_DestroyByIdHealthcheckEventsComments(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Assets/:id/healthcheckEvents/:nk/comments/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para comments.
 * /Assets/:id/healthcheckEvents/:nk/comments/:fk
 */
export async function Asset_UpdateByIdHealthcheckEventsComments(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventComment> {
  return ApiFetch({
    method: 'PUT',
    url: '/Assets/:id/healthcheckEvents/:nk/comments/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Crea una nueva instancia en comments de este modelo.
 * /Assets/:id/healthcheckEvents/:nk/comments
 */
export async function Asset_CreateHealthcheckEventsComments(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventComment> {
  return ApiFetch({
    method: 'POST',
    url: '/Assets/:id/healthcheckEvents/:nk/comments',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Crea una nueva instancia en stateChanges de este modelo.
 * /Assets/:id/healthcheckEvents/:nk/stateChanges
 */
export async function Asset_CreateHealthcheckEventsStateChanges(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventStateChange> {
  return ApiFetch({
    method: 'POST',
    url: '/Assets/:id/healthcheckEvents/:nk/stateChanges',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
