import { ApiFetch, UploadFile, Filter } from '../core/ApiFetch';
import { Manager } from '../models/Manager';
import { StoreVideoAnalyticDashboardStorageContainer } from '../models/StoreVideoAnalyticDashboard';

/**
 * Api services for the `StoreVideoAnalyticDashboard` model.
 */

/**
 * Buscar un elemento relacionado por id para managers.
 * /StoreVideoAnalyticDashboards/:id/managers/:fk
 */
export async function StoreVideoAnalyticDashboard_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/StoreVideoAnalyticDashboards/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación hasOne container.
 * /StoreVideoAnalyticDashboards/:id/container
 */
export async function StoreVideoAnalyticDashboard_GetContainer(
  id: string,
): Promise<StoreVideoAnalyticDashboardStorageContainer> {
  return ApiFetch({
    method: 'GET',
    url: '/StoreVideoAnalyticDashboards/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de StoreVideoAnalyticDashboard.
 * /StoreVideoAnalyticDashboards/:id/managers
 */
export async function StoreVideoAnalyticDashboard_GetManagers(
  id: string,
  filter: Filter<any> = {},
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/StoreVideoAnalyticDashboards/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos managers de StoreVideoAnalyticDashboard.
 * /StoreVideoAnalyticDashboards/:id/managers/count
 */
export async function StoreVideoAnalyticDashboard_CountManagers(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/StoreVideoAnalyticDashboards/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Delete a file within a given container by name
 * /StoreVideoAnalyticDashboards/:id/container/files/:file
 */
export async function StoreVideoAnalyticDashboard_removeFile(
  id: string,
  property: string,
  file: string,
): Promise<void> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/StoreVideoAnalyticDashboards/:id/container/files/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /StoreVideoAnalyticDashboards/:id/container/upload
 */
export async function StoreVideoAnalyticDashboard_upload(
  id: string,
  property: string,
  file: File,
  onProgress?: (progress: number) => void,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return UploadFile({
    url: '/StoreVideoAnalyticDashboards/:id/container/upload',
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
 * /StoreVideoAnalyticDashboards/:id/container/download/:file
 */
export async function StoreVideoAnalyticDashboard_download(
  id: string,
  property: string,
  file: string,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'GET',
    url: '/StoreVideoAnalyticDashboards/:id/container/download/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
