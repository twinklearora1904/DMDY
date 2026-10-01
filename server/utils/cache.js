/**
 * High-Performance Dual-Engine Cache Utility (Redis + In-Memory Fallback)
 * 
 * If REDIS_URL or REDIS_HOST is configured, connects seamlessly to Redis.
 * Otherwise, automatically falls back to an in-memory cache with exact same TTL semantics.
 * Ensures the API remains resilient, blazing-fast, and crash-proof in all environments.
 */

const Redis = require("ioredis");

class CacheService {
    constructor() {
        this.redisClient = null;
        this.memoryStore = new Map();
        this.isRedisReady = false;

        const redisUrl = process.env.REDIS_URL || process.env.REDIS_URI;
        const redisHost = process.env.REDIS_HOST;

        if (redisUrl || redisHost) {
            try {
                this.redisClient = redisUrl
                    ? new Redis(redisUrl, {
                          maxRetriesPerRequest: 2,
                          retryStrategy: (times) => (times > 3 ? null : Math.min(times * 100, 1000)),
                      })
                    : new Redis({
                          host: redisHost,
                          port: process.env.REDIS_PORT || 6379,
                          password: process.env.REDIS_PASSWORD || undefined,
                          maxRetriesPerRequest: 2,
                          retryStrategy: (times) => (times > 3 ? null : Math.min(times * 100, 1000)),
                      });

                this.redisClient.on("connect", () => {
                    this.isRedisReady = true;
                    console.log("[Cache] Connected successfully to Redis server.");
                });

                this.redisClient.on("error", (err) => {
                    this.isRedisReady = false;
                    console.warn("[Cache] Redis connection notice:", err.message, "— Using memory cache fallback.");
                });
            } catch (err) {
                this.isRedisReady = false;
                console.warn("[Cache] Failed to initialize Redis client:", err.message, "— Using memory cache.");
            }
        } else {
            console.log("[Cache] No REDIS_URL provided. Operating on high-performance In-Memory caching engine (1-hour TTL).");
        }
    }

    /**
     * Get item from cache
     * @param {string} key
     * @returns {Promise<any|null>}
     */
    async get(key) {
        try {
            if (this.isRedisReady && this.redisClient) {
                const data = await this.redisClient.get(key);
                return data ? JSON.parse(data) : null;
            }

            // In-Memory cache lookup
            const item = this.memoryStore.get(key);
            if (!item) return null;

            if (Date.now() > item.expiresAt) {
                this.memoryStore.delete(key);
                return null;
            }

            return item.value;
        } catch (error) {
            console.error(`[Cache Error] get(${key}):`, error.message);
            return null;
        }
    }

    /**
     * Set item in cache with TTL
     * @param {string} key
     * @param {any} value
     * @param {number} ttlSeconds - Default 3600 (1 hour)
     */
    async set(key, value, ttlSeconds = 3600) {
        try {
            if (this.isRedisReady && this.redisClient) {
                await this.redisClient.set(key, JSON.stringify(value), "EX", ttlSeconds);
                return;
            }

            // In-Memory storage
            this.memoryStore.set(key, {
                value,
                expiresAt: Date.now() + ttlSeconds * 1000,
            });
        } catch (error) {
            console.error(`[Cache Error] set(${key}):`, error.message);
        }
    }

    /**
     * Delete an individual key
     * @param {string} key
     */
    async del(key) {
        try {
            if (this.isRedisReady && this.redisClient) {
                await this.redisClient.del(key);
            }
            this.memoryStore.delete(key);
        } catch (error) {
            console.error(`[Cache Error] del(${key}):`, error.message);
        }
    }

    /**
     * Delete all keys matching a prefix (e.g. "blogs:*", "blog:*")
     * @param {string} prefix
     */
    async delByPrefix(prefix) {
        try {
            // Delete from Redis
            if (this.isRedisReady && this.redisClient) {
                const keys = await this.redisClient.keys(`${prefix}*`);
                if (keys && keys.length > 0) {
                    await this.redisClient.del(...keys);
                }
            }

            // Delete from In-Memory
            for (const key of this.memoryStore.keys()) {
                if (key.startsWith(prefix)) {
                    this.memoryStore.delete(key);
                }
            }
        } catch (error) {
            console.error(`[Cache Error] delByPrefix(${prefix}):`, error.message);
        }
    }

    /**
     * Clear all cached keys
     */
    async flush() {
        try {
            if (this.isRedisReady && this.redisClient) {
                await this.redisClient.flushdb();
            }
            this.memoryStore.clear();
        } catch (error) {
            console.error("[Cache Error] flush():", error.message);
        }
    }
}

// Export singleton instance
module.exports = new CacheService();
