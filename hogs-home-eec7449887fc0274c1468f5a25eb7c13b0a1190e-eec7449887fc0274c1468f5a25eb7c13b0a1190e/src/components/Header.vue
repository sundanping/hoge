<template>
  <div class="header" :class="{ dark: darkMenu }">
    <div class="container">
      <div class="logo">
        <router-link to="/home">
          <img src="~public/logo.png" alt="厚建官网">
        </router-link>
      </div>
      <div class="contact">
        <img src="~public/icon-tel.png">
        <span v-text="CompanyInfo.contact"></span>
      </div>
      <div class="nav">
        <template v-for="item in Menu">
          <div class="nav-item">
            <router-link :to="item.route" v-text="item.name" v-if="item.route"></router-link>
            <a :href="item.link" v-text="item.name" v-else-if="item.link"></a>
            <a href="#" v-scroll-to="item.anchor" v-text="item.name" v-else-if="item.anchor"></a>
            <span v-text="item.name" v-else></span>
            <div class="subnav" v-if="item.subMenu">
              <router-link class="nav-item" :to="subitem.route" v-text="subitem.name" v-for="subitem in item.subMenu" :key="subitem.name"></router-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-nav',
  mounted () {
    this.setMenuDark()
    window.addEventListener('scroll', this.setMenuDark)
  },
  data () {
    return {
      darkMenu: false
    }
  },
  computed: {
    CompanyInfo () {
      return this.$store.state.CompanyInfo
    },
    Menu () {
      return this.$store.state.Menu
    }
  },
  methods: {
    setMenuDark () {
      this.darkMenu = window.scrollY > 80
    },
  }
}
</script>

<style lang="stylus">
$nav-bg = rgb(50, 50, 50)
$nav-bg-alpha = rgba(50, 50, 50, .8)
$nav-color-hover = #2a97e0

.header
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  height 84px
  transition all .3s
  color #fff
  &:hover
  &.dark
    background-color $nav-bg
    background-color $nav-bg-alpha
  .logo
    float left
    margin-right 10px
    padding 11px 18px
    img
      width 136px
      height 49px
  .contact
    float right
    padding-right 15px
    margin-top 28px
    font-size 20px
    > *
      vertical-align middle
    img
      width 22px
      height 22px
      margin-right 4px
    &:hover img
      animation shake .15s linear 2
  .nav
    font-size 16px
    .nav-item
      position relative
      display inline-block
      margin 0 16px
      color #fff
      vertical-align middle
      transition all .2s
      cursor pointer
      > a
        display block
        padding 33px 16px 27px
        color #fff
        transition all .2s
      &:hover
      &.active
      a:hover
      a.active
        color $nav-color-hover
        .subnav
          visibility visible
          opacity 1
          transform none
  .subnav
    visibility hidden
    position absolute
    z-index -2
    background-color $nav-bg
    background-color $nav-bg-alpha
    top 84px
    opacity 0
    left 50%
    width 126px
    margin-left -63px
    padding 5px 0
    text-align center
    transform-origin 50% 0
    transform perspective(500px) rotateX(-15deg)
    transition all .2s
    .nav-item
      display block
      margin 0
      padding 0 15px
      line-height 54px
      white-space nowrap
      
@keyframes shake
  0%
    transform rotate(0)
  25%
    transform rotate(-30deg)
  75%
    transform rotate(30deg)
  100%
    transform rotate(0)
  
@media (max-width: 1200px)
  .header .nav .nav-item
    margin 0 10px
    .nav-item
      margin 0
      
</style>
