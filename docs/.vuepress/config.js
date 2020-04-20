module.exports = {
  title: "Hexo中文站",
  description: '加载中···请耐心等待!',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/kjhuanhao/thecdn/hexocn/ico.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
   // ["script", { src: "https://cdn.jsdelivr.net/gh/kjhuanhao/webcdn@master/hexocn/jishu.js" }]
  ],
  
  theme: 'reco',
  themeConfig: {
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    type: 'home',
    // 博客设置
    blogConfig: {
      category: {
        location: 3,     
        text: '用户文档' 
      },
    // tag: {
    // location: 3, 
     // text: '标签', 
     // icon: 'reco-npm'
    // }
  },
    logo: 'https://cdn.jsdelivr.net/gh/kjhuanhao/thecdn/hexocn/hexo200.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    //'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Hexo中文站',
    // 作者头像
    authorAvatar: 'https://cdn.jsdelivr.net/gh/kjhuanhao/thecdn/hexocn/hexo200.png',
    noFoundPageByTencent: false,
      // Git 项目地址
      repo: 'kjhuanhao/hexocn',
      // 启用编辑
      editLinks: true,
      // 编辑按钮的 Text
      editLinkText: '在Github编辑此页',
      // 编辑文档的所在目录
      docsDir: 'docs',
      docsBranch: 'master',
      
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

     valineConfig: {
      appId: 'CFCNeR34aNM0CSs5DW1N8pkN-gzGzoHsz',// your appId
      appKey: 'CgyWCzmtNVRElelaPoNMdlcj', // your appKey
    }
  },
  plugins: [
    ["vuepress-plugin-code-copy", {
        successText: '复制成功!'
        }
    ]
  ],
  markdown: {
    lineNumbers: false
  }
  

}  
