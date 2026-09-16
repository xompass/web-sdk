import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  UploadFile,
  UploadableFile,
  unwrapCount,
} from "../core/ApiFetch";
import { CommonAccessToken } from "../models/CommonAccessToken";
import { Log } from "../models/Log";
import {
  SupportAdmin,
  SupportAdminStorageContainer,
} from "../models/SupportAdmin";

/**
 * Find a related item by id for accessTokens.
 * /SupportAdmins/:id/accessTokens/:fk
 */
export async function SupportAdmin_FindByIdAccessTokens(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/accessTokens/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for activityLogs.
 * /SupportAdmins/:id/activityLogs/:fk
 */
export async function SupportAdmin_FindByIdActivityLogs(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/activityLogs/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches hasOne relation container.
 * /SupportAdmins/:id/container
 */
export async function SupportAdmin_GetContainer(
  id: string,
  options?: ApiRequestOptions,
): Promise<SupportAdminStorageContainer> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/container",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Queries activityLogs of SupportAdmin.
 * /SupportAdmins/:id/activityLogs
 */
export async function SupportAdmin_GetActivityLogs(
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
    url: "/SupportAdmins/:id/activityLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts activityLogs of SupportAdmin.
 * /SupportAdmins/:id/activityLogs/count
 */
export async function SupportAdmin_CountActivityLogs(
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
    url: "/SupportAdmins/:id/activityLogs/count",
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
 * /SupportAdmins
 */
export async function SupportAdmin_create(
  data?: any,
  options?: ApiRequestOptions,
): Promise<SupportAdmin> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins",
    body: data,
    ...options,
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SupportAdmins/:id/exists
 */
export async function SupportAdmin_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SupportAdmins/:id
 */
export async function SupportAdmin_findById(
  id: string,
  filter?: Filter<SupportAdmin>,
  options?: ApiRequestOptions,
): Promise<SupportAdmin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Replace attributes for a model instance and persist it into the data source.
 * /SupportAdmins/:id/replace
 */
export async function SupportAdmin_replaceById(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<SupportAdmin> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/:id/replace",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SupportAdmins
 */
export async function SupportAdmin_find(
  filter?: Filter<SupportAdmin>,
  options?: ApiRequestOptions,
): Promise<SupportAdmin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SupportAdmins/findOne
 */
export async function SupportAdmin_findOne(
  filter?: Filter<SupportAdmin>,
  options?: ApiRequestOptions,
): Promise<SupportAdmin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/findOne",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SupportAdmins/:id
 */
export async function SupportAdmin_deleteById(
  id: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/SupportAdmins/:id",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Patch attributes for a model instance and persist it into the data source.
 * /SupportAdmins/:id
 */
export async function SupportAdmin_patchAttributes(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<SupportAdmin> {
  return ApiFetch({
    method: "PUT",
    url: "/SupportAdmins/:id",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Login a user with username/email and password.
 * /SupportAdmins/login
 */
export async function SupportAdmin_login(
  credentials: ({ username: string } | { email: string }) & {
    password: string;
    twoFactorMethod?: "totp" | "recovery";
    twoFactorCode?: string;
  },
  include?: Filter<SupportAdmin>["include"],
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams["include"] = include;
  }

  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/login",
    urlParams: _urlParams,
    body: { ...credentials },
    ...options,
  });
}
/**
 * Logout a user with access token.
 * /SupportAdmins/logout
 */
export async function SupportAdmin_logout(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/logout",
    ...options,
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /SupportAdmins/:id/verify
 */
export async function SupportAdmin_verify(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/:id/verify",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Confirm a user registration with identity verification token.
 * /SupportAdmins/confirm
 */
export async function SupportAdmin_confirm(
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
    url: "/SupportAdmins/confirm",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Reset password for a user with email.
 * /SupportAdmins/reset
 */
export async function SupportAdmin_resetPassword(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/reset",
    body: options,
    ...requestOptions,
  });
}
/**
 * Change a user's password.
 * /SupportAdmins/change-password
 */
export async function SupportAdmin_changePassword(
  oldPassword: string,
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/change-password",
    body: { oldPassword, newPassword },
    ...options,
  });
}
/**
 * Reset user's password via a password-reset token.
 * /SupportAdmins/reset-password
 */
export async function SupportAdmin_setPassword(
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/reset-password",
    body: { newPassword },
    ...options,
  });
}
/**
 * Get the current access token for the user.
 * /SupportAdmins/:id/currentAccessToken
 */
export async function SupportAdmin_getCurrentToken(
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
    url: "/SupportAdmins/:id/currentAccessToken",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get telegram sessions active for user.
 * /SupportAdmins/:id/miniapp/activeSessions
 */
export async function SupportAdmin_getMiniAppUserSessionsActive(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/miniapp/activeSessions",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Logout user from miniapp
 * /SupportAdmins/:id/telegram/miniapp/logout
 */
export async function SupportAdmin_MiniAppUserSessionActiveLogout(
  id: string,
  data: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/:id/telegram/miniapp/logout",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Verify account for a user with email.
 * /SupportAdmins/verify
 */
export async function SupportAdmin_verifyAccount(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/verify",
    body: options,
    ...requestOptions,
  });
}
/**
 * Whether this environment requires email verification for this user type.
 * /SupportAdmins/emailVerificationRequired
 */
export async function SupportAdmin_getEmailVerificationRequired(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/emailVerificationRequired",
    ...options,
  });
}
/**
 * Upload a profile file into the SupportAdmin storage container
 * /SupportAdmins/:id/container/upload
 */
export async function SupportAdmin_upload(
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
    url: "/SupportAdmins/:id/container/upload",
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
 * Download the SupportAdmin profile file
 * /SupportAdmins/:id/container/download/:file
 */
export async function SupportAdmin_download(
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
    url: "/SupportAdmins/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
    ...options,
  });
}
