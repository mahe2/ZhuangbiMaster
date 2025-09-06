# HttpHelper

Singleton to build Retrofit instances with shared OkHttp client, Gson converter, and RxJava adapter.

## Public API

- `static HttpHelper getInstance()`
- `Retrofit getRetrofit(String baseUrl)`

## Usage

```java
Retrofit retrofit = HttpHelper.getInstance().getRetrofit("http://api.example.com/");
ApiManager api = retrofit.create(ApiManager.class);
```

## Notes
- Timeouts: 30s connect/write/read.
- Reuses a single OkHttpClient and factories.