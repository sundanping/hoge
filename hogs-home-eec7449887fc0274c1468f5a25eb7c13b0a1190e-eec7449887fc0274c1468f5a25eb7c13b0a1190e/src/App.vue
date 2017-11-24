<template>
  <div id="app">
    <header-nav></header-nav>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderNav from './components/Header.vue'
import FooterNav from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HeaderNav,
    FooterNav
  }
}
</script>

<style lang="stylus">
@import "styles/base.styl"
@import "styles/transition.styl"

</style>
