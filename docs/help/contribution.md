---
title: 贡献说明
---
## 方式1:通过issues提交
> 适用于直接提交对应文档或建议

::: tip

进入本项目地址的[issues](https://github.com/kjhuanhao/hexocn/issues/new/choose)
选择提交建议或者贡献文档
:::


![](https://cdn.jsdelivr.net/gh/mrhuanhao/hexocn/icon/screenshot2020-04-03_16-54-33.png)


## 方式2:下载本项目并运行修改
> 适用于要进行大量修改的人

在终端执行以下命令
```
# 初始化
npm install -g vuepress
npm install @vuepress-reco/theme-cli -g

//在克隆之前，请fork本项目
# 克隆项目
git clone https://github.com/kjhuanhao/hexocn.git
cd hexocn

# 运行(可本地预览以及查错)
npm run dev
```

### 修改说明
1. 如果你修改了`.vuepress`目录下的文件，请保证在你的本地可以正常运行  
2. 如果要添加文档，请在docs下新建一个文件夹
3. sidebar的配置文件统一命名为`sidebar_contents.js`

修改并确认了可以正常运行后，请上传到你的仓库，然后进行申请合并[pull]( https://github.com/kjhuanhao/hexocn/pulls

## 项目组群号
欢迎加入hexocn项目组：`824641786`