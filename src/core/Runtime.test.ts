import { afterEach, describe, expect, it } from "vitest";
import {
  configureWebSdkRuntime,
  createMemoryStorage,
  getStorageAdapter,
  resetWebSdkRuntime,
} from "./Runtime";

describe("Runtime", () => {
  afterEach(() => {
    resetWebSdkRuntime();
  });

  it("stores and reads values from memory storage", () => {
    const storage = createMemoryStorage();

    storage.setItem("token", "abc");
    expect(storage.getItem("token")).toBe("abc");

    storage.removeItem("token");
    expect(storage.getItem("token")).toBeNull();
  });

  it("uses injected storage via configureWebSdkRuntime", () => {
    const storage = createMemoryStorage();
    configureWebSdkRuntime({ storage });

    getStorageAdapter().setItem("user", "alice");
    expect(storage.getItem("user")).toBe("alice");
  });

  it("resets runtime to defaults", () => {
    const storage = createMemoryStorage();
    configureWebSdkRuntime({ storage });
    storage.setItem("keep", "1");

    resetWebSdkRuntime();

    expect(getStorageAdapter()).not.toBe(storage);
    expect(getStorageAdapter().getItem("keep")).toBeNull();
  });
});
