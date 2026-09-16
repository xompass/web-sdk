import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ApiClient } from "./Client";
import { FetchError } from "./core/ApiFetch";
import {
  Admin_findById,
  Admin_getCurrentToken,
  Admin_login,
} from "./endpoints/AdminService";
import {
  configureWebSdkRuntime,
  createMemoryStorage,
  resetWebSdkRuntime,
} from "./core/Runtime";
import { getLocalStorageValue } from "./core/LocalStorage";

vi.mock("./endpoints/AdminService", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("./endpoints/AdminService")>();
  return {
    ...actual,
    Admin_findById: vi.fn(),
    Admin_getCurrentToken: vi.fn(),
    Admin_login: vi.fn(),
  };
});

function twoFactorRequiredError(challengeId = "challenge-id") {
  return new FetchError(
    403,
    "TWO_FACTOR_REQUIRED",
    "Two-factor authentication is required",
    {
      error: {
        statusCode: 403,
        code: "TWO_FACTOR_REQUIRED",
        details: {
          challengeId,
          methods: ["totp"],
          expiresIn: 300,
        },
      },
    },
  );
}

describe("ApiClient 2FA login", () => {
  beforeEach(() => {
    configureWebSdkRuntime({ storage: createMemoryStorage() });
    vi.clearAllMocks();
  });

  afterEach(() => {
    resetWebSdkRuntime();
  });

  it("returns TWO_FACTOR_REQUIRED without persisting a partial token", async () => {
    vi.mocked(Admin_login).mockRejectedValue(twoFactorRequiredError());

    const apiClient = new ApiClient("https://api.example.test");
    const result = await apiClient.loginWithCredentials(
      { username: "operator", password: "secret" },
      "Admin",
    );

    expect(result).toEqual({
      status: "otp-required",
      credentials: { username: "operator", password: "secret" },
      challenge: {
        challengeId: "challenge-id",
        methods: ["totp"],
        expiresIn: 300,
      },
    });
    expect(apiClient.getAccessToken()).toBeUndefined();
    expect(apiClient.getUserId()).toBeUndefined();
  });

  it("completes login through native login with twoFactorCode", async () => {
    const token = {
      id: "token-id",
      userId: "user-id",
      principalType: "Admin",
      created: new Date(),
      ttl: 3600,
      user: {
        name: "Operator",
        email: "operator@example.test",
      },
    };
    vi.mocked(Admin_login)
      .mockRejectedValueOnce(twoFactorRequiredError())
      .mockResolvedValueOnce(token);

    const apiClient = new ApiClient("https://api.example.test");
    const pending = await apiClient.loginWithCredentials(
      { username: "operator@example.test", password: "secret" },
      "Admin",
    );
    expect(pending.status).toBe("otp-required");

    const user = await apiClient.loginWithOtp(
      pending.status === "otp-required"
        ? pending.credentials
        : { username: "operator@example.test", password: "secret" },
      "123456",
      "Admin",
    );

    expect(user).toMatchObject({
      name: "Operator",
      email: "operator@example.test",
      type: "Admin",
    });
    expect(apiClient.getAccessToken()).toBe("token-id");
    expect(vi.mocked(Admin_login)).toHaveBeenLastCalledWith(
      {
        email: "operator@example.test",
        password: "secret",
        twoFactorMethod: "totp",
        twoFactorCode: "123456",
      },
      expect.objectContaining({ relation: "user" }),
    );
  });

  it("does not clear local auth when restoring the principal fails", async () => {
    vi.mocked(Admin_getCurrentToken).mockResolvedValue({
      id: "token-id",
      userId: "user-id",
      created: new Date(),
      ttl: 3600,
    });
    vi.mocked(Admin_findById).mockRejectedValue(new Error("Forbidden"));

    const apiClient = new ApiClient("https://api.example.test");
    apiClient.setAccessToken("token-id");
    apiClient.setUserId("user-id");
    apiClient.setPrincipalType("Admin");

    await expect(apiClient.login()).rejects.toThrow("Forbidden");
    expect(getLocalStorageValue("vsaas$accessToken")).toBe("token-id");
    expect(apiClient.getAccessToken()).toBe("token-id");
  });
});
