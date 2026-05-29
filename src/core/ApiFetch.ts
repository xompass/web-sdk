// Types for the filter object used in the API
// Details in https://loopback.io/doc/en/lb3/Querying-data.html
import { getLocalStorageValue } from './LocalStorage';
import {
  getFetchAdapter,
  getFormDataConstructor,
  getXMLHttpRequestConstructor,
} from './Runtime';

// List of operators
const Operators = {
  eq: 'eq',
  neq: 'neq',
  gt: 'gt',
  gte: 'gte',
  lt: 'lt',
  lte: 'lte',
  inq: 'inq',
  nin: 'nin',
  and: 'and',
  or: 'or',
  like: 'like',
  nlike: 'nlike',
} as const;

// List of operators as a type
export type Operator = keyof typeof Operators;

export type Order<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]?: T[P] extends Function ? never : string;
};

// Allows to specify the fields to be returned
export type SimpleFields<T> = (keyof T)[];

// Allows to specify if a field must be returned or excluded
export type Fields<T> =
  | {
      // eslint-disable-next-line @typescript-eslint/ban-types
      [P in keyof T]?: T[P] extends Function ? never : boolean;
    }
  | SimpleFields<T>;

export type IncludeWithScope<T> = {
  relation: keyof T;
  scope?: Filter<any>;
};

// Allows to include relations without specifying a scope
export type SimpleInclude<T> = (keyof T)[];

export type Include<T> =
  | IncludeWithScope<T>
  | IncludeWithScope<T>[]
  | SimpleInclude<T>;

export type FieldOperator<T> = {
  [O in Operator]?: O extends 'and' | 'or' | 'inq' | 'nin'
    ? Partial<T>[]
    : Partial<T>;
};

// Allows to specify a where clause
// more info: https://loopback.io/doc/en/lb3/Where-filter.html
export type Where<T> = {
  and?: Where<T>[];
  or?: Where<T>[];
} & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]?: T[P] extends Function ? never : T[P] | FieldOperator<T[P]>;
};

export type Filter<T> = {
  fields?: Fields<T>;
  limit?: number;
  skip?: number;
  order?: Order<T>;
  include?: Include<T>;
  where?: Where<T>;
};

export type FilterExcludingWhere<T> = Omit<Filter<T>, 'where'>;

export type ApiFetchMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD';

export type ApiFetchRouteParams = {
  [key: string]: string | number | undefined;
};

export type ApiFetchUrlParams = {
  [key: string]:
    | undefined
    | null
    | string
    | number
    | boolean
    | { [key: string]: any };
};

export type ApiFetchOptions = {
  method: ApiFetchMethod;
  url: string;
  routeParams?: ApiFetchRouteParams;
  urlParams?: ApiFetchUrlParams;
  body?: any;
};

export type UploadableFile =
  | ArrayBuffer
  | ArrayBufferView
  | {
      name?: string;
      type?: string;
      size?: number;
      arrayBuffer?: () => Promise<ArrayBuffer>;
      stream?: () => unknown;
      text?: () => Promise<string>;
      [key: string]: any;
    };

const DateFields = [
  'created',
  'modified',
  'deleted',
  'from',
  'to',
  'requested',
  'expiresAt',
  'started',
  'birthday',
  'storypointDate',
  'nextCheck',
  'lastCheck',
  'lastValue',
  'valueValidUntil',
  'date',
];

const Reviver = (key: string, value: any) => {
  if (
    (typeof value === 'string' || typeof value === 'number') &&
    DateFields.includes(key)
  ) {
    let date;

    if (
      key === 'expiresAt' &&
      typeof value === 'number' &&
      value < 1000000000000
    ) {
      date = new Date(value * 1000);
    } else {
      date = new Date(value);
    }

    if (date.toString() !== 'Invalid Date') {
      return date;
    }
  }

  return value;
};

function prepareUrl(
  url: string,
  routeParams?: ApiFetchRouteParams,
  urlParams: ApiFetchUrlParams = {},
) {
  if (routeParams) {
    for (const key in routeParams) {
      url = url.replace(
        new RegExp(`:${key}(/|$)`, 'g'),
        `${routeParams[key]}$1`,
      );
    }
  }

  let queryString = '';
  if (urlParams) {
    queryString += Object.keys(urlParams)
      .reduce((array: string[], key) => {
        let value = urlParams[key];
        if (value == null) {
          return array;
        }

        if (key === 'filter' && typeof value === 'object') {
          if (value.order) {
            value.order = prepareOrderFilter(value.order);
          }

          if (value.include) {
            value.include = prepareIncludeFilter(value.include);
          }
        }

        // Handle order
        if (key === 'order' && typeof value === 'object') {
          const _order = prepareOrderFilter(value);
          if (!_order) {
            return array;
          }
          value = _order;
        }

        if (value instanceof Date) {
          value = value.toISOString();
        } else if (typeof value === 'object') {
          value = JSON.stringify(value);
        }

        array.push(`${key}=${value}`);
        return array;
      }, [])
      .join('&');
  }

  return `${url}${queryString ? `?${queryString}` : ''}`;
}

export class FetchError extends Error {
  public status: number;
  public code: string | undefined;
  public details: any;

  constructor(status: number, code: string, message: string, details: any) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

function getMissingRuntimeErrorMessage(runtimeName: string): string {
  return `No ${runtimeName} implementation available. In browsers this is provided globally. In Node.js use Node 18+ or configureWebSdkRuntime(...) before calling the SDK.`;
}

function getFetchImplementation() {
  const fetchImplementation = getFetchAdapter();

  if (!fetchImplementation) {
    throw new FetchError(
      0,
      'MissingRuntime',
      getMissingRuntimeErrorMessage('fetch'),
      undefined,
    );
  }

  return fetchImplementation;
}

function getUploadFormDataConstructor() {
  const FormDataConstructor = getFormDataConstructor();

  if (!FormDataConstructor) {
    throw new FetchError(
      0,
      'MissingRuntime',
      getMissingRuntimeErrorMessage('FormData'),
      undefined,
    );
  }

  return FormDataConstructor;
}

function getBlobConstructor():
  | (new (blobParts?: any[], options?: { type?: string }) => any)
  | undefined {
  if (
    typeof globalThis !== 'object' ||
    globalThis == null ||
    typeof (globalThis as { Blob?: unknown }).Blob !== 'function'
  ) {
    return undefined;
  }

  return (globalThis as { Blob: new (blobParts?: any[], options?: any) => any })
    .Blob;
}

function isArrayBuffer(value: unknown): value is ArrayBuffer {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}

function isArrayBufferView(value: unknown): value is ArrayBufferView {
  return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(value);
}

function normalizeUploadableFile(
  file: UploadableFile,
  index: number,
): { value: any; fileName?: string } {
  if (isArrayBuffer(file) || isArrayBufferView(file)) {
    const BlobConstructor = getBlobConstructor();
    const fileName = `file-${index}`;

    if (BlobConstructor) {
      return {
        value: new BlobConstructor([file], {
          type: 'application/octet-stream',
        }),
        fileName,
      };
    }

    return {
      value: file,
      fileName,
    };
  }

  const fileName =
    typeof file.name === 'string' && file.name.length > 0
      ? file.name
      : undefined;

  return {
    value: file,
    fileName,
  };
}

async function parseJSONResponse(
  status: number,
  statusText: string,
  getText: () => Promise<string>,
) {
  const text = await getText();

  if (!text) {
    return undefined;
  }

  let json: any;
  try {
    json = JSON.parse(text, Reviver);
  } catch (error) {
    throw new FetchError(status, statusText, text, error);
  }

  if (status < 200 || status >= 300) {
    throw new FetchError(status, statusText, json.code, json);
  }

  return json;
}

/**
 * A generic fetch function to call the API
 */
export async function ApiFetch(options: ApiFetchOptions): Promise<any> {
  const { method, routeParams, urlParams, body } = options;
  const baseUrl = getLocalStorageValue('vsaas$baseUrl');

  const url = prepareUrl(baseUrl + options.url, routeParams, urlParams);

  const headers: { [key: string]: string } = {};

  const accessToken = getLocalStorageValue('vsaas$accessToken');
  if (accessToken) {
    headers['Authorization'] = accessToken;
  }

  const fetchOptions: { [key: string]: any } = {
    method,
    headers,
  };

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    fetchOptions.body = JSON.stringify(body);
  }

  try {
    const fetchImplementation = getFetchImplementation();
    const res = await fetchImplementation(url, fetchOptions);

    return parseJSONResponse(res.status, res.statusText, () => res.text());
  } catch (e: any) {
    if (e instanceof FetchError) {
      throw e;
    }

    throw new FetchError(0, 'Unknown', e.message, e);
  }
}

type UploadFileOptions = {
  url: string;
  file: UploadableFile | UploadableFile[];
  routeParams?: ApiFetchRouteParams;
  urlParams?: ApiFetchUrlParams;
  onProgress?: (progress: number) => void;
};

/**
 * Upload a file to the API
 */
export async function UploadFile(options: UploadFileOptions): Promise<any> {
  const { file, routeParams, urlParams, onProgress } = options;
  const baseUrl = getLocalStorageValue('vsaas$baseUrl');
  const accessToken = getLocalStorageValue('vsaas$accessToken');

  const url = prepareUrl(baseUrl + options.url, routeParams, urlParams);

  const FormDataConstructor = getUploadFormDataConstructor();
  const form = new FormDataConstructor();
  const files = Array.isArray(file) ? file : [file];

  files.forEach((currentFile, index) => {
    const normalizedFile = normalizeUploadableFile(currentFile, index);

    if (normalizedFile.fileName) {
      form.append('file', normalizedFile.value, normalizedFile.fileName);
      return;
    }

    form.append('file', normalizedFile.value);
  });

  const XMLHttpRequestConstructor = getXMLHttpRequestConstructor();
  if (XMLHttpRequestConstructor) {
    const xhr = new XMLHttpRequestConstructor();
    xhr.open('POST', url, true);

    if (accessToken) {
      xhr.setRequestHeader('Authorization', accessToken);
    }

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        onProgress((e.loaded / e.total) * 100);
      }
    };

    return new Promise((resolve, reject) => {
      xhr.onload = () => {
        if (xhr.status < 200 || xhr.status >= 300) {
          reject(xhr.statusText);
        } else {
          try {
            resolve(JSON.parse(xhr.responseText, Reviver));
          } catch (e) {
            resolve(xhr.responseText);
          }
        }
      };

      xhr.onerror = () => {
        reject(xhr.statusText);
      };

      xhr.send(form);
    });
  }

  const fetchImplementation = getFetchImplementation();
  const headers: { [key: string]: string } = {};

  if (accessToken) {
    headers['Authorization'] = accessToken;
  }

  const res = await fetchImplementation(url, {
    method: 'POST',
    headers,
    body: form,
  });

  const data = await parseJSONResponse(res.status, res.statusText, () =>
    res.text(),
  );

  if (onProgress) {
    onProgress(100);
  }

  return data;
}

function prepareOrderFilter<T>(order: Order<T>) {
  const result: string[] = [];
  for (const key in order) {
    result.push(`${key} ${order[key]}`);
  }

  if (!result.length) {
    return undefined;
  }

  return result.length === 1 ? result[0] : result;
}

function prepareIncludeFilter<T>(include: Include<T>): Record<string, any> {
  if (!include || typeof include === 'string') {
    return include;
  }

  if (Array.isArray(include)) {
    const _include = [];
    for (const item of include) {
      _include.push(prepareIncludeFilter(item as any));
    }

    return _include;
  }

  if (typeof include === 'object') {
    if (include.scope) {
      if (include.scope.order) {
        include.scope.order = prepareOrderFilter(include.scope.order) as any;
      }
    }
    return include;
  }

  return include;
}

export function getHTTPErrorMessage(error: any): string {
  if (!error) return '';
  if (error.response) {
    return error.response.data + '';
  } else if (error.request) {
    return error.request + '';
  } else {
    return error.message;
  }
}
