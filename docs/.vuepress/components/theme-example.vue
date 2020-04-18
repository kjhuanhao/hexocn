<template>
  <div class="theme-example">
    <div class="blog-list-wrapper">
      <div class="blog-item" v-for="(blog, index) in blogList" :key="index">
        <img class="thumbnail" :src="blog.themeimg" alt="博客展示图">
        <div class="info">
          <h3 class="title">{{ blog.name }}</h3>
          <p class="desc">{{ blog.desc }}</p>
          <a class="btn" target="blank" :href="blog.link">直达</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogList: [
        
        { 
          name: 'Huanhao', 
          desc: '彼方为谁,无我有问,九月露湿,待君之前',
          link: 'https://mrhuanhao.cn/', 
          themeimg: 'https://cdn.jsdelivr.net/gh/kjhuanhao/blogcdn/hexocn/image.png' 
        },
        { 
          name: 'MaskXman', 
          desc: 'Just to be Better For you',
          link: 'https://maskxman.github.io/', 
          themeimg: 'https://cdn.jsdelivr.net/gh/MaskXman/source@4.0/Blog.jpg' 
        },
        {
        name: '小康博客',
        descr: '一个收藏回忆与分享技术的地方！',
        link: 'https://www.antmoe.com/',
        themeimg: 'https://ae01.alicdn.com/kf/H2b9c44b1d25c4da3ba30df0a744b1437A.png'
        },
        {
          name: 'GamerNoTitle',
          desc: '一个在懵懂无知中成长的高中生程序员^V^',
          link: 'https://bili33.top',
          themeimg: 'https://cdn.jsdelivr.net/gh/GamerNoTitle/Picture-repo-v1@master/img/show/blog.png'
        },

      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.theme-example
   .blog-list-wrapper
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog-item
      margin-bottom 4rem
      width 48%
      box-shadow: var(--box-shadow)
      transition: all .5s
      .info
        margin 2.5rem  0 1.5rem
        padding 0 1.5rem
        .title
          margin 0
          max-width 65%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .desc
          margin .6rem 0 1.5rem  
        .btn
          display inline-block
          background-color $accentColor  
          color #ffffff
          border-radius 2px
          padding 4px 8px
          font-size .7rem
          text-decoration none 
          cursor pointer
      &:hover
        transform scale(1.05)
@media (max-width: $MQMobile)
  .theme-example
    .blog-list-wrapper
      .blog-item
        width 100%
</style>