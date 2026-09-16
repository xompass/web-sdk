import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  UploadFile,
  UploadableFile,
  unwrapCount,
} from "../core/ApiFetch";
import { FaceDatabase } from "../models/FaceDatabase";
import { FaceDatabaseFaceSubject, FaceSubject } from "../models/FaceSubject";

/**
 * Find a related item by id for faceSubjects.
 * /FaceDatabases/:id/faceSubjects/:fk
 */
export async function FaceDatabase_FindByIdFaceSubjects(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<FaceSubject> {
  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/faceSubjects/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for faceSubjects.
 * /FaceDatabases/:id/faceSubjects/:fk
 */
export async function FaceDatabase_UpdateByIdFaceSubjects(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<FaceSubject> {
  return ApiFetch({
    method: "PUT",
    url: "/FaceDatabases/:id/faceSubjects/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for faceSubjects.
 * /FaceDatabases/:id/faceSubjects/rel/:fk
 */
export async function FaceDatabase_LinkFaceSubjects(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<FaceDatabaseFaceSubject> {
  return ApiFetch({
    method: "PUT",
    url: "/FaceDatabases/:id/faceSubjects/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the faceSubjects relation to an item by id.
 * /FaceDatabases/:id/faceSubjects/rel/:fk
 */
export async function FaceDatabase_UnlinkFaceSubjects(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/FaceDatabases/:id/faceSubjects/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Check the existence of faceSubjects relation to an item by id.
 * /FaceDatabases/:id/faceSubjects/rel/:fk
 */
export async function FaceDatabase_ExistsFaceSubjects(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/FaceDatabases/:id/faceSubjects/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries faceSubjects of FaceDatabase.
 * /FaceDatabases/:id/faceSubjects
 */
export async function FaceDatabase_GetFaceSubjects(
  id: string,
  filter?: Filter<FaceSubject>,
  options?: ApiRequestOptions,
): Promise<FaceSubject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/faceSubjects",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in faceSubjects of this model.
 * /FaceDatabases/:id/faceSubjects
 */
export async function FaceDatabase_CreateFaceSubjects(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<FaceSubject> {
  return ApiFetch({
    method: "POST",
    url: "/FaceDatabases/:id/faceSubjects",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts faceSubjects of FaceDatabase.
 * /FaceDatabases/:id/faceSubjects/count
 */
export async function FaceDatabase_CountFaceSubjects(
  id: string,
  where?: Filter<FaceSubject>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/faceSubjects/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /FaceDatabases
 */
export async function FaceDatabase_create(
  data?: any,
  options?: ApiRequestOptions,
): Promise<FaceDatabase> {
  return ApiFetch({
    method: "POST",
    url: "/FaceDatabases",
    body: data,
    ...options,
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /FaceDatabases/:id/exists
 */
export async function FaceDatabase_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /FaceDatabases/:id
 */
export async function FaceDatabase_findById(
  id: string,
  filter?: Filter<FaceDatabase>,
  options?: ApiRequestOptions,
): Promise<FaceDatabase> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /FaceDatabases
 */
export async function FaceDatabase_find(
  filter?: Filter<FaceDatabase>,
  options?: ApiRequestOptions,
): Promise<FaceDatabase[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /FaceDatabases/:id
 */
export async function FaceDatabase_deleteById(
  id: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/FaceDatabases/:id",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Patch attributes for a model instance and persist it into the data source.
 * /FaceDatabases/:id
 */
export async function FaceDatabase_patchAttributes(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<FaceDatabase> {
  return ApiFetch({
    method: "PUT",
    url: "/FaceDatabases/:id",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Removes a face subject from this database. If the subject is not linked to any other database, it is deleted entirely.
 * /FaceDatabases/:id/faceSubjects/:fk
 */
export async function FaceDatabase_removeFaceSubject(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/FaceDatabases/:id/faceSubjects/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Lists face images for a specific face subject.
 * /FaceDatabases/:id/faceSubjects/:nk/images
 */
export async function FaceDatabase_listFaceImages(
  id: string,
  nk: string,
  filter?: Filter<FaceSubject>,
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/faceSubjects/:nk/images",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
}
/**
 * Find a face image by ID for a specific face subject.
 * /FaceDatabases/:id/faceSubjects/:nk/images/:fk
 */
export async function FaceDatabase_findFaceImageById(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/faceSubjects/:nk/images/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Counts face images for a specific face subject.
 * /FaceDatabases/:id/faceSubjects/:nk/images/count
 */
export async function FaceDatabase_countFaceImages(
  id: string,
  nk: string,
  where?: Filter<FaceSubject>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/faceSubjects/:nk/images/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Deletes a face image globally from a face subject.
 * /FaceDatabases/:id/faceSubjects/:nk/images/:fk
 */
export async function FaceDatabase_deleteFaceImage(
  id: string,
  nk: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/FaceDatabases/:id/faceSubjects/:nk/images/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Uploads images for a face subject. The maximum number of images is 10, and each image must be a JPEG with a maximum size of 100kB and minimum dimensions of 36x36 pixels.
 * /FaceDatabases/:id/faceSubjects/:fk/upload
 */
export async function FaceDatabase_uploadFaceSubject(
  id: string,
  fk: string,
  file: UploadableFile,
  onProgress?: (progress: number) => void,
  options?: ApiRequestOptions,
): Promise<any> {
  return UploadFile({
    url: "/FaceDatabases/:id/faceSubjects/:fk/upload",
    routeParams: {
      id,
      fk,
    },
    file: file,
    onProgress: onProgress,
    ...options,
  });
}
/**
 * Downloads a face image for a specific face subject.
 * /FaceDatabases/:id/faceSubjects/:nk/images/:file/download
 */
export async function FaceDatabase_downloadFaceImage(
  id: string,
  nk: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/FaceDatabases/:id/faceSubjects/:nk/images/:file/download",
    routeParams: {
      id,
      nk,
      file,
    },
    ...options,
  });
}
/**
 * Sync subject images to external recognition service
 * /FaceDatabases/:id/faceSubjects/:fk/sync
 */
export async function FaceDatabase_syncFaceSubject(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/FaceDatabases/:id/faceSubjects/:fk/sync",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Sync entire FaceDatabase with subjects
 * /FaceDatabases/:id/sync
 */
export async function FaceDatabase_syncFaceDatabase(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/FaceDatabases/:id/sync",
    routeParams: {
      id,
    },
    ...options,
  });
}
