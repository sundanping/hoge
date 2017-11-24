<template>
  <div class="page-inner">
    <top-banner :options="banner"></top-banner>
    <section class="customers-section customers-part-1">
      <div class="container">
        <div class="headline">
          <h2>Customers</h2>
          <h3>经典客户</h3>
        </div>
        <div class="content">
          <ul class="customers-list">
            <li class="customer-item" v-for="item in customersList.typical" :key="item.id">
              <div class="item-inner">
                <div class="figure"><img :src="item.image"></div>
                <div class="title" v-text="item.title"></div>
                <div class="detail">
                  <div class="title" v-text="item.title"></div>
                  <p class="brief" v-text="item.brief"></p>
                  <a :href="item.link" class="button">了解详情</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="customers-section customers-part-2 light-bg">
      <div class="container">
        <div class="headline">
          <h2>More</h2>
          <h3>更多客户</h3>
        </div>
        <div class="tabs">
          <span v-for="(dict, type) in tabsData" :key="type" class="tab" :class="{ active: activeTab === type }" @click="switchTab(type)" v-text="dict.name"></span>
        </div>
        <div class="content">
          <transition name="fade" v-for="(dict, type) in tabsData" :key="type">
            <ul class="customers-list" :class="listData[type].transitionType" v-show="activeTab === type">
              <li class="customer-item" v-for="item in customersList[type]" :key="item.id">
                <div class="item-inner">
                  <div class="figure"><img :src="item.image"></div>
                  <div class="title" v-text="item.title"></div>
                </div>
              </li>
            </ul>
          </transition>
          <div class="navigation-pager">
            <button class="pager-button pager-prev" @click="fetchPagedList(-1)" :disabled="listData[activeTab].page <= 0"><icon name="angle-left" scale="2"></icon></button>
            <button class="pager-button pager-next" @click="fetchPagedList(1)" :disabled="listData[activeTab].page >= listData[activeTab].maxPage && listData[activeTab].maxPage !== null"><icon name="angle-right" scale="2"></icon></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setTitle } from '../util/title'
import TopBanner from '../components/TopBanner.vue'

export default {
  name: 'customers',
  title: '行业客户',
  components: {
    TopBanner,
  },
  data () {
    return {
      banner: {
        height: 644,
        headline: '信·任',
        subHeadlines: [
          '十年 数百家媒体客户认可',
          '业内领先的产品理念和先进技术'
        ],
        headlineTop: '30%',
        headlineLeft: '6%',
        bgImage: require('public/customers/customers-hero.jpg'),
      },
      listData: {
        typical: {
          catid: 10,
          count: 8,
        },
        media: {
          catid: 11,
          page: 0,
          maxPage: null,
          count: 10,
          transitionType: '',
          transitionTime: 500
        },
        govcorp: {
          catid: 12,
          page: 0,
          maxPage: null,
          count: 10,
          transitionType: '',
          transitionTime: 500
        },
      },
      tabsData: {
        media: {
          name: '媒体行业',
          list: 'CustomersMedia'
        },
        govcorp: {
          name: '政府/企业',
          list: 'CustomersGovCorp'
        },
      },
      activeTab: 'media'
    }
  },
  computed: {
    customersList () {
      return {
        typical: this.$store.state.Lists.CustomersTypical.slice(0, this.listData.typical.count),
        media: this.$store.state.Lists.CustomersMedia.slice(this.listData.media.page * this.listData.media.count, (this.listData.media.page + 1) * this.listData.media.count),
        govcorp: this.$store.state.Lists.CustomersGovCorp.slice(this.listData.govcorp.page * this.listData.govcorp.count, (this.listData.govcorp.page + 1) * this.listData.govcorp.count),
      }
    }
  },
  asyncData ({ store }) {
    return store.dispatch('FETCH_LIST', {
      reset: true,
      type: ['CustomersTypical', 'CustomersMedia', 'CustomersGovCorp'],
      catid: [10, 11, 12],
      count: 10,
      imgSize: '220x'
    })
  },
  methods: {
    switchTab (tab) {
      Object.keys(this.listData).forEach(key => {
        this.listData[key].transitionType = ''
      })
      this.$nextTick(() => {
        this.activeTab = tab
      })
    },
    fetchPagedList (diff) {
      const target = this.listData[this.activeTab]
      const listName = this.tabsData[this.activeTab].list
      const transition = {
        leave: diff > 0 ? 'leave-left' : 'leave-right',
        enter: diff > 0 ? 'enter-right' : 'enter-left'
      }
      let page = target.page + diff
      page = page < 0 ? 0 : page
      const fetchSuccess = (res) => {
        target.transitionType = transition.leave
        setTimeout(() => {
          target.page = page
          target.transitionType = transition.enter
        }, target.transitionTime)
        if (res.length < target.count) target.maxPage = page
      }
      const list = this.$store.state.Lists[listName].slice(page * target.count, (page + 1) * target.count)
      if (list.length > 0) {
        fetchSuccess(list)
        return
      }
      this.$store.dispatch('FETCH_LIST', {
        type: listName,
        catid: target.catid,
        count: target.count,
        page: page,
        imgSize: '220x'
      }).then(res => {
        if (res.length > 0) {
          fetchSuccess(res)
        } else {
          target.maxPage = target.page
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .customers-section
    padding 60px 0
    line-height 1.8
    .container
      width 1164px
    ul
      list-style none
      padding 0
      &:after
        content ''
        height 0
        display block
        clear both
      li
        float left
        text-align center

  .customers-part-1
    .customer-item
      width 25%
      .item-inner
        position relative
        height 10.5rem
        font-size 1rem
        border-left 2px solid #ececec
        border-top 2px solid #ececec
        padding 1.5rem 1rem 0
        .title
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
      &:nth-child(4n+1) .item-inner
        border-left 0
      &:nth-child(1)
      &:nth-child(2)
      &:nth-child(3)
      &:nth-child(4)
        .item-inner
          border-top 0
      .figure
        margin-bottom 1rem
        img
          display block
          margin 0 auto
          width 110px
          height 110px
          object-fit contain
      .detail
        position absolute
        z-index 8
        top 0
        left 0
        right 0
        bottom 0
        background-color #4f9bf8
        padding .8rem 1.5rem
        overflow hidden
        opacity 0
        transform-origin 50% 100%
        transform perspective(500px) rotateX(30deg)
        transition .2s ease-in
        .brief
          font-size .7rem
          color #fff
          height 5.4em
          margin-bottom 1.2rem
          overflow hidden
          text-overflow ellipsis
        .button
          display inline-block
          width 6.25rem
          line-height 1.75rem
          font-size .7rem
          color #fff
          border 1px solid #fff
          transition .2s ease-in
          &:hover
            background-color #fff
            color #4f9bf8
      &:hover
        .detail
          top 0
          opacity 1
          transform none
  .customers-part-2
    .tabs
      font-size 1rem
      text-align center
      margin 1rem 0
      .tab
        display inline-block
        min-width 6rem
        padding 0 .75rem
        line-height 1.9rem
        color #43c8eb
        border-radius .95rem
        cursor pointer
        margin 0 1rem
        transition .2s
        &.active
          background-color #43c8eb
          color #fff
    .content
      height 650px
    .customers-list
      margin-top 3rem
      position absolute
      width 107%
      left -3.4%
      animation .5s forwards
      &.leave-left
        animation-name leave-left
        animation-timing-function ease-in
      &.leave-right
        animation-name leave-right
        animation-timing-function ease-in
      &.enter-right
        animation-name enter-right
        animation-timing-function ease-out
      &.enter-left
        animation-name enter-left
        animation-timing-function ease-out
    .customer-item
      width 13.04%
      padding-top 13.04%
      height 0
      overflow hidden
      margin 0 3.48% 4rem
      border-radius 50%
      box-shadow 0 4px 6px rgba(0, 0, 0, .2)
      background-color #fff
      .item-inner
        margin-top -100%
        padding-top 1rem
        font-size .7rem
      .figure
        margin-bottom .5rem
        img
          display block
          margin 0 auto
          width 80px
          height 80px
          object-fit contain
    $pager-button-color = rgba(31,45,61,.11)
    .navigation-pager
      position absolute
      width 100%
      bottom 60px
      text-align center
      margin-top 0rem!important
      .pager-button
        display inline-block
        outline 0
        border none
        margin 0 .6rem
        padding 0
        width 2.4rem
        height 2.4rem
        border-radius 50%
        background-color $pager-button-color
        color #fff
        font-size .8rem
        cursor pointer
        transition .3s
        &:hover
          background-color rgba(31,45,61,.3)
        &:disabled
          background-color transparent
          border 1px solid $pager-button-color
          color $pager-button-color
          cursor not-allowed
</style>
