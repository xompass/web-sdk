import { ApiFetch, Filter, Include } from '../core/ApiFetch';
import { Admin } from '../models/Admin';
import { Country } from '../models/Country';
import { Credential } from '../models/Credential';
import { Asset } from '../models/Asset';
import { Log } from '../models/Log';
import { TimeZone } from '../models/TimeZone';
import { Var } from '../models/Var';
import { UserCrendentials } from '../core/User';
import { CommonAccessToken } from '../models/CommonAccessToken';

/**
 * Api services for the `Admin` model.
 */

/**
 * Buscar un elemento relacionado por id para accessTokens.
 * /Admins/:id/accessTokens/:fk
 */
export async function Admin_FindByIdAccessTokens(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/accessTokens/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para accessTokens.
 * /Admins/:id/accessTokens/:fk
 */
export async function Admin_UpdateByIdAccessTokens(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Admins/:id/accessTokens/:fk',
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
 * Capta la relación belongsTo country.
 * /Admins/:id/country
 */
export async function Admin_GetCountry(id: string): Promise<Country> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/country',
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación hasOne container.
 * /Admins/:id/container
 */
export async function Admin_GetContainer(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en container de este modelo.
 * /Admins/:id/container
 */
export async function Admin_CreateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins/:id/container',
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
 * /Admins/:id/container
 */
export async function Admin_UpdateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Admins/:id/container',
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
 * /Admins/:id/container
 */
export async function Admin_DestroyContainer(id: string): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Admins/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para credentials.
 * /Admins/:id/credentials/:fk
 */
export async function Admin_FindByIdCredentials(
  id: string,
  fk: string
): Promise<Credential> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/credentials/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación credentials con un elemento por id.
 * /Admins/:id/credentials/rel/:fk
 */
export async function Admin_ExistsCredentials(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/Admins/:id/credentials/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /Admins/:id/assets/rel/:fk
 */
export async function Admin_LinkAssets(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Admins/:id/assets/rel/:fk',
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
 * Eliminar la relación assets con un elemento por id.
 * /Admins/:id/assets/rel/:fk
 */
export async function Admin_UnlinkAssets(id: string, fk: string): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Admins/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para activityLogs.
 * /Admins/:id/activityLogs/:fk
 */
export async function Admin_FindByIdActivityLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/activityLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Admins/:id/trackingLogs/:fk
 */
export async function Admin_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/trackingLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo timeZone.
 * /Admins/:id/timeZone
 */
export async function Admin_GetTimeZone(id: string): Promise<TimeZone> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/timeZone',
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación belongsTo var.
 * /Admins/:id/var
 */
export async function Admin_GetVar(id: string): Promise<Var> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/var',
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos accessTokens de Admin.
 * /Admins/:id/accessTokens/count
 */
export async function Admin_CountAccessTokens(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/accessTokens/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * credentials consultas de Admin.
 * /Admins/:id/credentials
 */
export async function Admin_GetCredentials(
  id: string,
  filter: Filter<any> = {}
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/credentials',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos credentials de Admin.
 * /Admins/:id/credentials/count
 */
export async function Admin_CountCredentials(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/credentials/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assets consultas de Admin.
 * /Admins/:id/assets
 */
export async function Admin_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assets de Admin.
 * /Admins/:id/assets/count
 */
export async function Admin_CountAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * activityLogs consultas de Admin.
 * /Admins/:id/activityLogs
 */
export async function Admin_GetActivityLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/activityLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos activityLogs de Admin.
 * /Admins/:id/activityLogs/count
 */
export async function Admin_CountActivityLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/activityLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Admin.
 * /Admins/:id/trackingLogs
 */
export async function Admin_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/trackingLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Admin.
 * /Admins/:id/trackingLogs/count
 */
export async function Admin_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/trackingLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Admins
 */
export async function Admin_create(data: any = {}): Promise<Admin> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins',
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Admins/:id/exists
 */
export async function Admin_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Admins/:id
 */
export async function Admin_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Admin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Admins
 */
export async function Admin_find(filter: Filter<any> = {}): Promise<Admin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Admins/findOne
 */
export async function Admin_findOne(filter: Filter<any> = {}): Promise<Admin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Admins/:id
 */
export async function Admin_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Admins/:id',
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Admins/count
 */
export async function Admin_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Login a user with username/email and password.
 * /Admins/login
 */
export async function Admin_login(
  credentials: UserCrendentials,
  include: Include<any> = {
    relation: 'user',
    scope: { include: ['container'] },
  },
  rememberMe = true
): Promise<CommonAccessToken> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams['include'] = include;
  }

  return ApiFetch({
    method: 'POST',
    url: '/Admins/login',
    urlParams: _urlParams,
    routeParams: {},
    body: {
      ...credentials,
      rememberMe,
    },
  });
}
/**
 * Logout a user with access token.
 * /Admins/logout
 */
export async function Admin_logout(): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins/logout',
    routeParams: {},
    body: {},
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /Admins/:id/verify
 */
export async function Admin_verify(id: string): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins/:id/verify',
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Confirm a user registration with identity verification token.
 * /Admins/confirm
 */
export async function Admin_confirm(
  uid: string,
  token: string,
  redirect: string
): Promise<any> {
  const _urlParams: any = {};
  if (uid != null) {
    _urlParams['uid'] = uid;
  }
  if (token != null) {
    _urlParams['token'] = token;
  }
  if (redirect != null) {
    _urlParams['redirect'] = redirect;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Admins/confirm',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Reset password for a user with email.
 * /Admins/reset
 */
export async function Admin_resetPassword(options: any): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins/reset',
    routeParams: {},
    body: {
      options,
    },
  });
}
/**
 * Change a user's password.
 * /Admins/change-password
 */
export async function Admin_changePassword(
  oldPassword: string,
  newPassword: string
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins/change-password',
    routeParams: {},
    body: {
      data: {
        oldPassword,
        newPassword,
      },
    },
  });
}
/**
 * Reset user's password via a password-reset token.
 * /Admins/reset-password
 */
export async function Admin_setPassword(newPassword: string): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins/reset-password',
    routeParams: {},
    body: {
      data: {
        newPassword,
      },
    },
  });
}
/**
 * Verify account for a user with email.
 * /Admins/verify
 */
export async function Admin_verifyAccount(options: any): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Admins/verify',
    routeParams: {},
    body: {
      options,
    },
  });
}
/**
 * Get information about specified container
 * /Admins/:id/container/info
 */
export async function Admin_getContainerInfo(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/container/info',
    routeParams: {
      id,
    },
  });
}
/**
 * List all files within specified container
 * /Admins/:id/container/files
 */
export async function Admin_getFiles(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/container/files',
    routeParams: {
      id,
    },
  });
}
/**
 * Get information for specified file within specified container
 * /Admins/:id/container/files/:file
 */
export async function Admin_getFile(id: string, file: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Admins/:id/container/files/:file',
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Delete a file within a given container by name
 * /Admins/:id/container/files/:file
 */
export async function Admin_removeFile(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Admins/:id/container/files/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /Admins/:id/container/upload
 */
export async function Admin_upload(id: string, property: string): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'POST',
    url: '/Admins/:id/container/upload',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Download a file within specified container
 * /Admins/:id/container/download/:file
 */
export async function Admin_download(
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
    url: '/Admins/:id/container/download/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
