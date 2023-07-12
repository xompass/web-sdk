/**
 * Set a value in local storage with an optional TTL (time to live) in seconds.
 */
export function setLocalStorageValue(key: string, value: any, ttl?: number) {
  if (value == null) {
    localStorage.removeItem(key);
    return;
  }
  let expiresAt: number | undefined = undefined;
  if (ttl != null && ttl > 0) {
    expiresAt = new Date().getTime() + ttl * 1000;
  }

  const item = JSON.stringify({ val: value, exp: expiresAt });
  localStorage.setItem(key, item);
}

/**
 * Get a value from local storage. If the value has an expiration date and it has passed,
 * the value will be removed from local storage and null will be returned.
 */
export function getLocalStorageValue(key: string) {
  const item = localStorage.getItem(key);
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
          localStorage.removeItem(key);
          return null;
        }
      }

      return val;
    }

    return null;
  } catch (error) {
    return null;
  }
}
