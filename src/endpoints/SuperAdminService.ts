import { ApiFetch, Filter, Include } from '../core/ApiFetch';
import { CommonAccessToken } from '../models/CommonAccessToken';
import { SuperAdmin } from '../models/SuperAdmin';

/**
 * Buscar un elemento relacionado por id para accessTokens.
 * /SuperAdmins/:id/accessTokens/:fk
 */
export async function SuperAdmin_FindByIdAccessTokens(
  id: string,
  fk: string,
): Promise<CommonAccessToken> {
  return ApiFetch({
    method: 'GET',
    url: '/SuperAdmins/:id/accessTokens/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Get the current access token for the user.
 * /SuperAdmins/:id/currentAccessToken
 */
export async function SuperAdmin_getCurrentToken(
  id: string,
  include?: string,
): Promise<CommonAccessToken> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams['include'] = include;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SuperAdmins/:id/currentAccessToken',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}

/**
 * Find a model instance by {{id}} from the data source.
 * /SuperAdmins/:id
 */
export async function SuperAdmin_findById(
  id: string,
  filter: Filter<any> = {},
): Promise<SuperAdmin> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SuperAdmins/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SuperAdmins/:id
 */
export async function SuperAdmin_deleteById(id: string): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/SuperAdmins/:id',
    routeParams: {
      id,
    },
  });
}
/**
 * Login a user with username/email and password.
 * /SuperAdmins/login
 */
export async function SuperAdmin_login(
  credentials: any,
  include: Include<any> = {
    relation: 'user',
    scope: { include: ['container'] },
  },
  rememberMe: boolean = true,
): Promise<any> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams['include'] = include;
  }

  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/login',
    urlParams: _urlParams,
    routeParams: {},
    body: {
      credentials,
    },
  });
}
/**
 * Logout a user with access token.
 * /SuperAdmins/logout
 */
export async function SuperAdmin_logout(): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/logout',
    routeParams: {},
    body: {},
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /SuperAdmins/:id/verify
 */
export async function SuperAdmin_verify(id: string): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/:id/verify',
    routeParams: {
      id,
    },
    body: {},
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
    url: '/SuperAdmins/confirm',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Reset password for a user with email.
 * /SuperAdmins/reset
 */
export async function SuperAdmin_resetPassword(options: any): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/reset',
    routeParams: {},
    body: {
      options,
    },
  });
}
/**
 * Change a user's password.
 * /SuperAdmins/change-password
 */
export async function SuperAdmin_changePassword(
  oldPassword: string,
  newPassword: string,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/change-password',
    routeParams: {},
    body: {
      oldPassword,
      newPassword,
    },
  });
}
/**
 * Reset user's password via a password-reset token.
 * /SuperAdmins/reset-password
 */
export async function SuperAdmin_setPassword(
  newPassword: string,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/reset-password',
    routeParams: {},
    body: {
      newPassword,
    },
  });
}
/**
 * Login a user with username/email, password and OTP.
 * /SuperAdmins/otp/login
 */
export async function SuperAdmin_otpLogin(
  credentials: any,
  include?: string,
): Promise<any> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams['include'] = include;
  }

  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/otp/login',
    urlParams: _urlParams,
    routeParams: {},
    body: {
      credentials,
    },
  });
}
/**
 * Disable OTP for the currently logged in user.
 * /SuperAdmins/:id/otp/disable
 */
export async function SuperAdmin_otpDisable(id: string): Promise<any> {
  return ApiFetch({
    method: 'PATCH',
    url: '/SuperAdmins/:id/otp/disable',
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Check if the user has the OTP authentication enabled.
 * /SuperAdmins/:id/otp/check
 */
export async function SuperAdmin_otpCheck(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SuperAdmins/:id/otp/check',
    routeParams: {
      id,
    },
  });
}
/**
 * Generate the OTP url for the currently logged in user.
 * /SuperAdmins/:id/otp/generate
 */
export async function SuperAdmin_otpGenerate(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SuperAdmins/:id/otp/generate',
    routeParams: {
      id,
    },
  });
}
/**
 * Verify the OTP for the currently logged in user.
 * /SuperAdmins/:id/otp/verify
 */
export async function SuperAdmin_otpVerify(
  id: string,
  obj: any = {},
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/:id/otp/verify',
    routeParams: {
      id,
    },
    body: {
      obj,
    },
  });
}
/**
 * Verify account for a user with email.
 * /SuperAdmins/verify
 */
export async function SuperAdmin_verifyAccount(options: any): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/SuperAdmins/verify',
    routeParams: {},
    body: {
      options,
    },
  });
}
