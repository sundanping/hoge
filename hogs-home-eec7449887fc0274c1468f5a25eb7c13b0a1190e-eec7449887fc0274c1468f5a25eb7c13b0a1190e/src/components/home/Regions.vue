<template>
  <div>
    <div class="container" ref="regions">
      <div class="headline regions-headline">
        <h2 v-text="title_en"></h2>
        <h3 v-text="title"></h3>
      </div>
      <div class="regions-map">
        <div class="region-point" v-for="point in newRegions" :key="point.id" :style="{ left: point.x + 'px', top: point.y + 'px' }">
          <div class="points-wave">
            <div class="point"></div>
            <div class="point wave" :style="{ animationDelay: point.delay + 's' }"></div>
            <div class="point wave" :style="{ animationDelay: point.delay -  (-0.5) + 's' }"></div>
            <div class="point wave" :style="{ animationDelay: point.delay -  (-1) + 's' }"></div>
          </div>
          <div class="tooltip" v-text="point.name"></div>
        </div>
      </div>
      <div class="regions-data">
        <div class="data-item" v-for="(item, index) in data" :key="item.index">
          <div class="data-number">
            <i-count-up :ref="'data' + index" :end="item.number" :duration="2.5" :options="countUpOptions" :callback="countUpCallback"></i-count-up>
            <span class="data-suffix" v-text="item.suffix"></span>
          </div>
          <div class="data-index" v-text="item.index"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
  name: 'regions',
  components: {
    ICountUp
  },
  mounted () {
    window.addEventListener('scroll', this.resetCountUp)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.resetCountUp)
  },
  computed: {
    newRegions () {
      let newRegions = []
      this.regions.forEach(item => {
        item.delay = Math.random().toFixed(3)
        newRegions.push(item)
      })
      return newRegions
    }
  },
  data () {
    return {
      title: '全国覆盖',
      title_en: 'Coverage',
      regions: [
        { id: 1, name: '南京', x: 610, y: 405 },
        { id: 2, name: '北京', x: 578, y: 253 },
        { id: 3, name: '广州', x: 535, y: 527 },
        { id: 4, name: '武汉', x: 547, y: 412 },
        { id: 5, name: '济南', x: 588, y: 314 },
        { id: 6, name: '长春', x: 702, y: 177 },
        { id: 7, name: '兰州', x: 403, y: 325 },
        { id: 8, name: '拉萨', x: 225, y: 426 },

        { id: 9, name: '无锡', x: 640, y: 415 },
        { id: 10, name: '西安', x: 475, y: 354 },
        { id: 11, name: '福州', x: 617, y: 489 },
        { id: 12, name: '海口', x: 493, y: 580 },
        { id: 13, name: '哈尔滨', x: 727, y: 147 },
      ],
      data: [
        {
          index: '覆盖省／直辖市',
          number: 90,
          suffix: '%'
        },
        {
          index: '各行业客户',
          number: 300,
          suffix: '+'
        },
        {
          index: '媒体行业用户',
          number: 200,
          suffix: '+'
        },
        {
          index: '地市级媒体',
          number: 100,
          suffix: '+'
        },
        {
          index: '省级媒体',
          number: 20,
          suffix: '+'
        },
      ],
      countUpOptions: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      countUpInstances: [],
      readyToResetCountUp: false
    }
  },
  methods: {
    resetCountUp () {
      if (this.countUpInstances.length > 0) {
        const regions = this.$refs.regions.parentNode
        const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        // console.log(regions.offsetTop, window.scrollY, winHeight, this.readyToResetCountUp)
        if (window.scrollY + winHeight < regions.offsetTop || window.scrollY > regions.offsetTop + regions.offsetHeight) {
          this.readyToResetCountUp = true
        } else if ( this.readyToResetCountUp ) {
          this.countUpInstances.forEach(instance => {
            instance.reset()
            instance.start()
          })
          this.readyToResetCountUp = false
        }
      }
    },
    countUpCallback (instance) {
      this.countUpInstances.push(instance)
    }
  }
}
</script>

<style lang="stylus">
.container .regions-headline:after
  display none
.regions-map
  position absolute
  z-index 1
  width 858px
  height 655px
  top 5rem
  left -6rem
  margin-top 0 !important
  background url('~public/region-map.png') center center no-repeat
  background-size 858px 655px
  .region-point
    position absolute
    width 40px
    height 40px
    cursor pointer
    .points-wave
      width 100%
      height 100%
      .point
        position absolute
        z-index 2
        left 50%
        top 50%
        width 14px
        height 14px
        border-radius 50%
        background-color #4fc2f8
        margin -7px 0 0 -7px
        opacity 1
        animation shining 1s linear infinite
      .wave
        z-index 1
        animation wave 2s ease-out infinite
        &:nth-child(3)
          animation-name wave-l
          visibility hidden
      &:hover .wave
        &:nth-child(3)
          visibility visible
    .tooltip
      opacity 0
      position absolute
      z-index 3
      left 40px
      top 10px
      background-color #000
      background-color rgba(0, 0, 0, .8)
      border-radius 2px
      line-height 20px
      padding 0 .2rem 0 .25rem
      font-size .7rem
      color #fff
      white-space nowrap
      transition .2s
      &:after
        content ''
        display block
        border: 5px dashed transparent
        border-right: 5px solid #000
        border-right: 5px solid rgba(0, 0, 0, .8)
        position absolute
        left -10px
        top 5px
    &:hover
      .tooltip
        opacity 1
        left 35px
.regions-data
  width 20rem
  position relative
  z-index 2
  margin-left 62.5%
  top 4rem
  padding-bottom 7rem
  &:after
    content ''
    display block
    height 0
    clear both
  .data-item
    float left
    width 9.4rem
    margin-bottom 2.5rem
.data-number
  font-family Helvetica Neue, Robot, Arial
  font-size 2rem
  position relative
  .data-suffix
    font-size .9rem
    vertical-align middle
  &:after
    content ''
    position absolute
    bottom 0
    left 0
    display block
    height 1px
    width 1em
    background-color #e8e8e8
.data-index
  margin-top .6rem
  font-size .7rem
  color #999
  
@keyframes shining
  0%
    opacity 1
    transform scale(1)
  50%
    opacity .5
    transform scale(.8)
  100%
    opacity 1
    transform scale(1)
@keyframes wave
  0%
    opacity .8
    transform scale(.05)
  100%
    opacity 0
    transform scale(4)
@keyframes wave-l
  0%
    opacity .4
    transform scale(.05)
  100%
    opacity 0
    transform scale(8)
    
</style>
