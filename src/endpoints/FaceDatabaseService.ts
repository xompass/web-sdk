import { ApiFetch, UploadFile, Filter } from '../core/ApiFetch';
import { FaceDatabase } from '../models/FaceDatabase';
import { FaceSubject } from '../models/FaceSubject';
import { FaceImage } from '../models/FaceSubject';

/**
 * Api services for the `FaceDatabase` model.
 */

/**
 * Buscar un elemento relacionado por id para faceSubjects.
 * /FaceDatabases/:id/faceSubjects/:fk
 */
export async function FaceDatabase_FindByIdFaceSubjects(
  id: string,
  fk: string,
): Promise<FaceSubject> {
  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id/faceSubjects/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para faceSubjects.
 * /FaceDatabases/:id/faceSubjects/:fk
 */
export async function FaceDatabase_DestroyByIdFaceSubjects(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/FaceDatabases/:id/faceSubjects/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para faceSubjects.
 * /FaceDatabases/:id/faceSubjects/:fk
 */
export async function FaceDatabase_UpdateByIdFaceSubjects(
  id: string,
  fk: string,
  data: any = {},
): Promise<FaceSubject> {
  return ApiFetch({
    method: 'PUT',
    url: '/FaceDatabases/:id/faceSubjects/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * faceSubjects consultas de FaceDatabase.
 * /FaceDatabases/:id/faceSubjects
 */
export async function FaceDatabase_GetFaceSubjects(
  id: string,
  filter: Filter<any> = {},
): Promise<FaceSubject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id/faceSubjects',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en faceSubjects de este modelo.
 * /FaceDatabases/:id/faceSubjects
 */
export async function FaceDatabase_CreateFaceSubjects(
  id: string,
  data: any = {},
): Promise<FaceSubject> {
  return ApiFetch({
    method: 'POST',
    url: '/FaceDatabases/:id/faceSubjects',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Recuentos faceSubjects de FaceDatabase.
 * /FaceDatabases/:id/faceSubjects/count
 */
export async function FaceDatabase_CountFaceSubjects(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id/faceSubjects/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /FaceDatabases
 */
export async function FaceDatabase_create(
  data: any = {},
): Promise<FaceDatabase> {
  return ApiFetch({
    method: 'POST',
    url: '/FaceDatabases',
    routeParams: {},
    body: data,
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /FaceDatabases/:id/exists
 */
export async function FaceDatabase_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /FaceDatabases/:id
 */
export async function FaceDatabase_findById(
  id: string,
  filter: Filter<any> = {},
): Promise<FaceDatabase> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /FaceDatabases
 */
export async function FaceDatabase_find(
  filter: Filter<any> = {},
): Promise<FaceDatabase[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /FaceDatabases/:id
 */
export async function FaceDatabase_deleteById(id: string): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/FaceDatabases/:id',
    routeParams: {
      id,
    },
  });
}
/**
  * Uploads images for a face subject. 
      The maximum number of images is 10, 
      and each image must be a JPEG with a maximum size of 100kB 
      and minimum dimensions of 64x64 pixels.
  * /FaceDatabases/:id/faceSubjects/:fk/upload
  */
export async function FaceDatabase_uploadFaceSubject(
  id: string,
  fk: string,
  file: File,
  onProgress?: (progress: number) => void,
): Promise<any> {
  return UploadFile({
    url: '/FaceDatabases/:id/faceSubjects/:fk/upload',
    routeParams: {
      id,
      fk,
    },
    file: file,
    onProgress: onProgress,
  });
}
/**
 * Buscar un elemento relacionado por id para images.
 * /FaceDatabases/:id/faceSubjects/:nk/images/:fk
 */
export async function FaceDatabase_FindByIdFaceSubjectsImages(
  id: string,
  nk: string,
  fk: string,
): Promise<FaceImage> {
  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id/faceSubjects/:nk/images/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para images.
 * /FaceDatabases/:id/faceSubjects/:nk/images/:fk
 */
export async function FaceDatabase_DestroyByIdFaceSubjectsImages(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/FaceDatabases/:id/faceSubjects/:nk/images/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * images consultas de FaceSubject.
 * /FaceDatabases/:id/faceSubjects/:nk/images
 */
export async function FaceDatabase_GetFaceSubjectsImages(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<FaceImage[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id/faceSubjects/:nk/images',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Recuentos images de FaceSubject.
 * /FaceDatabases/:id/faceSubjects/:nk/images/count
 */
export async function FaceDatabase_CountFaceSubjectsImages(
  id: string,
  nk: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/FaceDatabases/:id/faceSubjects/:nk/images/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
