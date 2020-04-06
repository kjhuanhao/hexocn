---
title: 写作
---

## 新建文章
你可以执行下列命令来创建一篇新文章或者新的页面。
我建议你在这里使用英文，`hexo new`只是生成你文章的链接，并不是真正的标题
你在之后可以在`fontmatter`修改标题为中文（之后会详细说）

``` bash
$ hexo new "标题"
```

## 文章的存储位置
所有生成的文章都会存储在`博客目录/source/_posts`下

执行生成文章的命令之后，返回的信息也会告诉你，你的文章在哪里

### 演示

例如我们要写一篇名为`我的第一篇博客`的文章

那你需要完成下面的步骤

```bash
$ hexo new "my-first-blog"
```

此时生成的文章被存储在`博客目录/source/_posts`

![screenshot2020-04-06_12-38-18](https://cdn.jsdelivr.net/gh/mrhuanhao/cdn@master/2020/04/06/ed1c751fcf3cf7d27aac9f044e1dbc94.png)

我们发现这是一个`.md`结尾的文件，且种类为`markdown`，你暂时可以当他为一个文本文件，后面的教程会提到markdown的书写规范

用你默认的记事本软件打开后，显示如下

![screenshot2020-04-06_12-41-13](https://cdn.jsdelivr.net/gh/mrhuanhao/cdn@master/2020/04/06/21c7abacc0019f07827e3583f759fbaf.png)

其中使用两个`---`里面的内容是`fontmatter`，你暂时无需理会

这里面是你的文章信息

`title`为标题，此时你可以进行修改为中文

```markdown
---
title: 我的第一篇博客
date: 2020-03-17 12:40:10
tags:
---

在这里进行写作
```

如果你要开始写作，必须在`fontmatter`的下面开始写作

我们可以写上，我的第一篇博客

![screenshot2020-04-06_12-44-08](https://cdn.jsdelivr.net/gh/mrhuanhao/cdn@master/2020/04/06/c87f1eadeff8d1251eae0171ea29ec31.png)

## 如何本地预览你的站点

```bash
cd 博客目录
$ hexo s   #预览命令
```

之后打开<http://localhost:4000>

![screenshot2020-04-06_12-44-47](https://cdn.jsdelivr.net/gh/mrhuanhao/cdn@master/2020/04/06/803fb5a10c66357f0559ea2c7b749560.png)

