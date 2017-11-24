<template>
  <div class="page-inner">
    <top-banner class="joinus-hero" :options="banner"></top-banner>
    <section class="joinus-section" v-for="(dpt, index) in departments" :key="dpt.id">
      <div class="container">
        <div class="figure">
          <div class="dpt-name" v-text="dpt.name_en + ' / ' + dpt.name"></div>
          <img :src="dpt.image" class="dpt-figure" v-if="dpt.image">
        </div>
        <div class="list" v-if="dpt.contentList.length > 0">
          <ul class="jobs-list" :class="{ uncollapse: listUncollapse[dpt.id] }">
            <li v-for="(item, index) in dpt.contentList" :key="item.id" 
               :class="{ uncollapse: detailUncollapse[item.id] === true, loading: detailUncollapse[item.id] === 'loading', show: index < contentListLengthDefault || listUncollapse[dpt.id] }"
                @click="fetchJobDetail(item.id)">
              <div class="link-detail">
                <icon name="spinner" class="icon-spinner rotate-infinite" scale="1"></icon>
                <span>了解详情</span>
                <icon name="angle-double-down" scale="1"></icon>
              </div>
              <span class="title" v-text="item.title"></span>
              <div class="job-detail">
                <div class="job-detail-title">职位详情</div>
                <div class="job-detail-content" v-html="jobDetail[item.id]"></div>
              </div>
            </li>
          </ul>
          <span class="btn-more" v-if="dpt.contentList.length > contentListLengthDefault" @click="setCollapse(dpt.id)"><icon name="angle-right" scale="2"></icon></span>
        </div>
      </div>
    </section>
    <section class="joinus-section teams-section">
      <div class="container">
        <div class="headline">
          <h2>Team building</h2>
          <h3>团队建设</h3>
        </div>
        <div class="events-list">
          <div class="event-item" v-for="item in teamsEvents" :key="item.id">
            <a :href="item.link">
              <div class="event-figure">
                <img :src="item.image">
                <div class="label-icon"><icon name="picture-o" scale="1"></icon></div>
              </div>
              <div class="event-title" v-text="item.title"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="joinus-section text-center">
      <p style="font-size:1.2rem;">“欢迎有志之士加入我们，一起心怀梦想，扬帆起航”</p>
      <p>简历邮箱：<a href="mailto:wushiyu@hoge.cn">wushiyu@hoge.cn</a></p>
    </section>
  </div>
</template>

<script>
import { setTitle } from '../util/title'
import TopBanner from '../components/TopBanner.vue'

export default {
  name: 'joinus',
  title: '加入我们',
  components: {
    TopBanner,
  },
  data () {
    return {
      banner: {
        height: 644,
        // headline: 'JOIN<span style="color:#e50405">·</span>US',
        // subHeadlines: [
        //   '我们需要的是伙伴 是梦想之路的搭档'
        // ],
        // headlineTop: '34.5%',
        // headlineLeft: '50%',
        headline: '合·作',
        subHeadlines: [
          '我们用心合作，像相互咬合的齿轮，齐头并进，',
          '并输予企业发展源源不断的动力。'
        ],
        headlineTop: '26%',
        headlineLeft: '3%',
        bgImage: require('public/joinus/joinus-hero.jpg'),
      },
      contentListLengthDefault: 4,
      listUncollapse: {},
      detailUncollapse: {},
      jobDetail: {}
    }
  },
  computed: {
    departments () {
      return this.$store.state.Categories.Joinus
    },
    teamsEvents () {
      return this.$store.state.Lists.TeamsEvents
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_CATEGORIES', {
      type: 'Joinus',
      ids: '17,18,19,21',
      imgSize: '950x520',
      count: 1000
    }) && store.dispatch('FETCH_LIST', {
      reset: true,
      type: 'TeamsEvents',
      catid: 8,
      count: 15,
      imgSize: '430x'
    })
  },
  methods: {
    setCollapse (id) {
      const val = !this.listUncollapse[id]
      this.$set(this.listUncollapse, id, val)
    },
    fetchJobDetail (id) {
      if (this.detailUncollapse[id] === true) {
        this.$set(this.detailUncollapse, id, false)
      } else {
        if (this.jobDetail[id]) {
          this.$set(this.detailUncollapse, id, true)
        } else {
          this.$set(this.detailUncollapse, id, 'loading')
          this.$store.dispatch('FETCH_CONTENT', id).then(res => {
            const content = res ? res.content : ''
            this.$set(this.jobDetail, id, content)
            content && this.$set(this.detailUncollapse, id, true)
          })
        }
      }
    }
  }
}
</script>

<style lang="stylus">
  $joinus-item-colors = #4ec3f9,
                        #8b4efc,
                        #ec6705,
                        #81c784,
                        #fcd44e
  .joinus-hero
    // .banner-headline
    //   text-align center
    //   transform scale(1.6) translateX(-31.25%)
    //   .headline-main
    //     font-weight 500!important
    //   .headline-sub
    //     border-top 1px solid
    //     border-bottom 1px solid
  .joinus-section
    padding 60px 0
    line-height 1.8
    &.text-center
      text-align center
    .container
      width 1164px
    .figure
      height 360px
      .dpt-name
        position relative
        z-index 2
        display inline-block
        background-color #333
        color #fff
        font-size 1.2rem
        line-height 3.2rem
        height 3.2rem
        padding 0 1.4rem
      .dpt-figure
        display block
        width 470px
        height 260px
        object-fit cover
        margin-top -.8rem
    .jobs-list
      padding-top 2.35rem
      padding-left 0
      margin 0
      // height 13rem
      overflow hidden
      transition .2s
      position relative
      &.uncollapse
        height auto
        ~ .btn-more
          transform rotate(-90deg)
      li
        list-style none
        font-size .8rem
        line-height 1.4rem
        max-height 1.4rem
        overflow hidden
        padding .9rem 1rem
        border-bottom 1px solid #e4e4e4
        transition .5s
        cursor pointer
        opacity 0
        position absolute
        transform translateY(-15px)
        .link-detail
          float right
          font-size .7rem
          text-align center
          color #999
          background-color #e4e4e4
          border-radius .7rem
          padding 0 .5rem
          transition .2s
          width 4.5rem
          height 1.4rem
          overflow hidden
          span
            margin 0 .5rem
          svg
            position relative
            top .15rem
            transition .2s
          svg.icon-spinner
            display none
          &:hover
            background-color #333
            color #fff
        &:hover
          background-color #f9f9f9
        .job-detail
          margin-top 1rem
          .job-detail-title
            color #999
        &.loading .link-detail
          width 6rem
          svg.icon-spinner
            display inline-block
        &.uncollapse
          max-height 50rem
          background-color #f9f9f9
          .link-detail
            width .8rem
            svg
              transform rotate(180deg)
            span
              display none
        &.show
          opacity 1
          position relative
          transform translateY(0)
    .btn-more
      display block
      float right
      box-sizing border-box
      width 2.3rem
      height 2.3rem
      padding-top .3rem
      padding-left .1rem
      margin-top 1.5rem
      margin-right 1rem
      border-radius 1.15rem
      color #fff
      background-color #333
      text-align center
      transition .2s
      transform rotate(90deg)
      cursor pointer
    &:nth-child(even)
      .figure
        float left
        margin-right 44px
      .list
        margin-left 514px
    &:nth-child(odd)
      background-color #f9f9f9
      .figure
        float right
        margin-left 44px
      .list
        margin-right 514px
    
    for color, i in $joinus-item-colors
      &:nth-child(5n+{i})
        .figure .dpt-name
        .btn-more
        .jobs-list .link-detail:hover
          background-color color[0]
          
  .teams-section
    padding 100px 0
    .events-list
      display flex
      flex-wrap wrap
      margin 4rem -1% 0
    .event-item
      float left
      flex-shrink 0
      width 18%
      margin 0 1% 2rem
      .event-figure
        position relative
        width 100%
        padding-top 66.66666%
        transition transform .2s ease-in
        .label-icon
          position absolute
          left 0
          top 0
          color #fff
          background-color rgba(0, 0, 0, .7)
          padding .2rem .4rem
          line-height 1
        img
          position absolute
          top 0
          width 100%
          height 100%
          object-fit cover
      .event-title
        font-size .8rem
        margin-top .5rem
        text-align justify
        transition color .2s linear
      &:hover
        .event-figure
          transform scale(1.05)
</style>
