# CacheManager

Coordinates memory, disk, and network to provide a 3-level cache using RxJava.

## Public API

- `static CacheManager getInstance()`
- `<T extends TextBean> Observable<T> load(String key, Class<T> cls, NetworkCache<T> networkCache)`

## Behavior

Concats: memory -> disk -> network. Emits first non-null, non-expired item.

## Example

```java
Observable<JokeBean> obs = CacheManager.getInstance()
  .load(urlKey, JokeBean.class, new NetworkCache<JokeBean>() {
    public Observable<JokeBean> get(String key, Class<JokeBean> cls) {
      Retrofit retrofit = HttpHelper.getInstance().getRetrofit(BASE_URL);
      return retrofit.create(ApiManager.class).getJoke(page, size)
        .subscribeOn(Schedulers.io())
        .observeOn(AndroidSchedulers.mainThread());
    }
  });
```