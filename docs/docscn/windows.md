---
title: Windows
---


## 安装nodejs

> 下载地址： <http://nodejs.cn/download/>

选择windows安装包.msi安装

![](https://cdn.jsdelivr.net/gh/huanhaokj/cdn/gtd/Snipaste_2020-02-29_08-54-53.png)



运行安装包，我们默认选择c盘

![](https://cdn.jsdelivr.net/gh/huanhaokj/cdn/gtd/Snipaste_2020-02-29_08-49-21.png)

在这里选择Add to PATH然后点Next继续就行了

![](https://cdn.jsdelivr.net/gh/huanhaokj/cdn/gtd/Snipaste_2020-02-29_08-49-39.png)

***

## 安装Git

>  下载地址：<https://git-scm.com/>

点这里即可下载最新版本，如果你的下载速度比较慢可以选择下面的链接下载

> <https://www.lanzous.com/i9s7tib>

![](https://cdn.jsdelivr.net/gh/huanhaokj/cdn/gtd/Snipaste_2020-02-29_08-57-32.png)

运行安装包，选择合适的安装位置，然后点Next

![](https://cdn.jsdelivr.net/gh/huanhaokj/cdn/gtd/Snipaste_2020-02-29_09-01-49.png)

后面的安装步骤全部只要点Next就行了，不需要我们多余配置

![Snipaste_2020-02-29_09-02-25.png](https://i.loli.net/2020/02/29/jqTCDk6YSbwQOVz.png)

***

### 验证nodejs是否安装配置成功

我们安装完Git后，在桌面右键会有Git Bash Here，我们直接点开

![Snipaste_2020-02-29_09-05-54.png](https://i.loli.net/2020/02/29/s1YhxtEILOlk4Xz.png)

会出来一个终端，我们分别执行下面的命令

```shell
$ node -v
$ npm -v
```

如果输出了版本号，那么证明配置成功，如果没有版本号，请重新安装nodejs（检查是否勾选Add to Path），或者手动为nodejs添加环境变量

![image](https://cdn.jsdelivr.net/gh/huanhaokj/cdn/img/213.ophl1x6e4sp.png)

***

## 安装cnpm

在git bash里面执行下面的命令
:::tip
git bash 是你安装git之后，你在任何一个文件夹下，或者在桌面`右键` ,即可看到git bash
或者在windows的菜单搜索它
:::

![Snipaste_2020-02-29_09-05-54.png](https://i.loli.net/2020/02/29/s1YhxtEILOlk4Xz.png)

```shell
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

**检查cnpm是否安装成功**

执行

```shell
$ cnpm -v 
```

如果输出一堆信息就是安装成功了

到这你的准备已经做完