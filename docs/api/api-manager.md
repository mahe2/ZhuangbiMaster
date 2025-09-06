# ApiManager

Retrofit service interface.

## Endpoints

- `Observable<WeatherBean> getWeather(@Query("cityname") String cityname)`
  - GET `weatherservice/cityname`, header `apikey: 40ffbe65699a9fea09022c2cdbcc7f8d`
- `Observable<FuliBean> getFuli(@Path("pageSize") int pageSize, @Path("pageNum") int pageNum)`
  - GET `data/福利/{pageSize}/{pageNum}`
- `Observable<JokeBean> getJoke(@Query("page") int page, @Query("size") int size)`
  - GET `xiaohua/list.do`

## Example

```java
Retrofit retrofit = HttpHelper.getInstance().getRetrofit("http://gank.io/api/");
ApiManager api = retrofit.create(ApiManager.class);
api.getFuli(15, 1)
   .subscribeOn(Schedulers.io())
   .observeOn(AndroidSchedulers.mainThread())
   .subscribe(/* your subscriber */);
```