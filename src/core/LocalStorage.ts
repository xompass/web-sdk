import { getStorageAdapter } from './Runtime';

/**
 * Set a value in local storage with an optional TTL (time to live) in seconds.
 */
export function setLocalStorageValue(key: string, value: any, ttl?: number) {
  const storage = getStorageAdapter();

  if (value == null) {
    try {
      storage.removeItem(key);
    } catch {
      return;
    }
    return;
  }

  let expiresAt: number | undefined = undefined;
  if (ttl != null && ttl > 0) {
    expiresAt = new Date().getTime() + ttl * 1000;
  }

  const item = JSON.stringify({ val: value, exp: expiresAt });

  try {
    storage.setItem(key, item);
  } catch {
    return;
  }
}

/**
 * Get a value from local storage. If the value has an expiration date and it has passed,
 * the value will be removed from local storage and null will be returned.
 */
export function getLocalStorageValue(key: string) {
  const storage = getStorageAdapter();
  let item: string | null = null;

  try {
    item = storage.getItem(key);
  } catch {
    return null;
  }

  if (item === null) {
    return null;
  }

  try {
    const parsed = JSON.parse(item);
    if (parsed && typeof parsed === 'object') {
      const { val, exp } = parsed as { val: any; exp?: number };
      if (typeof exp === 'number' && exp > 0) {
        const now = new Date().getTime();

        if (now > exp) {
          try {
            storage.removeItem(key);
          } catch {
            return null;
          }
          return null;
        }
      }

      return val;
    }

    return null;
  } catch {
    return null;
  }
}
