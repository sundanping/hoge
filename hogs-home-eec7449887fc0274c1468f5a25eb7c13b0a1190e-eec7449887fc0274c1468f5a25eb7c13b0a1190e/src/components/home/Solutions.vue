<template>
  <div>
    <div class="container">
      <div class="headline">
        <h2 v-text="title_en"></h2>
        <h3 v-text="title"></h3>
      </div>
      <div class="solution-list">
        <div class="solution-item"
             :class="current === index ? ('solution-' + item.id + ' active') : ('solution-' + item.id)"
             v-for="(item, index) in data"
             :key="item.id"
             @mouseover="hover(index)"
             @mouseleave="leave">
          <div class="solution-icon"><i class="iconfont" :class="'solution-icon-' + item.id"></i></div>
          <h3 class="solution-name"><span v-text="item.name"></span></h3>
          <p class="solution-desc" v-text="item.desc"></p>
          <router-link :to="'/solutions/' + item.id" class="solution-button">了解详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'solution',
  data () {
    return {
      title: '解决方案',
      title_en: 'Solutions',
      data: [
        {
          id: 'media',
          name: '媒体解决方案',
          desc: '主流门户网站、海量新闻网站、网络广播网站三大方向解决方案，全面覆盖广电媒体网站建设需求。',
          color: '#ffd54f',
        },
        {
          id: 'mobile',
          name: '移动解决方案',
          desc: '移动端媒体融合策略，地方手机台、国家智慧城市、小程序解决方案影响亿万人口城市生活。',
          color: '#80c87f',
        },
        {
          id: 'mixin',
          name: '融合解决方案',
          desc: 'MXU、M2O、阿米协同、阿米微运营为广电媒体融合发展保驾护航。',
          color: '#4fc2f8',
        },
        {
          id: 'operation',
          name: '运营解决方案',
          desc: '打通渠道和信息闭塞的现象，使整个广电行业的运营发展能够做到技术与资源贯通，不断探索多元化产品。',
          color: '#e67370',
        }
      ],
      current: 0,
      interval: 5000,
      timer: null
    }
  },
  mounted () {
    this.auto()
  },
  methods: {
    auto () {
      this.timer = setInterval(() => {
        if (this.current >= this.data.length - 1) {
          this.current = 0
        } else {
          this.current++
        }
      }, this.interval)
    },
    hover (index) {
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

$solution-item-icons  = media '\e602',
                        mobile '\e605',
                        mixin '\e603',
                        operation '\e604'
                        
for pair in $solution-item-icons
  .solution-icon-{pair[0]}:before
    content pair[1]

$solution-item-colors = media #ffd54f,
                        mobile #80c87f,
                        mixin #4fc2f8,
                        operation #e67370

.solution-list
  padding 0 .5%
.solution-item
  float left
  position relative
  width 24%
  margin 0 .5%
  padding 2rem 0 3.4rem
  box-sizing border-box
  text-align center
  background-color #fff
  border 1px solid transparent
  border-top 4px solid #dfdfdf
  box-shadow 0 1px 3px rgba(155, 155, 155, .35)
  transition .5s
  .solution-icon .iconfont
    color #999
    font-size 3.2rem
    transition .5s
  .solution-name
    font-size 1rem
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
  .solution-desc
    color #666
    font-size .7rem
    line-height 1.8
    margin 0 1.1rem 2rem
    height (3 * 1.8)em
    text-align left
  .solution-button
    display block
    margin 0 auto
    width 6.3rem
    height 1.8rem
    font-size .7rem
    line-height 1.75rem
    border 1px solid #e6e6e6
    color #999
    transition .5s
  &:hover
  &.active
    margin-top -.1rem
    box-shadow 0 5px 12px rgba(155, 155, 155, .35)
  for pair in $solution-item-colors
    &.solution-{pair[0]}
      &:hover
      &.active
        border-color pair[1]
        .solution-icon .iconfont
          color pair[1]
        .solution-name:after
          width 7em
          background-color pair[1]
        .solution-button
          border-color pair[1]
          color pair[1]
          &:hover
            background-color pair[1]
            color #fff
      
</style>
