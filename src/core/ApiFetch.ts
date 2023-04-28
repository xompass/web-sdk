// Types for the filter object used in the API
// Details in https://loopback.io/doc/en/lb3/Querying-data.html
import { getLocalStorageValue } from './LocalStorage';

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
  [key: string]: string | number;
};

export type ApiFetchUrlParams = {
  [key: string]: null | string | number | boolean | { [key: string]: any };
};

export type ApiFetchOptions = {
  method: ApiFetchMethod;
  url: string;
  routeParams?: ApiFetchRouteParams;
  urlParams?: ApiFetchUrlParams;
  body?: any;
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
];

const Reviver = (key: string, value: any) => {
  if (typeof value === 'string' && DateFields.includes(key)) {
    const date = new Date(value);

    if (date.toString() !== 'Invalid Date') {
      return date;
    }

    return value;
  }

  return value;
};

/**
 * A generic fetch function to call the API
 */
export async function ApiFetch(options: ApiFetchOptions): Promise<any> {
  const { method, routeParams, urlParams, body } = options;
  const baseUrl = getLocalStorageValue('vsaas$baseUrl');

  let url = baseUrl + options.url;
  if (routeParams) {
    for (const key in routeParams) {
      url = url.replace(
        new RegExp(`:${key}(/|$)`, 'g'),
        `${routeParams[key]}$1`
      );
    }
  }

  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  const accessToken = getLocalStorageValue('vsaas$accessToken');
  if (accessToken) {
    headers['Authorization'] = accessToken;
  }
  let queryString = '';
  if (urlParams) {
    queryString += Object.keys(urlParams)
      .reduce((array: string[], key) => {
        let value = urlParams[key];
        if (value == null) {
          return array;
        }

        // Handle filter.order
        if (key === 'filter' && typeof value === 'object' && value.order) {
          value.order = prepareOrderFilter(value.order);
        }

        // Handle order
        if (key === 'order' && typeof value === 'object') {
          const _order = prepareOrderFilter(value);
          if (!_order) {
            return array;
          }
          value = _order;
        }

        const val = typeof value === 'object' ? JSON.stringify(value) : value;
        array.push(`${key}=${val}`);
        return array;
      }, [])
      .join('&');
  }

  url = `${url}${queryString ? `?${queryString}` : ''}`;

  const fetchOptions: { [key: string]: any } = {
    method,
    headers,
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  return fetch(url, fetchOptions)
    .then((res) => {
      if (res.status < 200 || res.status >= 300) {
        throw new Error(res.statusText);
      }

      return res.text();
    })
    .then((text) => {
      if (!text) {
        return undefined;
      }

      try {
        return JSON.parse(text, Reviver);
      } catch (e) {
        return text;
      }
    });
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
