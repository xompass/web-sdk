import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { CommonAccessToken } from "../models/CommonAccessToken";
import { Country } from "../models/Country";
import { Log } from "../models/Log";
import { SuperAdmin } from "../models/SuperAdmin";
import { TimeZone } from "../models/TimeZone";

/**
 * Find a related item by id for accessTokens.
 * /SuperAdmins/:id/accessTokens/:fk
 */
export async function SuperAdmin_FindByIdAccessTokens(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id/accessTokens/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for activityLogs.
 * /SuperAdmins/:id/activityLogs/:fk
 */
export async function SuperAdmin_FindByIdActivityLogs(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id/activityLogs/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for trackingLogs.
 * /SuperAdmins/:id/trackingLogs/:fk
 */
export async function SuperAdmin_FindByIdTrackingLogs(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation country.
 * /SuperAdmins/:id/country
 */
export async function SuperAdmin_GetCountry(
  id: string,
  options?: ApiRequestOptions,
): Promise<Country> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id/country",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation timeZone.
 * /SuperAdmins/:id/timeZone
 */
export async function SuperAdmin_GetTimeZone(
  id: string,
  options?: ApiRequestOptions,
): Promise<TimeZone> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id/timeZone",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Queries activityLogs of SuperAdmin.
 * /SuperAdmins/:id/activityLogs
 */
export async function SuperAdmin_GetActivityLogs(
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
    url: "/SuperAdmins/:id/activityLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts activityLogs of SuperAdmin.
 * /SuperAdmins/:id/activityLogs/count
 */
export async function SuperAdmin_CountActivityLogs(
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
    url: "/SuperAdmins/:id/activityLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries trackingLogs of SuperAdmin.
 * /SuperAdmins/:id/trackingLogs
 */
export async function SuperAdmin_GetTrackingLogs(
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
    url: "/SuperAdmins/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts trackingLogs of SuperAdmin.
 * /SuperAdmins/:id/trackingLogs/count
 */
export async function SuperAdmin_CountTrackingLogs(
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
    url: "/SuperAdmins/:id/trackingLogs/count",
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
 * /SuperAdmins
 */
export async function SuperAdmin_create(
  data?: any,
  options?: ApiRequestOptions,
): Promise<SuperAdmin> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins",
    body: data,
    ...options,
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SuperAdmins/:id/exists
 */
export async function SuperAdmin_exists(
  id: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id/exists",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SuperAdmins/:id
 */
export async function SuperAdmin_findById(
  id: string,
  filter?: Filter<SuperAdmin>,
  options?: ApiRequestOptions,
): Promise<SuperAdmin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Replace attributes for a model instance and persist it into the data source.
 * /SuperAdmins/:id/replace
 */
export async function SuperAdmin_replaceById(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<SuperAdmin> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/:id/replace",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SuperAdmins
 */
export async function SuperAdmin_find(
  filter?: Filter<SuperAdmin>,
  options?: ApiRequestOptions,
): Promise<SuperAdmin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SuperAdmins/findOne
 */
export async function SuperAdmin_findOne(
  filter?: Filter<SuperAdmin>,
  options?: ApiRequestOptions,
): Promise<SuperAdmin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/findOne",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SuperAdmins/:id
 */
export async function SuperAdmin_deleteById(
  id: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/SuperAdmins/:id",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SuperAdmins/count
 */
export async function SuperAdmin_count(
  where?: Filter<SuperAdmin>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/SuperAdmins/count",
    urlParams: _urlParams,
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Patch attributes for a model instance and persist it into the data source.
 * /SuperAdmins/:id
 */
export async function SuperAdmin_patchAttributes(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<SuperAdmin> {
  return ApiFetch({
    method: "PUT",
    url: "/SuperAdmins/:id",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Login a user with username/email and password.
 * /SuperAdmins/login
 */
export async function SuperAdmin_login(
  credentials: ({ username: string } | { email: string }) & {
    password: string;
    twoFactorMethod?: "totp" | "recovery";
    twoFactorCode?: string;
  },
  include?: Filter<SuperAdmin>["include"],
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams["include"] = include;
  }

  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/login",
    urlParams: _urlParams,
    body: { ...credentials },
    ...options,
  });
}
/**
 * Logout a user with access token.
 * /SuperAdmins/logout
 */
export async function SuperAdmin_logout(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/logout",
    ...options,
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /SuperAdmins/:id/verify
 */
export async function SuperAdmin_verify(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/:id/verify",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Confirm a user registration with identity verification token.
 * /SuperAdmins/confirm
 */
export async function SuperAdmin_confirm(
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
    url: "/SuperAdmins/confirm",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Reset password for a user with email.
 * /SuperAdmins/reset
 */
export async function SuperAdmin_resetPassword(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/reset",
    body: options,
    ...requestOptions,
  });
}
/**
 * Change a user's password.
 * /SuperAdmins/change-password
 */
export async function SuperAdmin_changePassword(
  oldPassword: string,
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/change-password",
    body: { oldPassword, newPassword },
    ...options,
  });
}
/**
 * Reset user's password via a password-reset token.
 * /SuperAdmins/reset-password
 */
export async function SuperAdmin_setPassword(
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/reset-password",
    body: { newPassword },
    ...options,
  });
}
/**
 * Get the current access token for the user.
 * /SuperAdmins/:id/currentAccessToken
 */
export async function SuperAdmin_getCurrentToken(
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
    url: "/SuperAdmins/:id/currentAccessToken",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get telegram sessions active for user.
 * /SuperAdmins/:id/miniapp/activeSessions
 */
export async function SuperAdmin_getMiniAppUserSessionsActive(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/:id/miniapp/activeSessions",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Logout user from miniapp
 * /SuperAdmins/:id/telegram/miniapp/logout
 */
export async function SuperAdmin_MiniAppUserSessionActiveLogout(
  id: string,
  data: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/:id/telegram/miniapp/logout",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Verify account for a user with email.
 * /SuperAdmins/verify
 */
export async function SuperAdmin_verifyAccount(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SuperAdmins/verify",
    body: options,
    ...requestOptions,
  });
}
/**
 * Whether this environment requires email verification for this user type.
 * /SuperAdmins/emailVerificationRequired
 */
export async function SuperAdmin_getEmailVerificationRequired(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SuperAdmins/emailVerificationRequired",
    ...options,
  });
}
