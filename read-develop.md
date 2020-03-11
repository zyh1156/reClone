  
# 开发心得 

## 插件相关

> 使用 `@Vue/cli` 作为基础开发框架  
>> 使用 `Vue-router` 作为路由管理  
>> 使用 `Vuex` 管理全局数据  

> 使用 `bootstrap-reboot.css` 进行样式重置  
>> 没有清空浏览器默认样式会让你走很多弯路  
>> `input` 和  `button` 按钮 **一定要** 加上 `type` 属性  

> 使用 `sass` 方便Css代码书写与管理  
>> ~~也可以理解为偷懒~~  

> 使用 `axios` 管理Ajax请求  
>> 在 [main.js][mainJs] 中将其融合到了Vue里，这样就可以全局调用了

> ![artifact][artifactIco] logo偷偷用了 [Artifact][artifactWeb] 官网的ico（未授权）  
>> ~~这是个好游戏，~~ 只可惜生不逢时

## 备注

- 在[vue.congfig.js][config] 中配置设计稿宽度。  
+ 为了适应各种复杂的情况 `pubilc/index.html` 的 `viewport` 标签已经拉满了，它们分别是：
+ `width=device-width` 页面宽度等于屏幕宽度
+ `initial-scale=1` 最小缩小1倍
+ `maximum-scale=1` 最大放大1倍
+ `user-scalable=no` 基础缩放禁用方案    
+ `shrink-to-fit=no` 禁用 IOS9 缩放适配方案
+ `viewport-fit=cover` IOS11 刘海屏适配方案
+ ~~为了不让用户缩放真是操碎了心~~  
* `bootstrap-reboot.css` 中将 `line-height` 设为 `1.5` ；  
* 在多行文本浏览时，可以提供较好的用户体验；缺点是块级文本的高度如果不是常量，那么会有所变化，像素强迫症可以视情况将值设为 `1` 。

***

## 请记住

1. 绝不意气用事！  
2. 绝不漏判任何一件坏事！  
3. 绝对裁判的公正漂亮！  

[artifactWeb]: https://playartifact.com/ "playartifact"  
[artifactIco]: https://steamcdn-a.akamaihd.net/apps/artifact/images/favicon.png "favicon"  
[config]: ./vue.config.js "vue.config"  
[mainJs]: ./src/main.js "main.js" 