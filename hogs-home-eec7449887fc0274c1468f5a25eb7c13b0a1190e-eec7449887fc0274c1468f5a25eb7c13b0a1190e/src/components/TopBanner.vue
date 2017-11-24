<template>
  <div class="top-banner" :style="{
    backgroundColor: options.bgColor || '#363d41',
    backgroundImage: options.bgImage ? `url(${options.bgImage})` : 'none'
  }">
    <div class="container" :style="{ height: options.height ? (options.height + 'px') : 'auto' }">
      <div class="banner-headline" :style="{ top: options.headlineTop || '33%', left: options.headlineLeft || '8%' }">
        <transition name="slide-right-delay">
          <h2 class="headline-main" v-html="options.headline" v-show="pageShown" :style="{ fontSize: `${options.height / 8}px` }"></h2>
        </transition>
        <div v-if="options.subHeadlines">
          <transition-group tag="div" name="slide-left-delay" class="headline-sub" v-if="options.subHeadlines.length > 1">
            <p v-for="(text, index) in options.subHeadlines" :key="index" v-text="text" v-show="pageShown"></p>
          </transition-group>
          <div class="headline-sub" v-else>
            <transition name="slide-left">
              <p v-show="pageShown" v-text="options.subHeadlines[0]"></p>
            </transition>
          </div>
        </div>
      </div>
      <transition name="slide-left">
        <div class="banner-image" v-show="pageShown" :style="{ top: (options.height - options.imageHeight) / 2 + 30 + 'px' }">
          <img :src="options.image" :style="{ height: options.imageHeight + 'px' }" v-if="options.image">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-banner',
  mounted () {
    setTimeout(() => {
      this.pageShown = true
    })
  },
  data () {
    return {
      pageShown: false
    }
  },
  props: {
    options: Object
  },
}
</script>

<style lang="stylus">
.top-banner
  background no-repeat center top #333
  background-size cover
  .banner-headline
    position absolute
    left 8%
    top 33%
    color #fff
    text-shadow 0 0 10px rgba(0, 0, 0, .3)
    .headline-main
      font-size 2rem
      font-weight 400
      margin: 10px 0
    .headline-sub p
      font-size 1rem
      font-weight 200
      margin: 5px 0
      &:nth-child(1)
        transition-delay .8s
      &:nth-child(2)
        transition-delay .95s
  .banner-image
    position absolute
    right 8%
</style>
