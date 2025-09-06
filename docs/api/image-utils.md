# ImageUtils

Strategy-based image loader facade; default Glide implementation.

## Public API

- `static ImageUtils getInstance()`
- `void init(ImageLoaderInterface imageLoaderInterface)`
- `void display(ImageView imageView, String url)`
- `void display(ImageView imageView, String url, int loadingImg, int errorImg)`
- `void displayCircleImg(ImageView imageView, int resId)`
- `void displayCircleImg(ImageView imageView, String url)`

## Example

```java
ImageUtils.getInstance().display(imageView, url);
ImageUtils.getInstance().displayCircleImg(imageView, R.mipmap.avatar);
```