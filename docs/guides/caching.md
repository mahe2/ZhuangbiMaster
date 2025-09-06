# Caching Guide

Describes 3-level caching with `MemoryCache`, `DiskCache`, and `NetworkCache` used by `CacheManager`.

## Flow
1. Try memory (LRU) -> emits if present and not expired
2. Try disk (JSON) -> fills memory if hit
3. Fallback to network -> saves to disk and memory

## Expiry
Items extend `TextBean` and expire after 1 hour by default.