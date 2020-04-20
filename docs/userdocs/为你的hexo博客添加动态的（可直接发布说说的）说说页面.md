---
title: 为你的hexo博客添加动态的（可直接发布说说的）说说页面
author: Uncle_drew
categories:
 - ALL
 - 博客小技巧
sidebar: 'auto'
date: 2020-4-20
---
前言：我美化的没那么好看，如果不喜欢的话，你可以在css中根据自己的需要调整。本页面用到的所有css均在一个文件。持续更新到我不知道更新什么为止。2.0版本已解决验证问题。
<!--more-->

## 一开始我想说的话
之前弄了一个简单的说说页面，没想到效果挺好。挺多小伙伴都表示了很有用，最近突然意识到既然评论数据可以存储在`leancloud`然后展示出来，那说说肯定也可以啊！说干就干。
之前那篇文章的链接: [为你的hexo博客添加说说页面](https://cndrew.cn/2019/09/11/shuoshuo/)
目前最新版本：`V2.0`

### 特性:
* 在`Hexo`中显示一个说说页面，并且支持站长实时发布，可移步`leancloud`后台进行修改。

* 可直接使用`html`语法插入歌曲或者图片视频等。理论上支持除了`<li>`和`<ui>`的其他任何html语法。
* 通过leancloud的用户直接调用保证仅站长可以发布说说，且被破解的概率理论上为0.

本篇文章中涉及到的js和css都已上传到GitHub: [Hexo-shuoshuo](https://github.com/Drew233/hexo-shuoshuo)

Demo: [Hexo-说说](https://cndrew.cn/shuoshuo/)

## 具体食用方法
### 关于Leancloud
这里我们要求使用[leancloud国际版](https://console.leancloud.app/login.html#/signup)注册，因为国际版不需要绑定备案的域名
注册结束后首先找到账号设置，绑定邮箱和手机号。这一步是必须的，否则无法创建应用。邮箱和手机号都有临时的，所以也不难。
![](https://cdn.jsdelivr.net/gh/drew233/cdn/lc1.webp)
绑定成功之后，点击创建应用，并将应用名字设置为`shuoshuo`
![](https://cdn.jsdelivr.net/gh/drew233/cdn/lc2.webp)
![](https://cdn.jsdelivr.net/gh/drew233/cdn/lcc2.webp)
创建之后点击应用跳转到控制台
![](https://cdn.jsdelivr.net/gh/drew233/cdn/lc3.webp)


在设置中找到应用keys中的appId和appKey记下来，或者页面一直开着。
![](https://cdn.jsdelivr.net/gh/drew233/cdn/lc4.webp)

在`leancloud`的存储中添加`class`，命名为`shuoshuo`。
![](https://cdn.jsdelivr.net/gh/drew233/cdn/lc5.webp)

然后在你新建的应用中找到`结构化数据`下的`用户`。
![](https://cdn.jsdelivr.net/gh/drew233/cdn/20200417234538.webp)

然后点击`添加用户`，输入你想使用的`用户名`以及`密码`。
![](https://cdn.jsdelivr.net/gh/drew233/cdn/20200417234719.webp)

接着回到`结构化数据->shuoshuo->权限`，在`Class访问权限`中将`add_fields`以及`create`权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将`delete`和`update`也设置为跟它们一样的权限。
![](https://cdn.jsdelivr.net/gh/drew233/cdn/20200417235209.webp)

![](https://cdn.jsdelivr.net/gh/drew233/cdn/20200417235312.webp)
最后将`_User`中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据。

到这里`leancloud`的设置就告一段落了。

## 关于js和css
去`GitHub`下载：[Hexo-shuoshuo](https://github.com/Drew233/hexo-shuoshuo)
引用`jquery`和`av-min`
```js
<script src="https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/drew233/cdn/js/jquery-3.3.1.min.js"></script>
<!-- 如果之前引用过就不需要重复引用了 -->
```

将`js和css`分别放入主题中对应的文件夹，然后在主题对应的模板文件中调用`css`，`js`一会用

然后在根目录的`source`文件夹下新建一个`shuoshuo`文件夹，并在文件夹中新建`index.md`
![](https://cdn.jsdelivr.net/gh/drew233/cdn/index.webp)

在`index.md`中除了`font-matter`之外写上以下内容
```js
<script>
var img="";
var appID="";
var appKEY="";
var per="";
var username="";
</script>
<script type="text/javascript" src="/js/shuoshuov2.0.js"></script>
<body>
  <div id="primary" class="content-area" style="">
    <main id="main" class="site-main" role="main">
        <div id="shuoshuo_content">
            <div id="ccontent">
        </div>
<div id="sa"></div>
<div id="saa"></div>
<textarea id="neirong" placeholder="本页面仅支持站长发表说说，由于特殊原因关闭本页面评论功能" style="width:100%;height:150px;background-image: url(https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp);background-size: contain;background-repeat: no-repeat;background-position: right;"></textarea>
<button onclick="savecontent()" style="float :right;">biu~</button>
<button onclick="preview()" style="float :right;">预览</button>
<input type="password" id="key" value="" class="mytxt" placeholder="是时候验证你的身份了！" autocomplete="off"/>
 
<div id="preview"></div>
</div>
</body>
```
* 变量含义及作用
* img: 头像url链接
* appID: leancloud的应用appId
* appKEY: leancloud的应用appKey
* per: 每一部分想展示的说说数以及每次点击查看更多的时候显示的说说数
* username: 你在leancloud中添加的作为可发布说说的用户的用户名
* 每个参数均必须填写(若未自己修改js)
  
至此就添加完毕了。访问`yoursite.com/shuoshuo`就能看到你的动态说说界面了。
每次发说说填上你在leancloud中设置的密码，再也不会有人可能冒充你发说说了呢。
效果图
![](https://cdn.jsdelivr.net/gh/drew233/cdn/lc6.webp)

## 与valine的一些冲突
说说页面无法开启`valine`评论
如果你的博客添加了`valine`并且正在使用，那么将`av-min.js`放在`head`中引用即可。
如果不可以，请联系我或者在`GitHub`提交`issues`

## 结语
本教程使用`hexo`默认主题做的示范，理论上任何主题均支持。
我只是一个小白，大家轻喷。


::: tip
原文链接: <https://cndrew.cn/2020/04/10/hexo-shuoshuo/#%E7%BB%93%E8%AF%AD>
:::