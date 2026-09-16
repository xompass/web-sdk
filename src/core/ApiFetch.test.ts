import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  ApiFetch,
  FetchError,
  getHTTPErrorMessage,
  unwrapCount,
} from "./ApiFetch";
import { setLocalStorageValue } from "./LocalStorage";
import {
  configureWebSdkRuntime,
  createMemoryStorage,
  resetWebSdkRuntime,
  type FetchOptions,
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

describe("unwrapCount", () => {
  it("returns the count property from a LoopBack envelope", () => {
    expect(unwrapCount({ count: 4 })).toBe(4);
  });

  it("passes through a bare number", () => {
    expect(unwrapCount(4)).toBe(4);
  });
});

function hangingFetch(init?: FetchOptions) {
  return new Promise<never>((_resolve, reject) => {
    init?.signal?.addEventListener("abort", () => {
      const error = new Error("The operation was aborted");
      error.name = "AbortError";
      reject(error);
    });
  });
}

describe("ApiFetch request options", () => {
  beforeEach(() => {
    configureWebSdkRuntime({
      storage: createMemoryStorage(),
    });
    setLocalStorageValue("vsaas$baseUrl", "https://api.example.test");
  });

  afterEach(() => {
    resetWebSdkRuntime();
  });

  it("forwards a caller AbortSignal to fetch", async () => {
    const controller = new AbortController();
    let received: AbortSignal | undefined;
    configureWebSdkRuntime({
      fetch: async (_url, init) => {
        received = init?.signal;
        return {
          status: 200,
          statusText: "OK",
          text: async () => "{}",
        };
      },
    });

    await ApiFetch({
      method: "GET",
      url: "/ping",
      signal: controller.signal,
    });

    expect(received).toBe(controller.signal);
  });

  it("rejects with Aborted when the caller signal aborts", async () => {
    configureWebSdkRuntime({
      fetch: async (_url, init) => hangingFetch(init),
    });
    const controller = new AbortController();
    const request = ApiFetch({
      method: "GET",
      url: "/ping",
      signal: controller.signal,
    });

    await Promise.resolve();
    controller.abort();

    await expect(request).rejects.toMatchObject({
      code: "Aborted",
      status: 0,
    });
  });

  it("rejects with Timeout when the request exceeds timeout", async () => {
    configureWebSdkRuntime({
      fetch: async (_url, init) => hangingFetch(init),
    });

    await expect(
      ApiFetch({ method: "GET", url: "/ping", timeout: 20 }),
    ).rejects.toMatchObject({
      code: "Timeout",
      status: 0,
      message: "The request timed out",
    });
  });

  it("still completes when timeout is longer than the response", async () => {
    configureWebSdkRuntime({
      fetch: async () => ({
        status: 200,
        statusText: "OK",
        text: async () => JSON.stringify({ ok: true }),
      }),
    });

    await expect(
      ApiFetch({ method: "GET", url: "/ping", timeout: 1_000 }),
    ).resolves.toEqual({ ok: true });
  });
});
