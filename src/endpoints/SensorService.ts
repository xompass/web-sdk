import { ApiFetch, Filter } from '../core/ApiFetch';
import { Sensor } from '../models/Sensor';
import { Asset } from '../models/Asset';
import { Dataset } from '../models/Dataset';
import { Alert } from '../models/Alert';
import { AlertHistory } from '../models/AlertHistory';
import { Data } from '../models/Data';
import { AssetState } from '../models/AssetState';
import { SensorAssetState } from '../models/SensorAssetState';
import { Summary } from '../models/Summary';

/**
 * Api services for the `Sensor` model.
 */

/**
 * Capta la relación belongsTo asset.
 * /Sensors/:id/asset
 */
export async function Sensor_GetAsset(id: string): Promise<Asset> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/asset',
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para datasets.
 * /Sensors/:id/datasets/:fk
 */
export async function Sensor_FindByIdDatasets(
  id: string,
  fk: string
): Promise<Dataset> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para datasets.
 * /Sensors/:id/datasets/:fk
 */
export async function Sensor_UpdateByIdDatasets(
  id: string,
  fk: string,
  data: any = {}
): Promise<Dataset> {
  return ApiFetch({
    method: 'PUT',
    url: '/Sensors/:id/datasets/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para alerts.
 * /Sensors/:id/alerts/:fk
 */
export async function Sensor_FindByIdAlerts(
  id: string,
  fk: string
): Promise<Alert> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/alerts/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para alerts.
 * /Sensors/:id/alerts/:fk
 */
export async function Sensor_UpdateByIdAlerts(
  id: string,
  fk: string,
  data: any = {}
): Promise<Alert> {
  return ApiFetch({
    method: 'PUT',
    url: '/Sensors/:id/alerts/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para alertHistory.
 * /Sensors/:id/alertHistory/:fk
 */
export async function Sensor_FindByIdAlertHistory(
  id: string,
  fk: string
): Promise<AlertHistory> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/alertHistory/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para alertHistory.
 * /Sensors/:id/alertHistory/:fk
 */
export async function Sensor_UpdateByIdAlertHistory(
  id: string,
  fk: string,
  data: any = {}
): Promise<AlertHistory> {
  return ApiFetch({
    method: 'PUT',
    url: '/Sensors/:id/alertHistory/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Capta la relación hasOne lastData.
 * /Sensors/:id/lastData
 */
export async function Sensor_GetLastData(id: string): Promise<Data> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/lastData',
    routeParams: {
      id,
    },
  });
}
/**
 * Suprime lastData de este modelo.
 * /Sensors/:id/lastData
 */
export async function Sensor_DestroyLastData(id: string): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Sensors/:id/lastData',
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para assetStates.
 * /Sensors/:id/assetStates/:fk
 */
export async function Sensor_FindByIdAssetStates(
  id: string,
  fk: string
): Promise<AssetState> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/assetStates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assetStates.
 * /Sensors/:id/assetStates/rel/:fk
 */
export async function Sensor_LinkAssetStates(
  id: string,
  fk: string,
  data: any = {}
): Promise<SensorAssetState> {
  return ApiFetch({
    method: 'PUT',
    url: '/Sensors/:id/assetStates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Eliminar la relación assetStates con un elemento por id.
 * /Sensors/:id/assetStates/rel/:fk
 */
export async function Sensor_UnlinkAssetStates(
  id: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Sensors/:id/assetStates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assetStates con un elemento por id.
 * /Sensors/:id/assetStates/rel/:fk
 */
export async function Sensor_ExistsAssetStates(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/Sensors/:id/assetStates/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para states.
 * /Sensors/:id/states/:fk
 */
export async function Sensor_FindByIdStates(
  id: string,
  fk: string
): Promise<SensorAssetState> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/states/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para states.
 * /Sensors/:id/states/:fk
 */
export async function Sensor_UpdateByIdStates(
  id: string,
  fk: string,
  data: any = {}
): Promise<SensorAssetState> {
  return ApiFetch({
    method: 'PUT',
    url: '/Sensors/:id/states/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Buscar un elemento relacionado por id para summaries.
 * /Sensors/:id/summaries/:fk
 */
export async function Sensor_FindByIdSummaries(
  id: string,
  fk: string
): Promise<Summary> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/summaries/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * datasets consultas de Sensor.
 * /Sensors/:id/datasets
 */
export async function Sensor_GetDatasets(
  id: string,
  filter: Filter<any> = {}
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en datasets de este modelo.
 * /Sensors/:id/datasets
 */
export async function Sensor_CreateDatasets(
  id: string,
  data: any = {}
): Promise<Dataset> {
  return ApiFetch({
    method: 'POST',
    url: '/Sensors/:id/datasets',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos datasets de Sensor.
 * /Sensors/:id/datasets/count
 */
export async function Sensor_CountDatasets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * alerts consultas de Sensor.
 * /Sensors/:id/alerts
 */
export async function Sensor_GetAlerts(
  id: string,
  filter: Filter<any> = {}
): Promise<Alert[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/alerts',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos alerts de Sensor.
 * /Sensors/:id/alerts/count
 */
export async function Sensor_CountAlerts(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/alerts/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * alertHistory consultas de Sensor.
 * /Sensors/:id/alertHistory
 */
export async function Sensor_GetAlertHistory(
  id: string,
  filter: Filter<any> = {}
): Promise<AlertHistory[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/alertHistory',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos alertHistory de Sensor.
 * /Sensors/:id/alertHistory/count
 */
export async function Sensor_CountAlertHistory(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/alertHistory/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assetStates consultas de Sensor.
 * /Sensors/:id/assetStates
 */
export async function Sensor_GetAssetStates(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/assetStates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assetStates de Sensor.
 * /Sensors/:id/assetStates/count
 */
export async function Sensor_CountAssetStates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/assetStates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * states consultas de Sensor.
 * /Sensors/:id/states
 */
export async function Sensor_GetStates(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorAssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/states',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos states de Sensor.
 * /Sensors/:id/states/count
 */
export async function Sensor_CountStates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/states/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * summaries consultas de Sensor.
 * /Sensors/:id/summaries
 */
export async function Sensor_GetSummaries(
  id: string,
  filter: Filter<any> = {}
): Promise<Summary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/summaries',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos summaries de Sensor.
 * /Sensors/:id/summaries/count
 */
export async function Sensor_CountSummaries(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/summaries/count',
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
    method: 'GET',
    url: '/Sensors/:id/exists',
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
  filter: Filter<any> = {}
): Promise<Sensor> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
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
  datasourceName: string
): Promise<any> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets/:nk/download/:file',
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
  datasourceName: string
): Promise<any> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets/:nk/signed-url/:file',
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
    method: 'GET',
    url: '/Sensors/:id/data/last',
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
  id: string
): Promise<SensorAssetState> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/currentState',
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
  filter: Filter<any> = {}
): Promise<Sensor> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/withCurrentState',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para data.
 * /Sensors/:id/datasets/:nk/data/:fk
 */
export async function Sensor_FindByIdDatasetsData(
  id: string,
  nk: string,
  fk: string
): Promise<Data> {
  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets/:nk/data/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para data.
 * /Sensors/:id/datasets/:nk/data/:fk
 */
export async function Sensor_DestroyByIdDatasetsData(
  id: string,
  nk: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Sensors/:id/datasets/:nk/data/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para data.
 * /Sensors/:id/datasets/:nk/data/:fk
 */
export async function Sensor_UpdateByIdDatasetsData(
  id: string,
  nk: string,
  fk: string,
  data: any = {}
): Promise<Data> {
  return ApiFetch({
    method: 'PUT',
    url: '/Sensors/:id/datasets/:nk/data/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * data consultas de Dataset.
 * /Sensors/:id/datasets/:nk/data
 */
export async function Sensor_GetDatasetsData(
  id: string,
  nk: string,
  filter: Filter<any> = {}
): Promise<Data[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets/:nk/data',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Crea una nueva instancia en data de este modelo.
 * /Sensors/:id/datasets/:nk/data
 */
export async function Sensor_CreateDatasetsData(
  id: string,
  nk: string,
  data: any = {}
): Promise<Data> {
  return ApiFetch({
    method: 'POST',
    url: '/Sensors/:id/datasets/:nk/data',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Recuentos data de Dataset.
 * /Sensors/:id/datasets/:nk/data/count
 */
export async function Sensor_CountDatasetsData(
  id: string,
  nk: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Sensors/:id/datasets/:nk/data/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
