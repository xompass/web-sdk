import { ApiFetch, Filter } from "../core/ApiFetch";
import { Alert } from "../models/Alert";
import { AlertHistory } from "../models/AlertHistory";
import { Asset } from "../models/Asset";
import { AssetState } from "../models/AssetState";
import { Data } from "../models/Data";
import { Dataset } from "../models/Dataset";
import { RateLimit } from "../models/RateLimit";
import { Sensor } from "../models/Sensor";
import { SensorAssetState } from "../models/SensorAssetState";
import { Summary } from "../models/Summary";

/**
 * Fetches belongsTo relation asset.
 * /Sensors/:id/asset
 */
export async function Sensor_GetAsset(id: string): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/asset",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a related item by id for datasets.
 * /Sensors/:id/datasets/:fk
 */
export async function Sensor_FindByIdDatasets(
  id: string,
  fk: string,
): Promise<Dataset> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for datasets.
 * /Sensors/:id/datasets/:fk
 */
export async function Sensor_UpdateByIdDatasets(
  id: string,
  fk: string,
  data?: any,
): Promise<Dataset> {
  return ApiFetch({
    method: "PUT",
    url: "/Sensors/:id/datasets/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for alerts.
 * /Sensors/:id/alerts/:fk
 */
export async function Sensor_FindByIdAlerts(
  id: string,
  fk: string,
): Promise<Alert> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/alerts/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for alerts.
 * /Sensors/:id/alerts/:fk
 */
export async function Sensor_UpdateByIdAlerts(
  id: string,
  fk: string,
  data?: any,
): Promise<Alert> {
  return ApiFetch({
    method: "PUT",
    url: "/Sensors/:id/alerts/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for alertHistory.
 * /Sensors/:id/alertHistory/:fk
 */
export async function Sensor_FindByIdAlertHistory(
  id: string,
  fk: string,
): Promise<AlertHistory> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/alertHistory/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for alertHistory.
 * /Sensors/:id/alertHistory/:fk
 */
export async function Sensor_UpdateByIdAlertHistory(
  id: string,
  fk: string,
  data?: any,
): Promise<AlertHistory> {
  return ApiFetch({
    method: "PUT",
    url: "/Sensors/:id/alertHistory/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches hasOne relation lastData.
 * /Sensors/:id/lastData
 */
export async function Sensor_GetLastData(id: string): Promise<Data> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/lastData",
    routeParams: {
      id,
    },
  });
}
/**
 * Deletes lastData of this model.
 * /Sensors/:id/lastData
 */
export async function Sensor_DestroyLastData(id: string): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Sensors/:id/lastData",
    routeParams: {
      id,
    },
  });
}
/**
 * Fetches hasOne relation rateLimit.
 * /Sensors/:id/rateLimit
 */
export async function Sensor_GetRateLimit(id: string): Promise<RateLimit> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/rateLimit",
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in rateLimit of this model.
 * /Sensors/:id/rateLimit
 */
export async function Sensor_CreateRateLimit(
  id: string,
  data?: any,
): Promise<RateLimit> {
  return ApiFetch({
    method: "POST",
    url: "/Sensors/:id/rateLimit",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Update rateLimit of this model.
 * /Sensors/:id/rateLimit
 */
export async function Sensor_UpdateRateLimit(
  id: string,
  data?: any,
): Promise<RateLimit> {
  return ApiFetch({
    method: "PUT",
    url: "/Sensors/:id/rateLimit",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Find a related item by id for assetStates.
 * /Sensors/:id/assetStates/:fk
 */
export async function Sensor_FindByIdAssetStates(
  id: string,
  fk: string,
): Promise<AssetState> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/assetStates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Add a related item by id for assetStates.
 * /Sensors/:id/assetStates/rel/:fk
 */
export async function Sensor_LinkAssetStates(
  id: string,
  fk: string,
  data?: any,
): Promise<SensorAssetState> {
  return ApiFetch({
    method: "PUT",
    url: "/Sensors/:id/assetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Remove the assetStates relation to an item by id.
 * /Sensors/:id/assetStates/rel/:fk
 */
export async function Sensor_UnlinkAssetStates(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Sensors/:id/assetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Check the existence of assetStates relation to an item by id.
 * /Sensors/:id/assetStates/rel/:fk
 */
export async function Sensor_ExistsAssetStates(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Sensors/:id/assetStates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for states.
 * /Sensors/:id/states/:fk
 */
export async function Sensor_FindByIdStates(
  id: string,
  fk: string,
): Promise<SensorAssetState> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/states/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for states.
 * /Sensors/:id/states/:fk
 */
export async function Sensor_UpdateByIdStates(
  id: string,
  fk: string,
  data?: any,
): Promise<SensorAssetState> {
  return ApiFetch({
    method: "PUT",
    url: "/Sensors/:id/states/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for summaries.
 * /Sensors/:id/summaries/:fk
 */
export async function Sensor_FindByIdSummaries(
  id: string,
  fk: string,
): Promise<Summary> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/summaries/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Queries datasets of Sensor.
 * /Sensors/:id/datasets
 */
export async function Sensor_GetDatasets(
  id: string,
  filter?: Filter<Dataset>,
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in datasets of this model.
 * /Sensors/:id/datasets
 */
export async function Sensor_CreateDatasets(
  id: string,
  data?: any,
): Promise<Dataset> {
  return ApiFetch({
    method: "POST",
    url: "/Sensors/:id/datasets",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts datasets of Sensor.
 * /Sensors/:id/datasets/count
 */
export async function Sensor_CountDatasets(
  id: string,
  where?: Filter<Dataset>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries alerts of Sensor.
 * /Sensors/:id/alerts
 */
export async function Sensor_GetAlerts(
  id: string,
  filter?: Filter<Alert>,
): Promise<Alert[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/alerts",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts alerts of Sensor.
 * /Sensors/:id/alerts/count
 */
export async function Sensor_CountAlerts(
  id: string,
  where?: Filter<Alert>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/alerts/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries alertHistory of Sensor.
 * /Sensors/:id/alertHistory
 */
export async function Sensor_GetAlertHistory(
  id: string,
  filter?: Filter<AlertHistory>,
): Promise<AlertHistory[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/alertHistory",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts alertHistory of Sensor.
 * /Sensors/:id/alertHistory/count
 */
export async function Sensor_CountAlertHistory(
  id: string,
  where?: Filter<AlertHistory>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/alertHistory/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries assetStates of Sensor.
 * /Sensors/:id/assetStates
 */
export async function Sensor_GetAssetStates(
  id: string,
  filter?: Filter<AssetState>,
): Promise<AssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/assetStates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts assetStates of Sensor.
 * /Sensors/:id/assetStates/count
 */
export async function Sensor_CountAssetStates(
  id: string,
  where?: Filter<AssetState>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/assetStates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries states of Sensor.
 * /Sensors/:id/states
 */
export async function Sensor_GetStates(
  id: string,
  filter?: Filter<SensorAssetState>,
): Promise<SensorAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/states",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts states of Sensor.
 * /Sensors/:id/states/count
 */
export async function Sensor_CountStates(
  id: string,
  where?: Filter<SensorAssetState>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/states/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries summaries of Sensor.
 * /Sensors/:id/summaries
 */
export async function Sensor_GetSummaries(
  id: string,
  filter?: Filter<Summary>,
): Promise<Summary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/summaries",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts summaries of Sensor.
 * /Sensors/:id/summaries/count
 */
export async function Sensor_CountSummaries(
  id: string,
  where?: Filter<Summary>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/summaries/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Sensors/:id/exists
 */
export async function Sensor_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Sensors/:id
 */
export async function Sensor_findById(
  id: string,
  filter?: Filter<Sensor>,
): Promise<Sensor> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Sensors
 */
export async function Sensor_find(filter?: Filter<Sensor>): Promise<Sensor[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors",
    urlParams: _urlParams,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Sensors/findOne
 */
export async function Sensor_findOne(filter?: Filter<Sensor>): Promise<Sensor> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/findOne",
    urlParams: _urlParams,
  });
}
/**
 * Download a file within specified container
 * /Sensors/:id/datasets/:nk/download/:file
 */
export async function Sensor_DownloadDatasets(
  id: string,
  nk: string,
  file: string,
  datasourceName?: string,
): Promise<any> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams["datasourceName"] = datasourceName;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets/:nk/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
      file,
    },
  });
}
/**
 * Returns a presigned url for a specified file
 * /Sensors/:id/datasets/:nk/signed-url/:file
 */
export async function Sensor_GetSignedUrlDatasets(
  id: string,
  nk: string,
  file: string,
  datasourceName?: string,
): Promise<any> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams["datasourceName"] = datasourceName;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets/:nk/signed-url/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
      file,
    },
  });
}
/**
 * Get last sensor data
 * /Sensors/:id/data/last
 */
export async function Sensor_LastData(id: string): Promise<Data> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/data/last",
    routeParams: {
      id,
    },
  });
}
/**
 * Get current sensor state
 * /Sensors/:id/currentState
 */
export async function Sensor_getCurrentState(
  id: string,
): Promise<SensorAssetState> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/currentState",
    routeParams: {
      id,
    },
  });
}
/**
 * Get current sensor state
 * /Sensors/:id/withCurrentState
 */
export async function Sensor_withCurrentState(
  id: string,
  filter?: Filter<Sensor>,
): Promise<Sensor> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/withCurrentState",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find a related item by id for data.
 * /Sensors/:id/datasets/:nk/data/:fk
 */
export async function Sensor_FindByIdDatasetsData(
  id: string,
  nk: string,
  fk: string,
): Promise<Data> {
  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets/:nk/data/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for data.
 * /Sensors/:id/datasets/:nk/data/:fk
 */
export async function Sensor_DestroyByIdDatasetsData(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Sensors/:id/datasets/:nk/data/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for data.
 * /Sensors/:id/datasets/:nk/data/:fk
 */
export async function Sensor_UpdateByIdDatasetsData(
  id: string,
  nk: string,
  fk: string,
  data?: any,
): Promise<Data> {
  return ApiFetch({
    method: "PUT",
    url: "/Sensors/:id/datasets/:nk/data/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Queries data of Dataset.
 * /Sensors/:id/datasets/:nk/data
 */
export async function Sensor_GetDatasetsData(
  id: string,
  nk: string,
  filter?: Filter<Data>,
): Promise<Data[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets/:nk/data",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in data of this model.
 * /Sensors/:id/datasets/:nk/data
 */
export async function Sensor_CreateDatasetsData(
  id: string,
  nk: string,
  data?: any,
): Promise<Data> {
  return ApiFetch({
    method: "POST",
    url: "/Sensors/:id/datasets/:nk/data",
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts data of Dataset.
 * /Sensors/:id/datasets/:nk/data/count
 */
export async function Sensor_CountDatasetsData(
  id: string,
  nk: string,
  where?: Filter<Dataset>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Sensors/:id/datasets/:nk/data/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
