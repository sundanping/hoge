<template>
  <div>
    <div class="container">
      <div class="headline">
        <h2 v-text="title_en"></h2>
        <h3 v-text="title"></h3>
      </div>
      <div class="cases-tabs">
        <div class="cases-tab"
             :class="index === current ? ('solution-' + tab.id + ' active') : ('solution-' + tab.id)"
             v-for="(tab, index) in tabs" :key="tab.id"
             @mouseover="switchTab(index)"
             @mouseleave="leave">
          <span v-text="tab.name"></span>
        </div>
      </div>
      <transition-group tag="div" name="slide-up" class="cases-tabs-content">
        <div class="cases-list"
             :class="'solution-' + tab.id"
             v-for="(tab, index) in tabs" :key="tab.id"
             v-show="index === current"
             @mouseover="switchTab(index)"
             @mouseleave="leave">
          <transition-group tag="ul" name="slide-up">
            <li class="case-item" v-for="(item, index1) in lists[tab.id]" :key="item.id" v-show="index === current" :style="{transitionDelay: index1 * 0.08 + 's'}">
              <img :src="item.image">
              <span v-text="item.subtitle"></span>
              <div class="case-qrcode">
                <img :src="item.images[0]" v-if="tab.id === 'mobile'">
                <a :href="item.link" target="_blank" v-else>了解详情</a>
              </div>
            </li>
            <li class="case-item" :key="999999">
              <router-link :to="`/solutions/${tab.id}#solution-cases`"><i class="iconfont icon-more"></i>更多</router-link>
            </li>
          </transition-group>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cases',
  data () {
    return {
      title: '优秀案例',
      title_en: 'Cases',
      tabs: [
        {
          id: 'media',
          name: '媒体解决方案'
        },
        {
          id: 'mobile',
          name: '移动解决方案'
        },
        {
          id: 'mixin',
          name: '融合解决方案'
        },
        {
          id: 'operation',
          name: '运营解决方案'
        }
      ],
      count: 7,
      current: 0,
      interval: 6000,
      timer: null
    }
  },
  computed: {
    lists () {
      return {
        media: this.$store.state.Lists.CasesMedia.slice(0, this.count),
        mobile: this.$store.state.Lists.CasesMobile.slice(0, this.count),
        mixin: this.$store.state.Lists.CasesMixin.slice(0, this.count),
        operation: this.$store.state.Lists.CasesOperation.slice(0, this.count)
      }
    }
  },
  asyncData ({ store }) {
    return store.dispatch('FETCH_LIST', {
      reset: true,
      type: ['CasesMedia', 'CasesMobile', 'CasesMixin', 'CasesOperation'],
      catid: [56, 57, 58, 59],
      count: 12,
      imgSize: '200x200'
    })
  },
  mounted () {
    this.auto()
  },
  methods: {
    auto () {
      this.timer = setInterval(() => {
        if (this.current >= Object.keys(this.lists).length - 1) {
          this.current = 0
        } else {
          this.current++
        }
      }, this.interval)
    },
    switchTab (index) {
      clearInterval(this.timer)
      this.timer = null
      this.current = index
    },
    leave () {
      this.auto()
    }
  }
}
</script>

<style lang="stylus">
.icon-more:before
  content '\e606'
  
  
$solution-item-colors = media #ffd54f,
                        mobile #80c87f,
                        mixin #4fc2f8,
                        operation #e67370
.cases-tabs
  text-align center
  font-size 0
  .cases-tab
    display inline-block
    padding .5rem 1.25rem
    margin: 0 1.25rem
    font-size .9rem
    min-width 7em
    cursor pointer
    span
      position relative
      z-index 2
    &:after
      content ''
      display block
      margin 0 auto
      width 0
      height .6rem
      transition .5s
      position relative
      z-index 1
      margin-top -.6rem
    for pair in $solution-item-colors
      &.solution-{pair[0]}
        &:hover:after
        &.active:after
          width 7em
          background-color pair[1]
.cases-tabs-content
  position relative
  height 22rem
.cases-list
  position absolute
  width 110%
  margin 0 -5%
  ul
    list-style none
    padding 0
  a
    display block
    transition .2s
  for pair in $solution-item-colors
    &.solution-{pair[0]}
      a:hover
        color pair[1]
        .icon-more
          color pair[1]
  .case-item
    position relative
    float left
    width 13%
    margin 0 6% 3rem
    padding .8rem 0
    height 7rem
    background-color #fff
    text-align center
    font-size .7rem
    overflow hidden
    img, .icon-more
      width 5rem
      height 5rem
      display block
      margin 0 auto 1rem
    .case-qrcode
      position absolute
      z-index 8
      top 0%
      left 0
      right 0
      bottom 2rem
      // background-color #000
      // background-color rgba(0, 0, 0, .3)
      background-color rgba(255, 255, 255, .95)
      padding .8rem 0
      opacity 0
      transform-origin 50% 100%
      transform perspective(500px) rotateX(30deg)
      transition all .2s ease-in
      a
        display inline-block
        margin-top 20%
        padding 0 1.5rem
        border-radius 1.2rem
        line-height 1.8rem
        color #2a97e0
        border 1px solid #2a97e0
        transition .2s
        &:hover
          color #fff
          background-color #2a97e0
    .icon-more
      padding-top 1rem
      height 4rem
      color #eaeaea
      font-size 2.1rem
      transition .2s
    &:hover
      .case-qrcode
        top 0
        opacity 1
        transform none

</style>
