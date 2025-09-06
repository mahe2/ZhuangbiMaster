# ICache

Cache interface for memory and disk implementations.

## Methods

- `<T extends TextBean> Observable<T> get(String key, Class<T> cls)`
- `<T extends TextBean> void put(String key, T t)`