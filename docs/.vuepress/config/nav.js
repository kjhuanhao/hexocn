module.exports = [
    { text: '主页', link: '/', icon: 'reco-home' },
      { text: '文档', 
      icon: 'reco-api',
      items: [
        { 
          text: '教程', items: [
            { text: '本站教程', link: '../docscn/' },
            { text: '官方教程', link: '../hexocn/' }
          ],
        },
        
       /* {
          text: '插件', items: [
            { text: '官方插件', link: '/views/plugins/index.html' },
            { text: '插件广场', link: '/views/other/recommend.html' }
          ]
        }*/
      ]
    },
      { text: '贡献文档', link: '../new/', icon: 'reco-blog' },
      { text: '主题', link: '../themes/', icon: 'reco-theme' },
      { text: '插件', link: '../plugins/', icon: 'reco-npm' },
      { text: '帮助', link: '../help/', icon: 'reco-faq' },
      { text: 'GitHub', link: 'https://github.com/kjhuanhao/hexocn', icon: 'reco-github'},




];