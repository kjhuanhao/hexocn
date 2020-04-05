---
title: Makrdown教程-Mr.Li
author: Mr.Li
categories:
 - markdown
---
<!-- more -->

## 关于Markdown的使用
## 前言
********
&emsp;&emsp;要学会写博客，首先要明白写博客得利器：**Markdown**，本文将Markdown的基本语法教给大家！<!-- more -->
********
## Markdown定义
 &emsp;&emsp; Markdown 的开发者是John Gruber 初始版本是2004年3曰19日，最新版本1.0.1。格式类型是标记语言，之后延伸有MultiMarkdown,Markdown Extra, CommonMark.  Markdown是一种**轻量级标记语言** ，允许人们使用易读易写的纯文本格式编写文档，然后转换为有效的XHTML。  
  
  &emsp; &emsp;由于Markdown 的轻量化，易读易写的特性，并且对于图片，图标，数学式都有支持，当前许多网站都广泛使用。
 ***********
## Markdown基础语法
*****************
#### 1.标题
****
**Markdown里标题支持6种级别，添加""#_"(空格)后面加上文字**

&emsp;&emsp; 代码展示：
    ```Markdown标题语法
    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题
    ```
![Markdown标题](https://cdn.jsdelivr.net/gh/MaskXman/source@3.1/Markdown1.jpg )
******
#### 2.段落
*****
***Markdown段落表示直接在欲分段处添加空行（回车）即可***
![Markdown段落](https://cdn.jsdelivr.net/gh/MaskXman/source@3.1/Markdown2.jpg )
*****
#### 3.字体，分线
*******
***在Markdown关于字体支持：粗体，粗斜体，斜体， 删除线，分割线，***
```$xsltMarkdown字体语法：
**粗体**
***粗斜体***
*斜体*
~~删除文字~~
*******

```
![Markdown字体](https://cdn.jsdelivr.net/gh/MaskXman/source@3.1/Markdown3.jpg )
*******
#### 4.列表
*********
***Markdown支持列表：有序列表，无序列表， 列表嵌套***

*注意： 1. 无序列表 ：采用“ *_，+_， -_”(符号后面有空格)  2.有序列表直接在数字后面加点加空格  3.列表嵌套在上下两层列表之间
加4个空格即可。*

```$xsltMarkdown列表语法：
* 无序列表1
* 无序列表2
* 无序列表3

+ 无序列表1
+ 无序列表2
+ 无序列表3

- 无序列表1
- 无序列表2
- 无序列表3 

1. 有序列表1
2. 有序列表2
3. 有序列表3

1. 列表嵌套（第一层）1：
    * 第二层1
    * 第二层2
2. 列表嵌套（第一层）2

```
![Markdown列表](https://cdn.jsdelivr.net/gh/MaskXman/source@3.1/Markdown4.jpg )

********
#### 5.区块（引用）
*******
***在段落前使用‘>_（空格）’也支持嵌套***
*注意在引用种段落使用>

```Markdown应用
> 引用
>
>> 引用嵌套
>>> 引用嵌套3
>
>
>>>>引用嵌套
```
![Markdown引用](https://cdn.jsdelivr.net/gh/MaskXman/source@3.1/Markdown5.jpg )
*****************
*********
## Markdown进阶
*******
#### 1.插入代码块
***使用三个点（英文状态下tab键上面的按键）对代码进行上下包裹***
```$xslt
    int a,b=0;
    cin >> a >> endl;
```
******
#### 2.插入图片
***！【图片描述】（图片地址）***
```$xslt
![Markdown图片](https://cdn.jsdelivr.net/gh/MaskXman/source@2.0/touxiang.jpg)
```
#### 3.表格
***支持对齐***
```$xslt
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |


| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```
![Markdown表格](https://cdn.jsdelivr.net/gh/MaskXman/source@3.1/Markdown6.jpg )
******************
#### 4.转义字符
***直接在符号前加反斜杠***
```$xslt
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```
********
*本篇文章参考了维基百科，百度文库，等知名网站，如有侵权请评论联系立删！*



