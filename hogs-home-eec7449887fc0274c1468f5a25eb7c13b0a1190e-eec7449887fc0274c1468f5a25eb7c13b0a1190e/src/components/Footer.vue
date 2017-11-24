<template>
  <div class="footer">
    <div class="container">
      <div class="nav">
        <div class="nav-group" v-for="item in Menu" :key="item.name">
          <div class="nav-title" v-text="item.name"></div>
          <div class="subnav">
            <div class="nav-item" :class="{ 'nav-item-img': subitem.image }" v-for="subitem in item.subMenu" :key="subitem.name">
              <router-link :to="subitem.route" v-text="subitem.name" v-if="subitem.route">
                <img :src="subitem.image" :alt="subitem.name" v-if="subitem.image">
                <template v-text="subitem.name" v-else></template>
              </router-link>
              <a :href="subitem.link" target="_blank" v-else>
                <img :src="subitem.image" :alt="subitem.name" v-if="subitem.image">
                <span v-text="subitem.name" v-else></span>
                <transition name="slide-up" v-if="subitem.qrcode">
                  <div class="tooltip-qrcode">
                    <img :src="subitem.qrcode">
                  </div>
                </transition>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright @ 2004 - <span v-text="latestYear"></span>&nbsp;<span v-text="CompanyInfo.shortNameEn"></span>. All Rights Reserved.</span>
      <router-link to="/" v-text="CompanyInfo.name"></router-link>
      <a href="http://www.miibeian.gov.cn/" target="_blank" v-text="CompanyInfo.beian"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-nav',
  data () {
    return {
    }
  },
  computed: {
    latestYear () {
      return new Date().getFullYear()
    },
    CompanyInfo () {
      return this.$store.state.CompanyInfo
    },
    Menu () {
      return this.$store.state.FootMenu
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
$nav-bg = rgb(50, 50, 50)
$nav-bg-alpha = rgba(50, 50, 50, .8)
$nav-color-hover = #2a97e0

.footer
  background-color #363d41
  color #ccc
  a
    color #ccc
    transition .2s
    &:hover
      color #2a97e0
  .nav
    display flex
    justify-content space-between
    padding 1.5rem 10%
    .nav-group
      display inline-block
      .nav-title
        font-size .9rem
        line-height 2rem
        color #fff
      .subnav
        font-size .7rem
        line-height 1.8rem
        max-width 10.2rem
        .nav-item a
          position relative
        .nav-item-img
          display inline-block
          margin-top .5rem
          width 3.2rem
          &:nth-child(odd)
            width 7rem
          img
            display block
          a
            float left
            background-color #ccc
            &:hover
              background-color #2a97e0
        img
          height 1.25rem
        .tooltip-qrcode
          width 120px
          height 125px
          background url('/public/solutions/qrcode-tooltip.png') no-repeat center top
          background-size contain
          position absolute
          bottom 1.2em
          left 50%
          margin-left -60px
          transition .2s
          opacity 0
          transform scale(.1)
          transform-origin 50% 100%
          img
            width 100px
            height 100px
            margin 6px 10px
        .nav-item a:hover .tooltip-qrcode
          opacity 1
          transform scale(1)
          z-index 1
  .copyright
    background-color #2d3337
    text-align center
    font-size .6rem
    padding 1.5rem 0
    > *
      margin 0 .5rem
</style>
