module.exports = {
  title: "Hexo中文站",
  description: '致力于帮助你搭建完美的博客',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    type: 'home',
    // 博客设置
   // blogConfig: {
    //  tag: {
     //   location: 3, // 在导航栏菜单中所占的位置，默认3
     //   text: 'Tag' // 默认 “标签”
    //  }
   // },
    logo: 'https://cdn.jsdelivr.net/gh/mrhuanhao/hexocn/icon/hexo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    //'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Hexocn',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2020'
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

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: false
  }
}  

