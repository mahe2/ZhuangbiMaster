# DiskCache

Persists `TextBean` JSON to app-private storage; async Rx schedulers.

## Public API

Implements `ICache`.

## Notes
- Path from `FileUtils.getCacheDir()`.
- `get(...)` runs on IO, observes on main.
- `put(...)` writes on IO, then completes on main.