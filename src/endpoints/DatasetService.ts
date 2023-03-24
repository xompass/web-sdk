import { ApiFetch, Filter } from '../core/ApiFetch';
import { Dataset } from '../models/Dataset';
import { Log } from '../models/Log';
import { Sensor } from '../models/Sensor';
import { Summary } from '../models/Summary';

/**
 * Api services for the `Dataset` model.
 */

/**
 * Buscar un elemento relacionado por id para data.
 * /Datasets/:id/data/:fk
 */
export async function Dataset_FindByIdData(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/data/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para data.
 * /Datasets/:id/data/:fk
 */
export async function Dataset_DestroyByIdData(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Datasets/:id/data/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para data.
 * /Datasets/:id/data/:fk
 */
export async function Dataset_UpdateByIdData(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Datasets/:id/data/:fk',
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
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Datasets/:id/trackingLogs/:fk
 */
export async function Dataset_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/trackingLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo sensor.
 * /Datasets/:id/sensor
 */
export async function Dataset_GetSensor(id: string): Promise<Sensor> {
  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/sensor',
    routeParams: {
      id,
    },
  });
}
/**
 * data consultas de Dataset.
 * /Datasets/:id/data
 */
export async function Dataset_GetData(
  id: string,
  filter: Filter<any> = {}
): Promise<any> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/data',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en data de este modelo.
 * /Datasets/:id/data
 */
export async function Dataset_CreateData(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Datasets/:id/data',
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos data de Dataset.
 * /Datasets/:id/data/count
 */
export async function Dataset_CountData(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/data/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Dataset.
 * /Datasets/:id/trackingLogs
 */
export async function Dataset_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/trackingLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Dataset.
 * /Datasets/:id/trackingLogs/count
 */
export async function Dataset_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/trackingLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Datasets
 */
export async function Dataset_create(data: any = {}): Promise<Dataset> {
  return ApiFetch({
    method: 'POST',
    url: '/Datasets',
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Datasets/:id/exists
 */
export async function Dataset_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Datasets/:id
 */
export async function Dataset_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Dataset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Datasets
 */
export async function Dataset_find(
  filter: Filter<any> = {}
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Datasets/findOne
 */
export async function Dataset_findOne(
  filter: Filter<any> = {}
): Promise<Dataset> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Datasets/:id
 */
export async function Dataset_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Datasets/:id',
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Datasets/count
 */
export async function Dataset_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Download a file within specified container
 * /Datasets/:id/download/:file
 */
export async function Dataset_download(
  id: string,
  file: string,
  datasourceName: string
): Promise<any> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/download/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Returns a presigned url for a specified file
 * /Datasets/:id/signed-url/:file
 */
export async function Dataset_getSignedUrl(
  id: string,
  file: string,
  datasourceName: string
): Promise<any> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Datasets/:id/signed-url/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Remove the files, data and metadata of a Dataset instance
 * /Datasets/:id/deep
 */
export async function Dataset_deepRemove(id: string): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Datasets/:id/deep',
    routeParams: {
      id,
    },
  });
}
/**
 * Assign or update summary
 * /Datasets/:id/summary/assign
 */
export async function Dataset_assignOrUpdateSummary(
  id: string,
  minimalResponse: boolean
): Promise<Summary> {
  const _urlParams: any = {};
  if (minimalResponse != null) {
    _urlParams['minimal_response'] = minimalResponse;
  }

  return ApiFetch({
    method: 'POST',
    url: '/Datasets/:id/summary/assign',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
