# 个人介绍页面

一个现代、响应式、支持明暗主题的个人介绍网页。包含关于我、技能、项目和联系方式等板块。

## 预览

直接在浏览器中打开 `index.html` 即可。

## 功能

- 响应式布局，适配移动与桌面端
- 明暗主题切换，自动跟随系统并可持久化偏好
- 语义化 HTML，基本可访问性（焦点样式、ARIA 标签）

## 结构

- `index.html`: 页面结构与内容
- `styles.css`: 全站样式与主题变量
- `script.js`: 主题切换与初始化逻辑

## 自定义

1. 将页面中的姓名、文案、邮箱与社交链接替换为你的信息：
   - 在 `index.html` 中搜索并替换：`张三`、`hello@example.com`、`yourname`
2. 调整配色：
   - 修改 `styles.css` 中 `:root` 与 `html.theme-dark` 的变量
3. 更新项目展示：
   - 编辑 `#projects` 区域的卡片内容或添加新的卡片

## 部署

可将本项目托管在任意静态网站平台（如 GitHub Pages、Vercel、Netlify）。

MVP + Retrofit + RxJava + RxAndroid实战项目
--

#项目介绍
MVP + Retrofit + RxJava + RxAndroid结合的实战项目，实现三级缓存，判断缓存过期等。

下面是截图，打开app之前已经把进程杀掉了，而且手机的流量和wifi都关了（注意屏幕顶部的状态栏，可以看到是没有数据交互的）。

可以看到，离线时候的使用跟正常情况下几无区别。

![image](https://github.com/aishang5wpj/ZhuangbiMaster/raw/master/screenshot.gif)

#依赖库
```
    compile 'com.squareup.retrofit2:retrofit:2.0.2'
    compile 'com.squareup.retrofit2:adapter-rxjava:2.0.2'
    compile 'com.squareup.retrofit2:converter-gson:2.0.2'
    compile 'io.reactivex:rxjava:1.1.5'
    compile 'io.reactivex:rxandroid:1.2.0'
    compile 'com.jakewharton:butterknife:8.0.1'
    apt 'com.jakewharton:butterknife-compiler:8.0.1'
    compile 'com.github.bumptech.glide:glide:3.7.0'
    compile 'com.github.chrisbanes.photoview:library:1.2.4'
    compile 'com.android.support:design:23.4.0'
    compile 'com.android.support:cardview-v7:23.4.0'
```

#项目结构

项目采用MVP的架构，大致如下（第一次画uml图，肯定画的不好，求轻喷）：

![image](https://github.com/aishang5wpj/ZhuangbiMaster/raw/master/images/mvp.png)

三级缓存设计如下：

![image](https://github.com/aishang5wpj/ZhuangbiMaster/raw/master/images/cache_studio.png)

（上面这张图是android studio自动生成的类结构，不知道你们看的习惯不，反正我是不习惯）

![image](https://github.com/aishang5wpj/ZhuangbiMaster/raw/master/images/cache.png)

这是我自己画的图，将就着看吧~

详细实现请看这里：[《泛型模式下的Retrofit + rxJava实现三级缓存》](http://blog.csdn.net/aishang5wpj/article/details/51692824)

#推荐阅读
- [浅析如何高效的使用MVP](http://mp.weixin.qq.com/s?__biz=MzAxMTI4MTkwNQ==&mid=2650820273&idx=1&sn=bb390bd5b1b678435ee4ae5014c651d2&scene=0#wechat_redirect)
- [RxImageloader](https://github.com/Chaoba/RxImageloader)
- [RxJavaSamples](https://github.com/rengwuxian/RxJavaSamples)