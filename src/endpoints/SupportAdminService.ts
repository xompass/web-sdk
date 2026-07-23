import { ApiFetch, Filter, UploadFile, UploadableFile } from "../core/ApiFetch";
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
): Promise<CommonAccessToken> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/accessTokens/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for activityLogs.
 * /SupportAdmins/:id/activityLogs/:fk
 */
export async function SupportAdmin_FindByIdActivityLogs(
  id: string,
  fk: string,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/activityLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Fetches hasOne relation container.
 * /SupportAdmins/:id/container
 */
export async function SupportAdmin_GetContainer(
  id: string,
): Promise<SupportAdminStorageContainer> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * Queries activityLogs of SupportAdmin.
 * /SupportAdmins/:id/activityLogs
 */
export async function SupportAdmin_GetActivityLogs(
  id: string,
  filter?: Filter<Log>,
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
  });
}
/**
 * Counts activityLogs of SupportAdmin.
 * /SupportAdmins/:id/activityLogs/count
 */
export async function SupportAdmin_CountActivityLogs(
  id: string,
  where?: Filter<Log>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/activityLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SupportAdmins
 */
export async function SupportAdmin_create(data?: any): Promise<SupportAdmin> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins",
    body: data,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SupportAdmins/:id
 */
export async function SupportAdmin_findById(
  id: string,
  filter?: Filter<SupportAdmin>,
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
  });
}
/**
 * Replace attributes for a model instance and persist it into the data source.
 * /SupportAdmins/:id/replace
 */
export async function SupportAdmin_replaceById(
  id: string,
  data?: any,
): Promise<SupportAdmin> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/:id/replace",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SupportAdmins/:id
 */
export async function SupportAdmin_deleteById(id: string): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/SupportAdmins/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Patch attributes for a model instance and persist it into the data source.
 * /SupportAdmins/:id
 */
export async function SupportAdmin_patchAttributes(
  id: string,
  data?: any,
): Promise<SupportAdmin> {
  return ApiFetch({
    method: "PUT",
    url: "/SupportAdmins/:id",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Login a user with username/email and password.
 * /SupportAdmins/login
 */
export async function SupportAdmin_login(
  credentials:
    | { username: string; password: string }
    | { email: string; password: string },
  include?: Filter<SupportAdmin>["include"],
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
  });
}
/**
 * Logout a user with access token.
 * /SupportAdmins/logout
 */
export async function SupportAdmin_logout(): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/logout",
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /SupportAdmins/:id/verify
 */
export async function SupportAdmin_verify(id: string): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/:id/verify",
    routeParams: {
      id,
    },
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
): Promise<any> {
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
  });
}
/**
 * Reset password for a user with email.
 * /SupportAdmins/reset
 */
export async function SupportAdmin_resetPassword(options: any): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/reset",
    body: options,
  });
}
/**
 * Change a user's password.
 * /SupportAdmins/change-password
 */
export async function SupportAdmin_changePassword(
  oldPassword: string,
  newPassword: string,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/change-password",
    body: { oldPassword, newPassword },
  });
}
/**
 * Reset user's password via a password-reset token.
 * /SupportAdmins/reset-password
 */
export async function SupportAdmin_setPassword(
  newPassword: string,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/reset-password",
    body: { newPassword },
  });
}
/**
 * Get the current access token for the user.
 * /SupportAdmins/:id/currentAccessToken
 */
export async function SupportAdmin_getCurrentToken(
  id: string,
  include?: Filter<CommonAccessToken>["include"],
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
  });
}
/**
 * Login a user with username/email, password and OTP.
 * /SupportAdmins/otp/login
 */
export async function SupportAdmin_otpLogin(
  credentials: any,
  include?: Filter<SupportAdmin>["include"],
): Promise<any> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams["include"] = include;
  }

  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/otp/login",
    urlParams: _urlParams,
    body: { ...credentials },
  });
}
/**
 * Disable OTP for the currently logged in user.
 * /SupportAdmins/:id/otp/disable
 */
export async function SupportAdmin_otpDisable(id: string): Promise<any> {
  return ApiFetch({
    method: "PATCH",
    url: "/SupportAdmins/:id/otp/disable",
    routeParams: {
      id,
    },
  });
}
/**
 * Get telegram sessions active for user.
 * /SupportAdmins/:id/miniapp/activeSessions
 */
export async function SupportAdmin_getMiniAppUserSessionsActive(
  id: string,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/miniapp/activeSessions",
    routeParams: {
      id,
    },
  });
}
/**
 * Logout user from miniapp
 * /SupportAdmins/:id/telegram/miniapp/logout
 */
export async function SupportAdmin_MiniAppUserSessionActiveLogout(
  id: string,
  data: any,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/:id/telegram/miniapp/logout",
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Check if the user has the OTP authentication enabled.
 * /SupportAdmins/:id/otp/check
 */
export async function SupportAdmin_otpCheck(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/otp/check",
    routeParams: {
      id,
    },
  });
}
/**
 * Generate the OTP url for the currently logged in user.
 * /SupportAdmins/:id/otp/generate
 */
export async function SupportAdmin_otpGenerate(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SupportAdmins/:id/otp/generate",
    routeParams: {
      id,
    },
  });
}
/**
 * Verify the OTP for the currently logged in user.
 * /SupportAdmins/:id/otp/verify
 */
export async function SupportAdmin_otpVerify(
  id: string,
  obj?: any,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/:id/otp/verify",
    routeParams: {
      id,
    },
    body: { ...obj },
  });
}
/**
 * Verify account for a user with email.
 * /SupportAdmins/verify
 */
export async function SupportAdmin_verifyAccount(options: any): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/SupportAdmins/verify",
    body: options,
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
  });
}
