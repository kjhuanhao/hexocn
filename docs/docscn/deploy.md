---
title: 部署
---
完成本篇教程，你将得到一个别人都可以访问的地址

现在我们的博客都是只能本地预览，如何将我们的上传到一个地方，然后通过域名访问呢？

下面介绍两种部署方法

先来个对比

**github：**

* 国外网站，是英文
* 访问速度较慢
* 不需要实名认证
* 域名形式可以自定义

**coding：**

* 国内的平台，网站是中文
* 访问速度快
* 部署网站需要实名认证，只需要填写身份证号即可
* 域名是随机给的，所以很长而且不能自定义

如果你有自己的域名，github和coding都可以绑定域名

## coding

>  https://coding.net/user

注册一个coding的账号，这里不做演示

然后按照图片新建一个项目

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-25-47.8py42ifi1g3.png)

选择devops

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-25-58.sm3tn54wui.png)

填入相关信息，记得勾选**`启用README.cd文件初始化项目`**

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-26-29.u2pyq6c928.png)

然后完成创建

***

> 我们暂时不能直接上传，需要进行一些配置，如下：

接下来需要我们创建一个git秘钥

打开git bash（不要求在哪个目录）

执行： “这里面是你的邮箱”

不管出现什么信息，你只需要回车就可以了

```shell
$ ssh-keygen -t rsa -C “your_email@youremail.com“
```

然后执行

```shell
$ cat ~/.ssh/id_rsa.pub
```

会输出你的秘钥，我们复制输出信息就行了

然后点击头像，打开个人设置--选择SSH公钥--新增公钥

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-33-54.hlvuud9w9ns.png)

然后将你复制的秘钥粘贴进去，记得勾选永久有效

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-34-42.zd3za7e4a6e.png)

***

然后打开git bash

执行：

```shell
$  ssh -T git@git.coding.net
```

会提示你下面这个，输入yes回车就行了

```
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

***

接下来打开你的项目选择SSH，然后复制右边git开头的地址

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-38-33.r8subsc5h7k.png)



打开站点配置文件

修改deploy信息

```shell
deploy:
  type: git
  repo: 你复制的地址
  branch: master
```

例如：

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-44-14.it2uh45m4jq.png)

在博客根目录下打开git bash

分别执行下面的命令：

yourname是你的名字

youremail是你的邮箱

```shell
$ git config --global user.name "yourname"
$ git config --global user.email "youremail"
```

然后安装上传插件

```shell
cnpm install hexo-deployer-git --save
```

***

### 上传

> 以上的配置完成之后，就可以上传了

在博客根目录下打开git bash，执行下面的命令就可以上传了

```shell
hexo g -d
```

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-49-05.lkmgvzcdzwh.png)

然后打开项目，打开构建与部署--静态网站--立即发布静态网站

> 注意：coding需要实名认证，只需要你输入身份证号就可以了，不用担心泄露隐私，因为coding现在是腾讯的

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-50-05.b57ma6w5win.png)

我们只要填写网站名称就行了，然后保存

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-50-36.6fwfau0xu0w.png)

因为是刚构建的网站，所以要手动部署一下，以后上传就不需要手动部署

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-55-02.ki4y7hiyo2b.png)

然后访问所给的地址，那个就是我们网站的地址了

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-56-21.b5y903lp4hk.png)

之后每次修改完博客要上传的时候，只需执行上传命令


## github部署

你还可以使用github部署你的博客

这里不演示如何注册账号

创建一个仓库

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_14-49-41.bjily8bk23.png)

仓库名必须是用户名 + .github.io

然后勾选初始化README

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_14-51-22.58hhw0be4f9.png)

> 我们暂时不能直接上传，需要进行一些配置，如下：

接下来需要我们创建一个git秘钥

打开git bash（不要求在哪个目录）

执行： “这里面是你的邮箱”

不管出现什么信息，你只需要回车就可以了

```shell
$ ssh-keygen -t rsa -C “your_email@youremail.com“
```

然后执行

```shell
$ cat ~/.ssh/id_rsa.pub
```

会输出你的秘钥，我们复制输出信息就行了

然后点击头像，点击Settings--SSH·····--New SSH Key

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_14-53-12.bnffwtcf66a.png)

粘贴你复制的秘钥

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_14-55-05.lakxr64606k.png)

然后打开git bash

执行：

```shell
$  ssh -T git@github.com
```

会提示你下面这个，输入yes回车就行了

```
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

打开项目，点击绿色按钮，点击Use SSH

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_15-01-31.omf9nqgs46i.png)

复制git开头的地址

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_15-01-38.kjtg51f14z.png)

打开站点配置文件

修改deploy信息

```shell
deploy:
  type: git
  repo: 你复制的地址
  branch: master
```

例如：

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_15-01-58.3dtw3iersue.png)

在博客根目录下打开git bash

分别执行下面的命令：

yourname是你的名字

youremail是你的邮箱

```shell
$ git config --global user.name "yourname"
$ git config --global user.email "youremail"
```

然后安装上传插件

```shell
cnpm install hexo-deployer-git --save
```

***

### 上传

> 以上的配置完成之后，就可以上传了

在博客根目录下打开git bash，执行下面的命令就可以上传了

```shell
hexo g -d
```

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_12-49-05.lkmgvzcdzwh.png)

然后打开项目，点击Settings

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_15-07-19.prpi9gjzgvn.png)

往下滑找到Github pages

点击none 选择master branch

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_15-11-58.91hsb6n2sg.png)

之后你会得到一个地址，这个就是你的网站地址了

![image](https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/img/Snipaste_2020-02-29_15-06-38.5i4rmc7ha2g.png)


## 绑定域名
**coding**
coding可通过设置界面绑定域名，然后解析coding给你的域名


**github**
github需要在博客的source目录下新建一个名为`CNAME`的文件（无需后缀），之后在你的域名控制台添加`CNAME`记录，解析访问你网站的域名
