<template>
  <div>
    <div class="container">
      <div class="headline">
        <h2 v-text="title_en"></h2>
        <h3 v-text="title"></h3>
      </div>
      <div class="news-list" :class="transitionType">
        <div class="news-item" v-for="item in list" :key="item.id">
          <a :href="item.link">
            <div class="news-figure">
              <img :src="item.image">
            </div>
            <div class="news-title" v-text="item.title"></div>
            <div class="news-time" v-text="item.time"></div>
          </a>
        </div>
      </div>
      <div class="navigation-pager">
        <button class="pager-button pager-prev" @click="fetchPagedList(-1)" :disabled="page <= 0"><i class="el-icon-arrow-left"></i></button>
        <button class="pager-button pager-next" @click="fetchPagedList(1)" :disabled="page >= maxPage && maxPage !== null"><i class="el-icon-arrow-right"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      title: '公司资讯',
      title_en: 'News',
      catid: 1,
      page: 0,
      maxPage: null,
      count: 6,
      transitionType: '',
      transitionTime: 500
    }
  },
  computed: {
    list () {
      return this.$store.state.Lists.News.slice(this.page * this.count, (this.page + 1) * this.count)
    }
  },
  asyncData ({ store }) {
    return store.dispatch('FETCH_LIST', {
      reset: true,
      type: 'News',
      catid: 1,
      count: 6,
      imgSize: '688x'
    })
  },
  methods: {
    fetchPagedList (diff) {
      const transition = {
        leave: diff > 0 ? 'leave-left' : 'leave-right',
        enter: diff > 0 ? 'enter-right' : 'enter-left'
      }
      let page = this.page + diff
      page = page < 0 ? 0 : page
      const fetchSuccess = (res) => {
        this.transitionType = transition.leave
        setTimeout(() => {
          this.page = page
          this.transitionType = transition.enter
        }, this.transitionTime)
        if (res.length < this.count) this.maxPage = page
      }
      const list = this.$store.state.Lists.News.slice(page * this.count, (page + 1) * this.count)
      if (list.length > 0) {
        fetchSuccess(list)
        return
      }
      this.$store.dispatch('FETCH_LIST', {
        type: 'News',
        catid: this.catid,
        count: this.count,
        page: page,
        imgSize: '688x'
      }).then(res => {
        if (res.length > 0) {
          fetchSuccess(res)
        } else {
          this.maxPage = this.page
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.news-list
  display flex
  flex-wrap wrap
  margin 2.3rem -2.3% 0
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

.news-item
  float left
  flex-shrink 0
  width 27.33333%
  margin 0 3% 3rem
  .news-figure
    position relative
    width 100%
    padding-top 58.8%
    transition transform .2s ease-in
    img
      position absolute
      top 0
      width 100%
      height 100%
      object-fit cover
  .news-title
    font-size .8rem
    margin-top .8rem
    text-align justify
    transition color .2s linear
  .news-time
    color #999
    font-size .7rem
    margin-top .4rem
  &:hover
    .news-figure
      transform scale(1.05)
$pager-button-color = rgba(31,45,61,.11)
.navigation-pager
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
