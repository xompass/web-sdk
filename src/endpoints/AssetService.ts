import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  UploadFile,
  UploadableFile,
  unwrapCount,
} from "../core/ApiFetch";
import { Asset, AssetStorageContainer } from "../models/Asset";
import { AssetOperabilitySummary } from "../models/AssetOperabilitySummary";
import { AssetRestrictionTable } from "../models/AssetRestrictionTable";
import { Dataset } from "../models/Dataset";
import { EdgeAgent, EdgeAgentAsset } from "../models/EdgeAgent";
import { Event } from "../models/Event";
import { EventComment } from "../models/EventComment";
import { EventStateChange } from "../models/EventStateChange";
import { EventTrigger } from "../models/EventTrigger";
import { EventTriggerAssetState } from "../models/EventTriggerAssetState";
import { HealthcheckEvent } from "../models/HealthcheckEvent";
import { RateLimit } from "../models/RateLimit";
import { SensorWithCurrentState } from "../models/Sensor";
import { SensorAssetState } from "../models/SensorAssetState";

/**
 * Update a related item by id for operabilitySummaries.
 * /Assets/:id/operabilitySummaries/:fk
 */
export async function Asset_UpdateByIdOperabilitySummaries(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<AssetOperabilitySummary> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/operabilitySummaries/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Fetches hasOne relation restrictionTable.
 * /Assets/:id/restrictionTable
 */
export async function Asset_GetRestrictionTable(
  id: string,
  options?: ApiRequestOptions,
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/restrictionTable",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in restrictionTable of this model.
 * /Assets/:id/restrictionTable
 */
export async function Asset_CreateRestrictionTable(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Update restrictionTable of this model.
 * /Assets/:id/restrictionTable
 */
export async function Asset_UpdateRestrictionTable(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<AssetRestrictionTable> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Fetches hasOne relation container.
 * /Assets/:id/container
 */
export async function Asset_GetContainer(
  id: string,
  options?: ApiRequestOptions,
): Promise<AssetStorageContainer> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a related item by id for datasets.
 * /Assets/:id/datasets/:fk
 */
export async function Asset_FindByIdDatasets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Dataset> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/datasets/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for edgeAgents.
 * /Assets/:id/edgeAgents/:fk
 */
export async function Asset_FindByIdEdgeAgents(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EdgeAgent> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/edgeAgents/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for edgeAgents.
 * /Assets/:id/edgeAgents/rel/:fk
 */
export async function Asset_LinkEdgeAgents(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EdgeAgentAsset> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/edgeAgents/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the edgeAgents relation to an item by id.
 * /Assets/:id/edgeAgents/rel/:fk
 */
export async function Asset_UnlinkEdgeAgents(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/edgeAgents/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for healthcheckEvents.
 * /Assets/:id/healthcheckEvents/:fk
 */
export async function Asset_FindByIdHealthcheckEvents(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/healthcheckEvents/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for healthcheckEvents.
 * /Assets/:id/healthcheckEvents/:fk
 */
export async function Asset_UpdateByIdHealthcheckEvents(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/healthcheckEvents/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Fetches hasOne relation rateLimit.
 * /Assets/:id/rateLimit
 */
export async function Asset_GetRateLimit(
  id: string,
  options?: ApiRequestOptions,
): Promise<RateLimit> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/rateLimit",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in rateLimit of this model.
 * /Assets/:id/rateLimit
 */
export async function Asset_CreateRateLimit(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<RateLimit> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/rateLimit",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Update rateLimit of this model.
 * /Assets/:id/rateLimit
 */
export async function Asset_UpdateRateLimit(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<RateLimit> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/rateLimit",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries operabilitySummaries of Asset.
 * /Assets/:id/operabilitySummaries
 */
export async function Asset_GetOperabilitySummaries(
  id: string,
  filter?: Filter<AssetOperabilitySummary>,
  options?: ApiRequestOptions,
): Promise<AssetOperabilitySummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/operabilitySummaries",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts operabilitySummaries of Asset.
 * /Assets/:id/operabilitySummaries/count
 */
export async function Asset_CountOperabilitySummaries(
  id: string,
  where?: Filter<AssetOperabilitySummary>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Assets/:id/operabilitySummaries/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries datasets of Asset.
 * /Assets/:id/datasets
 */
export async function Asset_GetDatasets(
  id: string,
  filter?: Filter<Dataset>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts datasets of Asset.
 * /Assets/:id/datasets/count
 */
export async function Asset_CountDatasets(
  id: string,
  where?: Filter<Dataset>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Assets/:id/datasets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries edgeAgents of Asset.
 * /Assets/:id/edgeAgents
 */
export async function Asset_GetEdgeAgents(
  id: string,
  filter?: Filter<EdgeAgent>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts edgeAgents of Asset.
 * /Assets/:id/edgeAgents/count
 */
export async function Asset_CountEdgeAgents(
  id: string,
  where?: Filter<EdgeAgent>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Assets/:id/edgeAgents/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries events of Asset.
 * /Assets/:id/events
 */
export async function Asset_GetEvents(
  id: string,
  filter?: Filter<Event>,
  options?: ApiRequestOptions,
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/events",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Queries eventTriggers of Asset.
 * /Assets/:id/eventTriggers
 */
export async function Asset_GetEventTriggers(
  id: string,
  filter?: Filter<EventTrigger>,
  options?: ApiRequestOptions,
): Promise<EventTrigger[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/eventTriggers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Queries healthcheckEvents of Asset.
 * /Assets/:id/healthcheckEvents
 */
export async function Asset_GetHealthcheckEvents(
  id: string,
  filter?: Filter<HealthcheckEvent>,
  options?: ApiRequestOptions,
): Promise<HealthcheckEvent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/healthcheckEvents",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in healthcheckEvents of this model.
 * /Assets/:id/healthcheckEvents
 */
export async function Asset_CreateHealthcheckEvents(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/healthcheckEvents",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Assets/:id
 */
export async function Asset_findById(
  id: string,
  filter?: Filter<Asset>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Assets
 */
export async function Asset_find(
  filter?: Filter<Asset>,
  options?: ApiRequestOptions,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Assets/findOne
 */
export async function Asset_findOne(
  filter?: Filter<Asset>,
  options?: ApiRequestOptions,
): Promise<Asset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Assets/findOne",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Suscribe to web-socket service (WSS)
 * /Assets/:id/sockets/:socketId/subscribe
 */
export async function Asset_subscribe(
  id: string,
  socketId: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/sockets/:socketId/subscribe",
    routeParams: {
      id,
      socketId,
    },
    ...options,
  });
}
/**
 * Unsuscribe from web-socket service (WSS)
 * /Assets/:id/sockets/:socketId/unsubscribe
 */
export async function Asset_unsubscribe(
  id: string,
  socketId: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/sockets/:socketId/unsubscribe",
    routeParams: {
      id,
      socketId,
    },
    ...options,
  });
}
/**
 * Get information about specified container
 * /Assets/:id/container/info
 */
export async function Asset_getContainerInfo(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container/info",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * List all files within specified container
 * /Assets/:id/container/files
 */
export async function Asset_getFiles(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container/files",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get information for specified file within specified container
 * /Assets/:id/container/files/:file
 */
export async function Asset_getFile(
  id: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Assets/:id/container/files/:file",
    routeParams: {
      id,
      file,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<void> {
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
    ...options,
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /Assets/:id/container/upload
 */
export async function Asset_upload(
  id: string,
  property: string,
  file: UploadableFile,
  resourceName?: string,
  onProgress?: (progress: number) => void,
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }
  if (resourceName != null) {
    _urlParams["resource_name"] = resourceName;
  }

  return UploadFile({
    url: "/Assets/:id/container/upload",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    file: file,
    onProgress: onProgress,
    ...options,
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
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Get sensors with its current state
 * /Assets/:id/sensors/withCurrentState
 */
export async function Asset_getSensorsWithCurrentState(
  id: string,
  filter?: Filter<SensorWithCurrentState>,
  options?: ApiRequestOptions,
): Promise<SensorWithCurrentState[]> {
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
    ...options,
  });
}
/**
 * Find and filter datasets
 * /Assets/:id/datasets/filter
 */
export async function Asset_findAndFilterDatasets(
  id: string,
  filter?: Filter<Dataset>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Notify an asset health status
 * /Assets/:id/notify-health-status
 */
export async function Asset_notifyHealthStatus(
  id: string,
  status: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/notify-health-status",
    routeParams: {
      id,
    },
    body: status,
    ...options,
  });
}
/**
 * Queries eventTriggerAssetStates of AssetState.
 * /Assets/:id/assetStates/:nk/eventTriggerAssetStates
 */
export async function Asset_GetAssetStatesEventTriggerAssetStates(
  id: string,
  nk: string,
  filter?: Filter<EventTriggerAssetState>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Queries states of AssetState.
 * /Assets/:id/assetStates/:nk/states
 */
export async function Asset_GetAssetStatesStates(
  id: string,
  nk: string,
  filter?: Filter<SensorAssetState>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Delete a related item by id for comments.
 * /Assets/:id/healthcheckEvents/:nk/comments/:fk
 */
export async function Asset_DestroyByIdHealthcheckEventsComments(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Assets/:id/healthcheckEvents/:nk/comments/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for comments.
 * /Assets/:id/healthcheckEvents/:nk/comments/:fk
 */
export async function Asset_UpdateByIdHealthcheckEventsComments(
  id: string,
  nk: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventComment> {
  return ApiFetch({
    method: "PUT",
    url: "/Assets/:id/healthcheckEvents/:nk/comments/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Creates a new instance in comments of this model.
 * /Assets/:id/healthcheckEvents/:nk/comments
 */
export async function Asset_CreateHealthcheckEventsComments(
  id: string,
  nk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventComment> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/healthcheckEvents/:nk/comments",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
/**
 * Creates a new instance in stateChanges of this model.
 * /Assets/:id/healthcheckEvents/:nk/stateChanges
 */
export async function Asset_CreateHealthcheckEventsStateChanges(
  id: string,
  nk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventStateChange> {
  return ApiFetch({
    method: "POST",
    url: "/Assets/:id/healthcheckEvents/:nk/stateChanges",
    routeParams: {
      id,
      nk,
    },
    body: data,
    ...options,
  });
}
