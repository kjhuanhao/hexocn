module.exports = [
    { text: '主页', link: '/', icon: 'reco-home' },
      { text: '文档', 
      icon: 'reco-api',
      items: [
        { 
          text: '教程', items: [
            { text: '本站教程', link: '../docscn/' },
            { text: '官方教程', link: '/views/hexo/' }
          ],
        },
        {
          text: '插件', items: [
            { text: '官方插件', link: '/views/plugins/index.html' },
            { text: '插件广场', link: '/views/other/recommend.html' }
          ]
        }
      ]
    },
      { text: '常见问题', link: '/views/other/question', icon: 'reco-faq' },
      { text: 'GitHub', link: 'https://github.com/kjhuanhao/hexocn', icon: 'reco-github'},




];