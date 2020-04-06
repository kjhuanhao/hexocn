---
title: Linux
---

## 安装nodejs
linux的安装十分简单，你只需要知道你的包管理的安装命令
安装`nodejs`和`npm`，或者是`nodejs`具体是安装哪个包，请参考[nodejs](https://nodejs.org/zh-cn/download/package-manager/)给出的指南

* Arch
```bash
$ pacman -S nodejs npm
```

* ubuntu
```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```

稍等片刻，源已经添加完毕，再执行：

```bash
$ sudo apt-get install -y nodejs
```

* debian
1. 下载nodejs
直接去官网通过<http://nodejs.org/#download>
或者通过命令行
```bash
$ wget https://nodejs.org/dist/v12.16.1/node-v12.16.1.tar.gz
```

2. 安装g++ （如果已经安装，可跳过）
  sudo apt-get install g++
  sudo apt-get install pkg-config  (必须，如果不执行有可能编译不通过)

3. 解压
  tar zxvf node-v12.16.1.tar.gz
  cd node-v12.16.1
  ./configure
  make 
  sudo make install

## 安装Git
一般来说git都是linux自带的，在终端执行`git`如果有相关命令输出为已安装


## 验证nodejs是否安装配置成功

打开你的终端分别执行下面的命令

```bash
$ node -v
$ npm -v
```

如果输出了版本号，那么证明配置成功，如果没有版本号，请重新安装nodejs，或者手动为nodejs添加环境变量

![screenshot2020-04-06_11-35-48](https://cdn.jsdelivr.net/gh/mrhuanhao/cdn@master/2020/04/06/c6bb2dba4793d96ee390e7187b77a520.png)

## 安装cnpm

在终端里面执行下面的命令

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

到这你的准备已经做完