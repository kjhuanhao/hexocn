---
title: Mac
---

## 安装nodejs

> 下载地址： <http://nodejs.cn/download/>

选择mac安装包.pkg安装

![screenshot2020-04-06_11-27-32](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/2020/04/06/77c8031bffa82c256f9a74022cdfc440.png)

一直继续即可

![screenshot2020-04-06_11-29-18](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/2020/04/06/61a7b22980e358359060339e6fa5cad9.png)

## 安装Git

> 下载地址：<https://git-scm.com/>

点这里即可下载最新版本

![screenshot2020-04-06_11-32-21](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/2020/04/06/fab62fee1f04873514dcf227ae14d2fe.png)



## 验证nodejs是否安装配置成功

打开你的终端分别执行下面的命令

```bash
$ node -v
$ npm -v
```

如果输出了版本号，那么证明配置成功，如果没有版本号，请重新安装nodejs，或者手动为nodejs添加环境变量

![screenshot2020-04-06_11-35-48](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/2020/04/06/c6bb2dba4793d96ee390e7187b77a520.png)



## 安装cnpm

在终端里面执行下面的命令

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

到这你的准备已经做完