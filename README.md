# 看漫画微信小程序

***

## 项目说明 💻

- 项目名称：ComicWork
- 项目简介：本项目主要基于微信小程序云开发，实现漫画的在线预览和收藏
- 技 术 栈  ：微信小程序开发、ESlint
- UI    框架：Vant
- 技术描述：
  1. 通过抓取看漫画平台及其相关APP，获取后台的数据API接口提供数据源
  2. 运用ES6新语法 Promise 对象 进行二次封装HTTP 请求，解决回调地狱问题
  3. 采用 函数防抖、节流等相关技术优化项目
  4. 封装  `lazy-image` 图片懒加载组件，解决原生 `image` 组件的 `lazy-load`无效问题
  5. 采用云开发实现用户的登录与漫画收藏功能（待完善）



## 项目结构 🌲

```css
├── ManHua
│   ├── components				// 自定义组件
│   ├── custom-tab-bar  	// 自定义底部导航
│   ├── data
│   ├── filter						// 数据过滤器
│   ├── miniprogram_npm
│   ├── node_modules
│   ├── pages
│   ├── services
│   ├── static
│   └── utils
│   ├── app.js
│   ├── app.json          // 全局配置
│   ├── app.wxss          // 全局样式
│   ├── package-lock.json
│   ├── package.json
│   ├── project.config.json
│   ├── project.private.config.json
│   ├── sitemap.json
│   ├── README.md					// 项目文档

```



## 小程序功能 ✨

- [x] 漫画推荐
- [x] 漫画详情 ( 待完善 )
- [x] 漫画阅读 ( 所有漫画都可免费阅读 )
- [x] 漫画更新
- [ ] 漫画收藏
- [ ] 用户登录
- [ ] 收藏书架和阅读历史
- [ ] 看漫圈页



## 部分效果图 🔥

![漫画首页](https://gitee.com/shaodong-wu/blog-image/raw/master/2022-03-06/image-20220306021201143.webp)

<p style="font-size: 13px; text-align: center;">漫画首页 (一)</p>



![漫画更新页](https://gitee.com/shaodong-wu/blog-image/raw/master/2022-03-06/image-20220306021041243.webp)

<p style="font-size: 13px; text-align: center;">漫画更新页 (二)</p>



![漫画详情页](https://gitee.com/shaodong-wu/blog-image/raw/master/2022-03-06/image-20220306021325325.webp)

<p style="font-size: 13px; text-align: center;">漫画详情页 (三)</p>



![漫画阅读页](https://gitee.com/shaodong-wu/blog-image/raw/master/2022-03-06/image-20220306021458874.webp)

<p style="font-size: 13px; text-align: center;">漫画阅读页 (四)</p>



![漫画阅读页](https://gitee.com/shaodong-wu/blog-image/raw/master/2022-03-06/image-20220306021654482.webp)

<p style="font-size: 13px; text-align: center;">漫画阅读页 (五)</p>




## 免责声明 👊

本项目的所有图片资源、UI设计以及软件仅用于个人学习开发测试，所有 `看漫画` `看漫`  相关字样版权属于看漫画动漫有限公司，勿用于商业及非法用途，如产生法律纠纷与本人无关。

**如此项目造成侵权损失，请联系本人删除：2361954836@qq.com**