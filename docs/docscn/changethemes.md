---
title: 更换主题
---
我们初次初始化博客时，hexo默认为你准备的是`landscape`主题，你可能会不太满意想要更换，下面请看换一个主题的详细流程

## 找主题
在[hexo](https://hexo.io/themes/)官网里面有300多个主题，你可以从中寻找

同时你也可以在本中文站的<a href="/themes" target="_blank">主题</a>
本站的主题展示使用了图片加速，让你更快预览图片，且可以点击图片放大查看，全中文化浏览

## 下载主题
你有两种方式下载主题,更加推荐使用命令行

**方法1: 下载压缩包**
打开某个主题的项目地址
![](https://cdn.jsdelivr.net/gh/kjhuanhao/thecdn/hexocn/20200410203846.png)

然后点击绿色的`clone or download`
点击`Download ZIP`即可下载主题的压缩包
![](https://cdn.jsdelivr.net/gh/kjhuanhao/thecdn/hexocn/20200410203949.png)

下载完成后，记得`解压`，然后把文件夹移动到博客目录的`themes`下

**方法2: 命令行**
如果你熟悉`git`命令，我们可以直接使用`git clone`

打开某个主题的项目地址
![](https://cdn.jsdelivr.net/gh/kjhuanhao/thecdn/hexocn/20200410203846.png)

复制`HTTPS地址`
![](https://cdn.jsdelivr.net/gh/kjhuanhao/thecdn/hexocn/20200410204318.png)

直接到命令行
```bash
cd 你的博客目录
git clone 主题HTTPS地址 themes/主题名
```
这样之后主题会下载到themes目录下，且以你设定的`主题名`命名文件夹

## 更换主题
打开站点配置文件`_config.yml`

找到`themes`这一行

之后修改为`themes`文件下，对应的主题文件名

## 预览
:::tip
在预览之前，你需要先查看主题的文档，是否有多余的依赖需要安装
:::

如果你预览失败，请尝试以下几个建议：
* `themes`的配置，是否为`themes`目录下对应的主题文件名
* 按照作者的主题文档的要求安装一遍
* 是否缺少依赖
* 百度

```bash
hexo s
```

## 注意事项
默认情况下，更换主题是以上的步骤，但是不同的主题，作者为你预设的安装方法可能不同，所以在更换主题之前，请务必查看主题的文档

