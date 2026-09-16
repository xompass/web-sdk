import { FetchError, Include } from "./core/ApiFetch";
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from "./core/LocalStorage";
import { User, UserCrendentials, UserType } from "./core/User";
import {
  Admin_findById,
  Admin_getCurrentToken,
  Admin_login,
  Admin_logout,
} from "./endpoints/AdminService";
import {
  Manager_findById,
  Manager_getCurrentToken,
  Manager_login,
  Manager_logout,
} from "./endpoints/ManagerService";
import {
  SuperAdmin_findById,
  SuperAdmin_getCurrentToken,
  SuperAdmin_login,
  SuperAdmin_logout,
} from "./endpoints/SuperAdminService";
import {
  SupportAdmin_findById,
  SupportAdmin_getCurrentToken,
  SupportAdmin_login,
  SupportAdmin_logout,
} from "./endpoints/SupportAdminService";
import { CommonAccessToken } from "./models/CommonAccessToken";

export type TwoFactorMethod = "totp" | "recovery";

export type TwoFactorChallenge = {
  challengeId: string;
  methods?: TwoFactorMethod[];
  expiresIn?: number;
};

export type LoginResult =
  | { status: "authenticated"; user: User }
  | {
      status: "otp-required";
      credentials: UserCrendentials;
      challenge?: TwoFactorChallenge;
    };

export class OtpRequiredError extends Error {
  public readonly code = "TWO_FACTOR_REQUIRED";

  constructor(
    public readonly credentials: UserCrendentials,
    public readonly challenge?: TwoFactorChallenge,
  ) {
    super("A second factor is required to complete login.");
    this.name = "OtpRequiredError";
  }
}

export class PrincipalTypeMismatchError extends Error {
  public readonly code = "PRINCIPAL_TYPE_MISMATCH";

  constructor(
    public readonly expected: UserType,
    public readonly received: string,
  ) {
    super(`Login returned ${received}; expected ${expected}.`);
    this.name = "PrincipalTypeMismatchError";
  }
}

type LoginEndpoint = (credentials: any, include?: any) => Promise<any>;

const principalTypes: UserType[] = [
  "Admin",
  "Manager",
  "SuperAdmin",
  "SupportAdmin",
];

function isPrincipalType(value: unknown): value is UserType {
  return (
    typeof value === "string" && principalTypes.includes(value as UserType)
  );
}

function getErrorDetails(value: unknown): any {
  if (!value || typeof value !== "object") {
    return undefined;
  }
  const envelope = value as {
    error?: { details?: unknown };
    details?: unknown;
  };
  if (envelope.error && typeof envelope.error === "object") {
    return envelope.error.details ?? envelope.error;
  }
  return envelope.details;
}

export function isTwoFactorRequiredError(error: unknown): error is FetchError {
  return error instanceof FetchError && error.code === "TWO_FACTOR_REQUIRED";
}

export function getTwoFactorChallenge(
  error: unknown,
): TwoFactorChallenge | undefined {
  if (!isTwoFactorRequiredError(error)) {
    return undefined;
  }

  const details = getErrorDetails(error.details);
  if (!details || typeof details.challengeId !== "string") {
    return { challengeId: "" };
  }

  return {
    challengeId: details.challengeId,
    methods: Array.isArray(details.methods) ? details.methods : undefined,
    expiresIn:
      typeof details.expiresIn === "number" ? details.expiresIn : undefined,
  };
}

function getUserInclude(principalType: UserType): Include<any> {
  const userIncludes =
    principalType === "Admin" || principalType === "SupportAdmin"
      ? ["container"]
      : principalType === "Manager"
        ? ["container", "permission"]
        : undefined;

  return {
    relation: "user",
    scope: userIncludes ? { include: userIncludes } : undefined,
  };
}

function getLoginFunction(principalType: UserType): LoginEndpoint {
  switch (principalType) {
    case "Admin":
      return Admin_login;
    case "Manager":
      return Manager_login;
    case "SuperAdmin":
      return SuperAdmin_login;
    case "SupportAdmin":
      return SupportAdmin_login;
    default:
      throw new Error("Invalid user type");
  }
}

function normalizeCredentials(credentials: UserCrendentials): UserCrendentials {
  if ("username" in credentials && credentials.username.includes("@")) {
    return { email: credentials.username, password: credentials.password };
  }

  return credentials;
}

function setUserType(user: User, principalType: UserType): User {
  (user as User & { type?: UserType }).type = principalType;
  return user;
}

export class ApiClient {
  private cachedUser: User | undefined;

  constructor(
    private readonly baseUrl: string,
    private accessToken?: string,
    private userId?: string,
    private principalType?: UserType,
  ) {
    const previousBaseUrl = getLocalStorageValue("vsaas$baseUrl");
    if (previousBaseUrl && previousBaseUrl !== baseUrl) {
      this.logout();
    }

    setLocalStorageValue("vsaas$baseUrl", this.baseUrl);
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public getAccessToken(): string | undefined {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string | undefined): void {
    this.accessToken = accessToken;
  }

  public getUserId(): string | undefined {
    return this.userId;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getPrincipalType(): UserType | undefined {
    return this.principalType;
  }

  public setPrincipalType(principalType: UserType): void {
    this.principalType = principalType;
  }

  public getCachedUser(): User | undefined {
    return this.cachedUser;
  }

  public async logout(): Promise<void> {
    const storedAccessToken = getLocalStorageValue("vsaas$accessToken");
    if (storedAccessToken && this.principalType) {
      try {
        switch (this.principalType) {
          case "Admin":
            await Admin_logout();
            break;
          case "Manager":
            await Manager_logout();
            break;
          case "SuperAdmin":
            await SuperAdmin_logout();
            break;
          case "SupportAdmin":
            await SupportAdmin_logout();
            break;
          default:
            throw new Error("Invalid user type");
        }
      } catch {
        // Logout must clear local state even if the server is unavailable.
      }
    }

    this.accessToken = undefined;
    this.userId = undefined;
    this.principalType = undefined;
    this.cachedUser = undefined;

    setLocalStorageValue("vsaas$accessToken", undefined);
    setLocalStorageValue("vsaas$userId", undefined);
    setLocalStorageValue("vsaas$principalType", undefined);
  }

  /**
   * Backwards-compatible login API. When the backend requires 2FA, callers
   * should catch OtpRequiredError and continue with loginWithOtp().
   */
  public async login(): Promise<User>;
  public async login(
    credentials: UserCrendentials,
    principalType: UserType,
  ): Promise<User>;
  public async login(
    credentials?: UserCrendentials,
    principalType?: UserType,
  ): Promise<User> {
    if (credentials && principalType) {
      const result = await this.loginWithCredentials(
        credentials,
        principalType,
      );
      if (result.status === "otp-required") {
        throw new OtpRequiredError(result.credentials, result.challenge);
      }

      return result.user;
    }

    return this.restoreLogin();
  }

  /**
   * Performs the password step. A successful response is authenticated; a
   * TWO_FACTOR_REQUIRED error is returned without persisting a partial token.
   */
  public async loginWithCredentials(
    credentials: UserCrendentials,
    principalType: UserType,
  ): Promise<LoginResult> {
    this.assertPrincipalType(principalType);
    const normalizedCredentials = normalizeCredentials(credentials);
    const login = getLoginFunction(principalType);
    this.principalType = principalType;

    try {
      const response = await login(
        normalizedCredentials,
        getUserInclude(principalType),
      );

      return {
        status: "authenticated",
        user: await this.finishTokenLogin(response, principalType),
      };
    } catch (error) {
      const challenge = getTwoFactorChallenge(error);
      if (!challenge) {
        throw error;
      }

      return {
        status: "otp-required",
        credentials: normalizedCredentials,
        challenge,
      };
    }
  }

  /**
   * Completes a password login after the framework requested a second factor.
   * Native `login` accepts `twoFactorMethod` and `twoFactorCode`.
   */
  public async loginWithOtp(
    credentials: UserCrendentials,
    code: string,
    principalType: UserType,
    method: TwoFactorMethod = "totp",
  ): Promise<User> {
    this.assertPrincipalType(principalType);
    if (!code.trim()) {
      throw new Error("OTP code is required");
    }

    const normalizedCredentials = normalizeCredentials(credentials);
    const login = getLoginFunction(principalType);
    this.principalType = principalType;

    try {
      const response = await login(
        {
          ...normalizedCredentials,
          twoFactorMethod: method,
          twoFactorCode: code,
        },
        getUserInclude(principalType),
      );

      return this.finishTokenLogin(response, principalType);
    } catch (error) {
      const challenge = getTwoFactorChallenge(error);
      if (challenge) {
        throw new OtpRequiredError(normalizedCredentials, challenge);
      }

      throw error;
    }
  }

  public getTokenTTL(token: CommonAccessToken): number {
    if (!token.created || token.ttl == null) {
      throw new Error("Login response did not contain token expiration data.");
    }

    const now = Date.now();
    const expiresAt = new Date(token.created).getTime() + token.ttl * 1000;

    if (!Number.isFinite(expiresAt) || now > expiresAt) {
      throw new Error("Access token is expired");
    }

    return (expiresAt - now) / 1000;
  }

  private assertPrincipalType(principalType: UserType): void {
    if (!isPrincipalType(principalType)) {
      throw new Error("Invalid user type");
    }
  }

  private async finishTokenLogin(
    response: unknown,
    expectedPrincipalType: UserType,
  ): Promise<User> {
    const token = response as CommonAccessToken & { user?: User };
    if (!token.id || !token.userId) {
      throw new Error(
        "Login response did not contain a complete access token.",
      );
    }

    if (token.principalType && token.principalType !== expectedPrincipalType) {
      throw new PrincipalTypeMismatchError(
        expectedPrincipalType,
        token.principalType,
      );
    }

    const ttl = this.getTokenTTL(token);
    this.accessToken = token.id;
    this.userId = token.userId;
    this.principalType = expectedPrincipalType;

    setLocalStorageValue("vsaas$accessToken", token.id, ttl);
    setLocalStorageValue("vsaas$userId", token.userId, ttl);
    setLocalStorageValue("vsaas$principalType", expectedPrincipalType, ttl);

    if (token.user) {
      const user = setUserType(token.user, expectedPrincipalType);
      this.cachedUser = user;
      return user;
    }

    // Some backend responses omit the included user. Reuse the validated
    // token to fetch the principal instead of dereferencing token.user.
    return this.restoreLogin();
  }

  private async restoreLogin(): Promise<User> {
    const defaultTTL = 48 * 60 * 60;
    if (!this.accessToken || !this.userId || !this.principalType) {
      throw new Error("access token, user id, and principal type required");
    }

    this.assertPrincipalType(this.principalType);
    const principalType = this.principalType;

    try {
      setLocalStorageValue("vsaas$accessToken", this.accessToken, defaultTTL);
      setLocalStorageValue("vsaas$userId", this.userId, defaultTTL);
      setLocalStorageValue("vsaas$principalType", principalType, defaultTTL);

      let getToken: (id: string, include?: any) => Promise<CommonAccessToken>;
      let getPrincipal: (id: string, filter?: any) => Promise<any>;
      let userInclude: Include<any> | undefined = [{ relation: "container" }];

      switch (principalType) {
        case "Admin":
          getToken = Admin_getCurrentToken;
          getPrincipal = Admin_findById;
          break;
        case "Manager":
          getToken = Manager_getCurrentToken;
          getPrincipal = Manager_findById;
          userInclude.push({ relation: "permission" });
          break;
        case "SuperAdmin":
          getToken = SuperAdmin_getCurrentToken;
          getPrincipal = SuperAdmin_findById;
          userInclude = undefined;
          break;
        case "SupportAdmin":
          getToken = SupportAdmin_getCurrentToken;
          getPrincipal = SupportAdmin_findById;
          break;
        default:
          throw new Error("Invalid user type");
      }

      const [token, user] = await Promise.all([
        getToken(this.userId),
        getPrincipal(this.userId, { include: userInclude }),
      ]);

      const ttl = this.getTokenTTL(token);
      setLocalStorageValue("vsaas$accessToken", this.accessToken, ttl);
      setLocalStorageValue("vsaas$userId", this.userId, ttl);
      setLocalStorageValue("vsaas$principalType", principalType, ttl);

      const authenticatedUser = setUserType(user as User, principalType);
      this.cachedUser = authenticatedUser;
      return authenticatedUser;
    } catch (error) {
      // A restore failure is not necessarily an expired session. The host
      // application owns token validation and decides whether to log out.
      throw error;
    }
  }
}
