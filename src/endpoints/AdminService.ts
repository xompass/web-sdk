import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  UploadFile,
  UploadableFile,
  unwrapCount,
} from "../core/ApiFetch";
import { Admin, AdminStorageContainer } from "../models/Admin";
import { Asset } from "../models/Asset";
import { CommonAccessToken } from "../models/CommonAccessToken";
import { Country } from "../models/Country";
import { Credential } from "../models/Credential";
import { Log } from "../models/Log";
import { TimeZone } from "../models/TimeZone";
import { Var } from "../models/Var";

/**
 * Find a related item by id for accessTokens.
 * /Admins/:id/accessTokens/:fk
 */
export async function Admin_FindByIdAccessTokens(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/accessTokens/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation country.
 * /Admins/:id/country
 */
export async function Admin_GetCountry(
  id: string,
  options?: ApiRequestOptions,
): Promise<Country> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/country",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Fetches hasOne relation container.
 * /Admins/:id/container
 */
export async function Admin_GetContainer(
  id: string,
  options?: ApiRequestOptions,
): Promise<AdminStorageContainer> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/container",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a related item by id for credentials.
 * /Admins/:id/credentials/:fk
 */
export async function Admin_FindByIdCredentials(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Credential> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/credentials/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Check the existence of credentials relation to an item by id.
 * /Admins/:id/credentials/rel/:fk
 */
export async function Admin_ExistsCredentials(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Admins/:id/credentials/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for assets.
 * /Admins/:id/assets/rel/:fk
 */
export async function Admin_LinkAssets(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Admins/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the assets relation to an item by id.
 * /Admins/:id/assets/rel/:fk
 */
export async function Admin_UnlinkAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Admins/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for activityLogs.
 * /Admins/:id/activityLogs/:fk
 */
export async function Admin_FindByIdActivityLogs(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/activityLogs/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation timeZone.
 * /Admins/:id/timeZone
 */
export async function Admin_GetTimeZone(
  id: string,
  options?: ApiRequestOptions,
): Promise<TimeZone> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/timeZone",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation var.
 * /Admins/:id/var
 */
export async function Admin_GetVar(
  id: string,
  options?: ApiRequestOptions,
): Promise<Var> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/var",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Queries credentials of Admin.
 * /Admins/:id/credentials
 */
export async function Admin_GetCredentials(
  id: string,
  filter?: Filter<Credential>,
  options?: ApiRequestOptions,
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/credentials",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts credentials of Admin.
 * /Admins/:id/credentials/count
 */
export async function Admin_CountCredentials(
  id: string,
  where?: Filter<Credential>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Admins/:id/credentials/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries assets of Admin.
 * /Admins/:id/assets
 */
export async function Admin_GetAssets(
  id: string,
  filter?: Filter<Asset>,
  options?: ApiRequestOptions,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts assets of Admin.
 * /Admins/:id/assets/count
 */
export async function Admin_CountAssets(
  id: string,
  where?: Filter<Asset>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Admins/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries activityLogs of Admin.
 * /Admins/:id/activityLogs
 */
export async function Admin_GetActivityLogs(
  id: string,
  filter?: Filter<Log>,
  options?: ApiRequestOptions,
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/activityLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts activityLogs of Admin.
 * /Admins/:id/activityLogs/count
 */
export async function Admin_CountActivityLogs(
  id: string,
  where?: Filter<Log>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Admins/:id/activityLogs/count",
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
 * /Admins
 */
export async function Admin_create(
  data?: any,
  options?: ApiRequestOptions,
): Promise<Admin> {
  return ApiFetch({
    method: "POST",
    url: "/Admins",
    body: data,
    ...options,
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Admins/:id/exists
 */
export async function Admin_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Admins/:id
 */
export async function Admin_findById(
  id: string,
  filter?: Filter<Admin>,
  options?: ApiRequestOptions,
): Promise<Admin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Admins/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Replace attributes for a model instance and persist it into the data source.
 * /Admins/:id/replace
 */
export async function Admin_replaceById(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Admin> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/:id/replace",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Admins/:id
 */
export async function Admin_deleteById(
  id: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Admins/:id",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Patch attributes for a model instance and persist it into the data source.
 * /Admins/:id
 */
export async function Admin_patchAttributes(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Admin> {
  return ApiFetch({
    method: "PUT",
    url: "/Admins/:id",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Login a user with username/email and password.
 * /Admins/login
 */
export async function Admin_login(
  credentials: ({ username: string } | { email: string }) & {
    password: string;
    twoFactorMethod?: "totp" | "recovery";
    twoFactorCode?: string;
  },
  include?: Filter<Admin>["include"],
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams["include"] = include;
  }

  return ApiFetch({
    method: "POST",
    url: "/Admins/login",
    urlParams: _urlParams,
    body: { ...credentials },
    ...options,
  });
}
/**
 * Logout a user with access token.
 * /Admins/logout
 */
export async function Admin_logout(options?: ApiRequestOptions): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/logout",
    ...options,
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /Admins/:id/verify
 */
export async function Admin_verify(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/:id/verify",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Confirm a user registration with identity verification token.
 * /Admins/confirm
 */
export async function Admin_confirm(
  uid: string,
  token: string,
  redirect?: string,
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  const _urlParams: any = {};
  if (uid != null) {
    _urlParams["uid"] = uid;
  }
  if (token != null) {
    _urlParams["token"] = token;
  }
  if (redirect != null) {
    _urlParams["redirect"] = redirect;
  }

  return ApiFetch({
    method: "GET",
    url: "/Admins/confirm",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Reset password for a user with email.
 * /Admins/reset
 */
export async function Admin_resetPassword(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/reset",
    body: options,
    ...requestOptions,
  });
}
/**
 * Change a user's password.
 * /Admins/change-password
 */
export async function Admin_changePassword(
  oldPassword: string,
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/change-password",
    body: { oldPassword, newPassword },
    ...options,
  });
}
/**
 * Reset user's password via a password-reset token.
 * /Admins/reset-password
 */
export async function Admin_setPassword(
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/reset-password",
    body: { newPassword },
    ...options,
  });
}
/**
 * Get the current access token for the user.
 * /Admins/:id/currentAccessToken
 */
export async function Admin_getCurrentToken(
  id: string,
  include?: Filter<CommonAccessToken>["include"],
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams["include"] = include;
  }

  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/currentAccessToken",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get telegram sessions active for user.
 * /Admins/:id/miniapp/activeSessions
 */
export async function Admin_getMiniAppUserSessionsActive(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/miniapp/activeSessions",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Logout user from miniapp
 * /Admins/:id/telegram/miniapp/logout
 */
export async function Admin_MiniAppUserSessionActiveLogout(
  id: string,
  data: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/:id/telegram/miniapp/logout",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Verify account for a user with email.
 * /Admins/verify
 */
export async function Admin_verifyAccount(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Admins/verify",
    body: options,
    ...requestOptions,
  });
}
/**
 * Whether this environment requires email verification for this user type.
 * /Admins/emailVerificationRequired
 */
export async function Admin_getEmailVerificationRequired(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/emailVerificationRequired",
    ...options,
  });
}
/**
 * Get information about specified container
 * /Admins/:id/container/info
 */
export async function Admin_getContainerInfo(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/container/info",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * List all files within specified container
 * /Admins/:id/container/files
 */
export async function Admin_getFiles(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/container/files",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get information for specified file within specified container
 * /Admins/:id/container/files/:file
 */
export async function Admin_getFile(
  id: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/container/files/:file",
    routeParams: {
      id,
      file,
    },
    ...options,
  });
}
/**
 * Delete a file within a given container by name
 * /Admins/:id/container/files/:file
 */
export async function Admin_removeFile(
  id: string,
  property: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<void> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/Admins/:id/container/files/:file",
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
 * /Admins/:id/container/upload
 */
export async function Admin_upload(
  id: string,
  property: string,
  file: UploadableFile,
  onProgress?: (progress: number) => void,
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return UploadFile({
    url: "/Admins/:id/container/upload",
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
 * /Admins/:id/container/download/:file
 */
export async function Admin_download(
  id: string,
  property: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "GET",
    url: "/Admins/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
    ...options,
  });
}
