---
title: hexo博客给Valine添加评论自动微信推送
author: Knight Zero
categories:
 - ALL
 - 博客小技巧
sidebar: 'auto'
date: 2020-4-20
---
引言：Valine评论系统本身并不自带新增评论提醒功能，好在光顾网友站点的时候发现了两个非常宽松推送API：Server酱，Qmsg酱。分别对应微信和QQ，自己琢磨着写了几行JS代码，能利用以上两个API专门针对Valine评论进行推送提醒，下面就让我们进入正题吧。
<!-- more -->

先上几张效果图：
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.c46P0VuT7phPcjQnSYNhZMQxi6sYqktQe83en7FjyYHm9Y.7YZIKj0RgY6DJpTZ2F7Jr6v4hEOXn8WJoXm7Nn8!/r)
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.TaBuMkz7HfY0th6j*bhEWbBo8fqPCEqhDIEtH*FKKbwBH0cH0zXx1q5gU6PjUNYmNCSOs5QHqr6J9EQ*gmL1DA!/r)
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.RFCR1OSrVvVDPGY2oVcloDzLMf2ja6taUeqbK42FOT8IB2ohgwLejxi0*Zt043fqa1gB.fNMcYMxHvA9lGgk*s!/r)

> 下面来说如何实现，实现方案是基于hexo或者静态页面的。
> 
## Sever酱
### 1.打开[Sever](http://sc.ftqq.com/3.version)酱网站链接，点击GitHub一键登入
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.b5pJSBa8KuVMzzA66T7S.ltSe2E3vLaEfztaRcAvv2jxIX*PGmv1gl*AUZt8vEKXcqFEpGR9ydmmXM04Fszbkc!/r)
### 2.到`微信推送`页面，按照提示绑定微信（需要关注Server酱公众号）
### 3.获取`SCKEY`并保存记录下载，等会要用到
### 4.将以下JS代码粘贴到博客网站引用的JS文件中，这里我用的是matery主题，我把它粘贴到`source/js/matery.js`文件底部，另起一行直接粘贴即可
```json
var title1="text=KZblog又有新评论啦~！--by Valine"
var SCKEY_Server=""
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Server(){
    var text="desp=";
    var pagename=document.title;
    var wz=pagename.indexOf('|');
    var res=pagename.substring(0,wz);
    var pageurl=document.URL;
    var ptime=new Date();
    var vnick=document.getElementsByClassName("vnick vinput")[0].value;
    var vmail=document.getElementsByClassName("vmail vinput")[0].value;
    var vlink=document.getElementsByClassName("vlink vinput")[0].value;
    var veditor=document.getElementsByClassName("veditor vinput")[0].value;
    var data=text+"|昵称："+"|邮箱："+"|网站地址："+"|当前页面："+"|评论内容："+"|跳转链接："+"|评论时间"+"\n"+"|----|----|----|----|"+"\n"+"|   "+vnick+"   |   "+vmail+"  |  "+vlink+"|   "+res+"| "+veditor+"| "+pageurl+"|" +ptime.toLocaleString()+"|";
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'https://sc.ftqq.com/'+SCKEY_Server+'.send', true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(title1+"&"+data);//发送请求 将情头体写在send中
};
ValineButton.onclick=send_valine_Server;
```
如果你想适配你的站点，只需要修改SCKEY_Server的值和title1的值即可，将之前获取到的SCKEY的值填入双引号之中，比如`SCKEY_Server="SCUXXXXXXXXXXXXXXXXXXXX706c"`，将title1里text=而不是第4行的var text后面的内容修改成你想要的内容即可（注意：不要将最后的引号删掉了）
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.Z.7vnzprKgsVDprkfxNyEc*p.hHePStY2NR4xurqmB5RxiFuLpJtgCKE8UV3tf.rihCwfD7MTESEtEbHpUEYMk!/r)

`title1`对应下图中红色方框的部分标题，内容我写好了模板，会显示昵称、邮箱、网站地址、当前页面、评论内容、跳转链接、评论时间，以表格的形式显示出来。
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.XgimFlMhY8OFBo6Ypv28tUK3xug1ys3A.vT0vc.OMPtt9tplPFIsmV.1woUo.Y3y7.5JBshs.kK0hPl6fM2BZw!/r)

***
## Qmsg酱
### 1.进入Qmsg酱网站，一键QQ登录
### 2.选择Qmsg酱小姐姐，并添加QQ号
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.eOQNiMxWknOZbzLLIp*0r.OPNojBm37PVPZ12*kQt78RNUTWh90NPJlESLphb1Cf1KuVXv8C69HK4xgcT8oG44!/r)

### 3.将接口地址保存记录下来，等会要用
![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.RnCYNxBZ6lVHX.2*XeguzCMWEa6ung7arDE.BXzM8Zxvn7dWp0DB.cNE4KjL*XMtLvPO7uPtiZbstUDMhg4.f0!/r)
### 4.将以下代码像Server酱的代码一样粘贴到随便一个引用的JS文件中，比如粘贴到`matery.js`底部另起一行直接粘贴
```json
var title2="msg=KZblog又有新评论啦~！--by Valine\n"
var SCKEY_Qmsg=""
function send_valine_Qmsg(){
    var pagename=document.title;
    var wz=pagename.indexOf('|');
    var res=pagename.substring(0,wz);
    var pageurl=document.URL;
    var ptime=new Date();
    var vnick=document.getElementsByClassName("vnick vinput")[0].value;
    var vmail=document.getElementsByClassName("vmail vinput")[0].value;
    var vlink=document.getElementsByClassName("vlink vinput")[0].value;
    var veditor=document.getElementsByClassName("veditor vinput")[0].value;
    var data="昵称："+vnick+"\n邮箱："+vmail+"\n网站地址："+vlink+"\n当前页面："+pagename+"\n评论内容："+veditor+"\n跳转链接："+pageurl+"\n评论时间"+ptime.toLocaleString();
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST',SCKEY_Qmsg, true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(title2+data);//发送请求 将情头体写在send中
};
ValineButton.onclick=send_valine_Qmsg;
```
修改SCKEY_Qmsg值，将先前保存的接口地址填入即可，比如`SCKEY_Qmsg="https://qmsg.zendee.cn:443/send/85XXXXXXXXXXXX2433.html"`，title2中`msg=`后面的内容可以随意修改，保留后面的\n用来换行，不然排版不好看。然后重新生成静态页面就能成功接收推送了

![](http://r.photo.store.qq.com/psc?/V14RBB4W1HO62x/iXs1ae7hmJtTd.wIcSd4.ch9O553v.oiNHgORxzYe.Bht2rdQnZWjne0OdyzqQtrBhmL3y8iAqrGhInEJ0aeC3muZ38F6U3Hmgtz4zrRwiE!/r)

::: tip
原文链接: <https://blog.zyskys.com/posts/bd75.html?tdsourcetag=s_pctim_aiomsg>
:::