---
title: 免费高速图床方案
author: Huanhao
---

搭建一个自己的免费图床工具


# 本文用到的工具或网站

[PicGo](https://github.com/Molunerfinn/PicGo)

[jsdelivr](https://www.jsdelivr.com/)

[github](https://github.com/)

------

## 速度对比

Github的速度：

![img](https://s2.ax1x.com/2019/08/03/eDUP0I.png)

jsdelivrCDN的速度：

![img](https://s2.ax1x.com/2019/08/03/eDUAtf.png)

------

# 下载PicGo

首先进入PicGo的[下载地址](https://github.com/Molunerfinn/PicGo/releases) 选择最新版本下载，根据自己的系统下载对应的安装包，我这里是Windows

![img](https://s2.ax1x.com/2019/08/02/eBQS0g.png)

如果你下载的时候很慢，可以用特殊的方式下载，也可以用我的快速链接

> https://www.lanzous.com/i5avbgd //2.1.2Windows版本

------

# 配置PicGo

## 创建仓库

首先创建一个github仓库，名字可以随便取，然后勾选README初始化仓库

![img](https://i.loli.net/2019/08/03/PAmFEMvwclOSate.png)

## 生成token

【进入github】-【点击头像】-【settings】-【developer settings】-【Personal access tokens】

![img](https://s2.ax1x.com/2019/08/03/eDJIld.png)

![img](https://s2.ax1x.com/2019/08/03/eDJo6A.png)

------

点击【Generate new token】

![img](https://s2.ax1x.com/2019/08/03/eDYS6s.png)

自定义一个名字，然后勾选【repo】最后点绿色按钮创建即可

![img](https://s2.ax1x.com/2019/08/03/eDYAtU.png)

请复制你的token，它只显示一次，请妥善保管

![img](https://s2.ax1x.com/2019/08/03/eDYM0x.png)

------

## 配置github图床

先打开你安装好的picgo然后左栏依次选择【图床设置】-【github图床】

```
如果你打开picgo时没有直接出来界面，它可能藏在你的托盘图标处
```

- 仓库名格式是你的用户名/仓库名
- 分支是master
- token填我们刚刚生成的
- 存储路径可以填也可以不填，如果你填了img/，它就会上传到你仓库的img目录下
- 自定义域名的格式：https://cdn.jsdelivr.net/gh/用户名/仓库名
- 最后记得确定保存

![img](https://s2.ax1x.com/2019/08/03/eDsq74.png)

------

# 上传图片

点击上传区记得图床选【github图床】

![img](https://s2.ax1x.com/2019/08/03/eDtu8g.png)

直接将图片拖入即可上传

可以看到在你的仓库有了第一张图片，我上传了一个为1.png的图片

![img](https://s2.ax1x.com/2019/08/03/eDt1rn.png)

------

# 配合jsdelivr使用

> 链接格式：https://cdn.jsdelivr.net/gh/你的用户名/仓库名/文件路径
>
> 例如：https://cdn.jsdelivr.net/gh/kjhuanhao/testcdn/1.png

我们在上传的时候会自动复制这个格式的链接，大家可以可以直接复制查看

然后你就可以通过这个链接访问你的图片了