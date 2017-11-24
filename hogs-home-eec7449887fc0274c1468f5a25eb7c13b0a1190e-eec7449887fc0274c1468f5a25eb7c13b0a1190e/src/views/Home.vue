<template>
  <div class="page-home">
    <home-carousel  id="section-carousel"  class="heros"></home-carousel>
    <home-solutions id="section-solutions" class="home-section light-bg"></home-solutions>
    <home-regions   id="section-regions"   class="home-section"></home-regions>
    <home-cases     id="section-cases"     class="home-section light-bg"></home-cases>
    <home-honors    id="section-honors"    class="home-section"></home-honors>
    <home-news      id="section-news"      class="home-section"></home-news>
  </div>
</template>

<script>
import ScrollTo from 'vue-scrollto'
import { setTitle } from '../util/title'
import HomeCarousel  from '../components/home/Carousel.vue'
import HomeSolutions from '../components/home/Solutions.vue'
import HomeRegions   from '../components/home/Regions.vue'
import HomeCases     from '../components/home/Cases.vue'
import HomeHonors    from '../components/home/Honors.vue'
import HomeNews      from '../components/home/News.vue'

export default {
  name: 'home',
  title: '顶级媒体产品、技术及运营服务提供商',
  components: {
    HomeCarousel,
    HomeSolutions,
    HomeRegions,
    HomeCases,
    HomeHonors,
    HomeNews
  },
  computed: {
  },
  mounted () {
    this.$route.hash && ScrollTo.scrollTo(this.$route.hash, 500, { offset: -84 })
  }
}
</script>

<style lang="stylus">
  .home-section
    position relative
    padding 4rem 0 5rem
    overflow hidden
    h2
      font-size 1.4rem
      text-align center
      margin .8rem 0
      font-weight 400
      position relative
      z-index 11
      &~div
        margin-top 2.3rem
        &:after
          content ''
          display table
          clear both
      
</style>
