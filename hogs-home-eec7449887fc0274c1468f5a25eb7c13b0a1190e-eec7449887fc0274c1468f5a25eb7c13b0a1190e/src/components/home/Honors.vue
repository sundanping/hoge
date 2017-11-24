<template>
  <div>
    <div class="container">
      <div class="headline">
        <h2 v-text="title_en"></h2>
        <h3 v-text="title"></h3>
      </div>
      <div class="honors-list">
        <div class="honor-item" v-for="item in data" :key="item.id">
          <div class="honor-inner">
            <div class="honor-figure">
              <img :src="item.image">
            </div>
            <div class="honor-title" v-html="item.title"></div>
            <div class="honor-desc" v-text="item.desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'honors',
  data () {
    return {
      title: '公司荣誉',
      title_en: 'Honors',
      data: [
        {
          id: 1,
          desc: '国科奖社第0158号',
          title: '2016年广播电视科技创新企业奖<br>中国广播电视设备工业协会',
          image: require('public/trophy-1.png'),
        },
        {
          id: 2,
          desc: '证字号16040',
          title: '2016年广播电视科技创新产品奖<br>中国广播电视设备工业协会',
          image: require('public/trophy-2.png'),
        },
        {
          id: 3,
          desc: '国科奖社第0073号',
          title: '第九届中国电影电视技术学会<br>科学技术奖',
          image: require('public/trophy-3.png'),
        },
      ],
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.honors-list
  margin 0 -2.3%
.honor-item
  position relative
  top 0
  float left
  width 27.33333%
  margin 0 3% 0
  text-align center
  transition .5s
  .honor-inner
    border 1px solid #e0e0e0
    box-sizing border-box
    background-color #fff
    padding 2rem 0
  .honor-figure
    position relative
    width 40%
    padding-top 40%
    margin 0 auto
    transition transform .2s ease-in
    img
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      object-fit cover
  .honor-title
    font-size .9rem
    margin-top 1.2rem
  .honor-desc
    color #999
    font-size .7rem
    margin-top .7rem
  &:hover
    top -.1rem
    box-shadow 0 1px 3px rgba(155, 155, 155, .35)
    color #ffd54f
    .honor-figure
      transform scale(1.05)
</style>
