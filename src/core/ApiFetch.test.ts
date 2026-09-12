import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ApiFetch, FetchError, getHTTPErrorMessage } from "./ApiFetch";
import { setLocalStorageValue } from "./LocalStorage";
import {
  configureWebSdkRuntime,
  createMemoryStorage,
  resetWebSdkRuntime,
} from "./Runtime";

describe("ApiFetch errors", () => {
  beforeEach(() => {
    configureWebSdkRuntime({
      storage: createMemoryStorage(),
      fetch: async () => ({
        status: 401,
        statusText: "Unauthorized",
        text: async () =>
          JSON.stringify({
            error: {
              code: "LOGIN_FAILED",
              message: "Invalid credentials",
            },
          }),
      }),
    });
    setLocalStorageValue("vsaas$baseUrl", "https://api.example.test");
  });

  afterEach(() => {
    resetWebSdkRuntime();
  });

  it("extracts the code and message from a LoopBack response", async () => {
    const request = ApiFetch({ method: "POST", url: "/Managers/login" });

    await expect(request).rejects.toMatchObject({
      code: "LOGIN_FAILED",
      message: "Invalid credentials",
      status: 401,
    });
  });

  it("uses the message from a LoopBack error envelope", () => {
    const error = new FetchError(401, "LOGIN_FAILED", "Invalid credentials", {
      error: {
        code: "LOGIN_FAILED",
        message: "Invalid credentials",
      },
    });

    expect(getHTTPErrorMessage(error)).toBe("Invalid credentials");
  });

  it("supports a direct API error payload", () => {
    const error = new FetchError(401, "LOGIN_FAILED", "Invalid credentials", {
      code: "LOGIN_FAILED",
      message: "Invalid credentials",
    });

    expect(getHTTPErrorMessage(error)).toBe("Invalid credentials");
  });
});
