export type StorageAdapter = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

export type FetchOptions = {
  method?: string;
  headers?: { [key: string]: string };
  body?: any;
};

export type FetchResponse = {
  status: number;
  statusText: string;
  text(): Promise<string>;
};

export type FetchAdapter = (
  input: string,
  init?: FetchOptions,
) => Promise<FetchResponse>;

export type FormDataAdapter = {
  append(name: string, value: any, fileName?: string): void;
};

export type FormDataConstructor = new () => FormDataAdapter;

export type XMLHttpRequestProgressEvent = {
  lengthComputable: boolean;
  loaded: number;
  total: number;
};

export type XMLHttpRequestUploadAdapter = {
  onprogress:
    | ((event: XMLHttpRequestProgressEvent) => void)
    | null
    | undefined;
};

export type XMLHttpRequestAdapter = {
  status: number;
  statusText: string;
  responseText: string;
  upload: XMLHttpRequestUploadAdapter;
  onload: (() => void) | null;
  onerror: (() => void) | null;
  open(method: string, url: string, async?: boolean): void;
  setRequestHeader(name: string, value: string): void;
  send(body: any): void;
};

export type XMLHttpRequestConstructor = new () => XMLHttpRequestAdapter;

export type WebSdkRuntimeConfig = {
  storage?: StorageAdapter;
  fetch?: FetchAdapter;
  formData?: FormDataConstructor;
  xmlHttpRequest?: XMLHttpRequestConstructor;
};

const STORAGE_PROBE_KEY = '__xompass_web_sdk_probe__';

function isStorageAdapter(value: unknown): value is StorageAdapter {
  return (
    value != null &&
    typeof value === 'object' &&
    typeof (value as StorageAdapter).getItem === 'function' &&
    typeof (value as StorageAdapter).setItem === 'function' &&
    typeof (value as StorageAdapter).removeItem === 'function'
  );
}

function getBrowserStorage(): StorageAdapter | undefined {
  if (typeof globalThis !== 'object' || globalThis == null) {
    return undefined;
  }

  const storage = (globalThis as { localStorage?: unknown }).localStorage;
  if (!isStorageAdapter(storage)) {
    return undefined;
  }

  try {
    storage.setItem(STORAGE_PROBE_KEY, STORAGE_PROBE_KEY);
    storage.removeItem(STORAGE_PROBE_KEY);
    return storage;
  } catch {
    return undefined;
  }
}

function getGlobalFetch(): FetchAdapter | undefined {
  if (
    typeof globalThis !== 'object' ||
    globalThis == null ||
    typeof (globalThis as { fetch?: unknown }).fetch !== 'function'
  ) {
    return undefined;
  }

  return (input, init) =>
    ((globalThis as { fetch: FetchAdapter }).fetch(input, init) as Promise<
      FetchResponse
    >);
}

function getGlobalFormData(): FormDataConstructor | undefined {
  if (
    typeof globalThis !== 'object' ||
    globalThis == null ||
    typeof (globalThis as { FormData?: unknown }).FormData !== 'function'
  ) {
    return undefined;
  }

  return (globalThis as { FormData: FormDataConstructor }).FormData;
}

function getGlobalXMLHttpRequest(): XMLHttpRequestConstructor | undefined {
  if (
    typeof globalThis !== 'object' ||
    globalThis == null ||
    typeof (globalThis as { XMLHttpRequest?: unknown }).XMLHttpRequest !==
      'function'
  ) {
    return undefined;
  }

  return (globalThis as { XMLHttpRequest: XMLHttpRequestConstructor })
    .XMLHttpRequest;
}

export function createMemoryStorage(): StorageAdapter {
  const values = new Map<string, string>();

  return {
    getItem(key: string): string | null {
      return values.has(key) ? values.get(key)! : null;
    },
    setItem(key: string, value: string): void {
      values.set(key, value);
    },
    removeItem(key: string): void {
      values.delete(key);
    },
  };
}

const memoryStorage = createMemoryStorage();

function getDefaultStorage(): StorageAdapter {
  return getBrowserStorage() ?? memoryStorage;
}

function getDefaultRuntime() {
  return {
    storage: getDefaultStorage(),
    fetch: getGlobalFetch(),
    formData: getGlobalFormData(),
    xmlHttpRequest: getGlobalXMLHttpRequest(),
  };
}

let runtime = getDefaultRuntime();

export function configureWebSdkRuntime(config: WebSdkRuntimeConfig): void {
  if ('storage' in config) {
    runtime.storage = config.storage ?? getDefaultStorage();
  }

  if ('fetch' in config) {
    runtime.fetch = config.fetch ?? getGlobalFetch();
  }

  if ('formData' in config) {
    runtime.formData = config.formData ?? getGlobalFormData();
  }

  if ('xmlHttpRequest' in config) {
    runtime.xmlHttpRequest =
      config.xmlHttpRequest ?? getGlobalXMLHttpRequest();
  }
}

export function resetWebSdkRuntime(): void {
  runtime = getDefaultRuntime();
}

export function getStorageAdapter(): StorageAdapter {
  return runtime.storage;
}

export function setStorageAdapter(storage?: StorageAdapter): void {
  runtime.storage = storage ?? getDefaultStorage();
}

export function getFetchAdapter(): FetchAdapter | undefined {
  return runtime.fetch;
}

export function setFetchAdapter(fetch?: FetchAdapter): void {
  runtime.fetch = fetch ?? getGlobalFetch();
}

export function getFormDataConstructor(): FormDataConstructor | undefined {
  return runtime.formData;
}

export function setFormDataConstructor(formData?: FormDataConstructor): void {
  runtime.formData = formData ?? getGlobalFormData();
}

export function getXMLHttpRequestConstructor():
  | XMLHttpRequestConstructor
  | undefined {
  return runtime.xmlHttpRequest;
}

export function setXMLHttpRequestConstructor(
  xmlHttpRequest?: XMLHttpRequestConstructor,
): void {
  runtime.xmlHttpRequest = xmlHttpRequest ?? getGlobalXMLHttpRequest();
}
