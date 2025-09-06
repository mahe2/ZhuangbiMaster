# MemoryCache

In-memory LRU cache storing JSON via `TextBean.toString()`.

## Public API

Implements `ICache`.

## Notes
- Size = 1/8 of max heap.
- Value size measured in UTF-8 bytes.