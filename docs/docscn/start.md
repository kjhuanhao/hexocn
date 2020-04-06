---
title: 开始
---
## 安装 Hexo

所有必备的应用程序安装完成后，即可使用 cnpm 安装 Hexo。

``` bash
$ cnpm install -g hexo-cli
```

## 安装和使用


安装 Hexo 完成后，请执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。
* windows用户可以在桌面或者某个文件夹右键,打开git bash，这意味着，你的博客会存储在这个文件夹下
* mac和linux用户直接打开终端

``` bash
$ hexo init 文件夹名字
$ cd 文件夹名字
$ cnpm install
```
:::tip
注意：这个文件夹就是你的博客目录了
:::

新建完成后，指定文件夹的目录如下：

``` plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

## 目录详解

### _config.yml

网站的**配置**信息，您可以在此配置大部分的参数。

### package.json

应用程序的信息，这是你博客的重要文件，请不要误删了

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.8.0",
    "hexo-generator-archive": "^0.1.5",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-index": "^0.2.1",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.3.1",
    "hexo-renderer-stylus": "^0.3.3",
    "hexo-renderer-marked": "^0.3.2",
    "hexo-server": "^0.3.3"
  }
}
```

### scaffolds

**模版**文件夹。当您新建文章时，Hexo 会根据 scaffold 来建立文件。

Hexo的模板是指在新建的文章文件中默认填充的内容。例如，如果您修改scaffold/post.md中的Front-matter内容，那么每次新建一篇文章时都会包含这个修改。

### source

资源文件夹是存放用户资源的地方。除 `_posts` 文件夹之外,
开头命名为 `_` (下划线)的文件 / 文件夹和隐藏的文件将会被忽略。

### themes

**主题**文件夹，Hexo 会根据主题来生成静态页面。