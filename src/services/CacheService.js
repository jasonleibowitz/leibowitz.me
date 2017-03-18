// alias
import { cacheKey } from 'config';

class CacheService {

  constructor({ key = 'cache_' }) {
    Object.assign(this, { key });
  }

  // Get an item from the cache
  get(key, defaultVal) {
    try {
      const prefixedKey = `${ this.key }${ key }`;
      const str = localStorage.getItem(prefixedKey);
      return JSON.parse(str) || defaultVal;
    } catch (err) {
      return defaultVal;
    }
  }

  // Set an item in the cache
  set(key, value) {
    const prefixedKey = `${ this.key }${ key }`;
    const str = JSON.stringify(value);
    localStorage.setItem(prefixedKey, str);
    // Return context for chaining
    return this;
  }

  // Remove a single item from the cache
  remove(key) {
    const prefixedKey = `${ this.key }${ key }`;
    localStorage.removeItem(prefixedKey);
    // Return context for chaining
    return this;
  }

  // Remove all items from the cache
  clear() {
    localStorage.clear();
    // Return context for chaining
    return this;
  }
}

export default new CacheService({
  key: cacheKey,
});
