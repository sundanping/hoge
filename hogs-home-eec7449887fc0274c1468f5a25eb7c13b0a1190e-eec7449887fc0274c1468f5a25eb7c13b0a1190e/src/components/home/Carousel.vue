<template>
  <el-carousel height="644px" :interval="500000" @change="showHero">
    <el-carousel-item v-for="(item, index) in Heros" :key="index" :style="{ backgroundImage: 'url(' + item.hero + ')' }">
      <a :href="item.link" target="_blank">
        <div class="container">
          <div class="hero-headline"
              :class="{ center: item.headlineStyle.align === 'center' }"
              :style="{ left: (item.headlineStyle.left || 0) + 'px' }">
            <transition :name="item.headlineTransition.main || 'slide-right-delay'">
              <h2 class="headline-main"
                  v-text="item.headline"
                  v-show="current === index"
                  v-if="typeof item.headline === 'string'"
                 :style="item.headlineStyle.main || {}"
                ></h2>
            </transition>
            <transition :name="item.headlineTransition.main || 'slide-right-delay'">
              <h2 class="headline-main"
                  v-show="current === index"
                  v-if="item.headline.img"
                 :style="item.headlineStyle.main || {}"
                >
                <img :src="item.headline.img" :width="item.headline.width">
              </h2>
            </transition>
            <div v-if="item.subHeadlines"
                :style="item.headlineStyle.sub || {}"
              >
              <transition-group tag="div" :name="item.headlineTransition.sub || 'slide-left-delay'" class="headline-sub" v-if="item.subHeadlines.length > 1">
                <p v-for="(text, index1) in item.subHeadlines" :key="index1" v-text="text" v-show="current === index"></p>
              </transition-group>
              <div class="headline-sub" v-else>
                <div v-if="typeof item.subHeadlines[0] === 'string'">
                  <transition :name="item.headlineTransition.sub || 'slide-left'">
                    <p v-show="current === index" v-text="item.subHeadlines[0]"></p>
                  </transition>
                </div>
                <div v-if="item.subHeadlines[0].img">
                  <transition :name="item.headlineTransition.sub || 'slide-left'">
                    <p v-show="current === index"><img :src="item.subHeadlines[0].img" :width="item.subHeadlines[0].width"></p>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Vue from 'vue'
import { Carousel, CarouselItem } from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)

export default {
  name: 'carousel',
  data () {
    return {
      Heros: [
        // {
        //   headline: '创·变',
        //   subHeadlines: [
        //     '互联网  移动互联网  OTT  多终端互联网',
        //     '如何适应新媒体时代大环境？'
        //   ],
        //   hero: require('public/hero-1.jpg')
        // },
        // {
        //   headlineStyle: {
        //     left: -30,
        //   },
        //   headline: {
        //     img: require('public/hero-2-headline.png'),
        //     width: 590
        //   },
        //   subHeadlines: [{
        //     img: require('public/hero-2-subheadline.png'),
        //     width: 489
        //   }],
        //   hero: require('public/hero-2.jpg')
        // },
        // {
        //   headlineStyle: {
        //     left: -30
        //   },
        //   headline: {
        //     img: require('public/hero-3-headline.png'),
        //     width: 680
        //   },
        //   subHeadlines: [{
        //     img: require('public/hero-3-subheadline.png'),
        //     width: 542
        //   }],
        //   hero: require('public/hero-3.jpg')
        // },
        {
          title: '2017BirTV今日开幕 厚建创变新融合',
          link: 'http://www.hoge.cn/c/2017-08-23/799.html',
          headlineStyle: {
            align: 'center',
            main: {
              marginTop: '-170px',
            }
          },
          headlineTransition: {
            main: 'zoom-in'
          },
          headline: {
            img: require('public/hero-8-headline.png'),
            width: 590
          },
          hero: require('public/hero-8.jpg'),
        },
        {
          title: '厚建携明星产品亮相第23届上海电视节',
          link: 'http://www.hoge.cn/c/2017-07-05/727.html',
          headlineStyle: {
            align: 'center',
            main: {
              marginTop: '-10px'
            },
            sub: {
              marginTop: '-166px'
            }
          },
          headlineTransition: {},
          headline: {
            img: require('public/hero-7-headline.png'),
            width: 840
          },
          subHeadlines: [{
            img: require('public/hero-7-subheadline.png'),
            width: 575
          }],
          hero: require('public/hero-7.jpg'),
        },
        {
          title: '厚建助力2017全国网盟研讨会顺利召开',
          link: 'http://www.hoge.cn/c/2017-07-05/734.html',
          headlineStyle: {
            align: 'center',
            main: {
              marginTop: '-90px'
            },
            sub: {
              marginTop: '50px'
            }
          },
          headlineTransition: {},
          headline: {
            img: require('public/hero-6-headline.png'),
            width: 840
          },
          subHeadlines: [{
            img: require('public/hero-6-subheadline.png'),
            width: 400
          }],
          hero: require('public/hero-6.jpg'),
        },
        {
          title: 'MXU荣获2016年广播电视科技创新产品奖',
          link: 'http://www.hoge.cn/c/2017-07-11/740.html',
          headlineStyle: {
            left: 10
          },
          headlineTransition: {},
          headline: {
            img: require('public/hero-4-headline.png'),
            width: 670
          },
          subHeadlines: [{
            img: require('public/hero-4-subheadline.png'),
            width: 510
          }],
          hero: require('public/hero-4.jpg'),
        },
        {
          title: '2017CCBN，厚建完美呈现“媒体再造”',
          link: 'http://www.hoge.cn/c/2017-05-18/666.html',
          headlineStyle: {
            align: 'center',
            sub: {
              marginTop: '-172px'
            }
          },
          headlineTransition: {},
          headline: {
            img: require('public/hero-5-headline.png'),
            width: 735
          },
          subHeadlines: [{
            img: require('public/hero-5-subheadline.png'),
            width: 400
          }],
          hero: require('public/hero-5.jpg'),
        }
      ],
      current: 0
    }
  },
  methods: {
    showHero (index) {
      this.current = index
    }
  }
}
</script>

<style lang="stylus">
.heros
  .el-carousel__item
    background center center no-repeat #010101
    background-size cover
    > a
      display block
      position absolute
      left 0
      top 0
      width 100%
      height 100%
  .el-carousel__arrow
    width 64px
    height 64px
    font-size 16px
  .el-carousel__indicator
    padding 30px 8px
    &.is-active button
      opacity: .8
    button
      opacity: .2
      width 36px
      height 6px

.hero-headline
  position relative
  margin-top 220px
  color #fff
  &.center
    left 50%!important
    transform translateX(-50%)
    text-align center
  .headline-main
    position relative
    font-size 4rem
    font-weight 300
    margin 10px 0
  .headline-sub
    position relative
    p
      font-size 1rem
      margin: 5px 0
      &:nth-child(1)
        transition-delay .8s
      &:nth-child(2)
        transition-delay .95s
</style>
