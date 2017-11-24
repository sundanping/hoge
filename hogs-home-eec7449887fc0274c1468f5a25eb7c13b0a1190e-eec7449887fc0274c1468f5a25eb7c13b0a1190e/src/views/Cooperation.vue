<template>
  <div class="page-inner">
    <top-banner :options="banner"></top-banner>
    <section class="cooperation-section cooperation-address">
      <div class="container">
        <div class="headline">
          <h2>Direct selling</h2>
          <h3>直销网络</h3>
        </div>
        <div class="network-list">
          <div class="network-item" v-for="item in addresses">
            <div class="name"><i class="iconfont"></i>{{item.name}}</div>
            <p class="address" v-text="item.address"></p>
            <p class="contact text-color-muted" v-text="item.contact"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="cooperation-section cooperation-address">
      <div class="container">
        <div class="headline">
          <h2>Distribution</h2>
          <h3>渠道网络</h3>
        </div>
        <div class="network-title">
          <h3>渠道管理中心</h3>
        </div>
        <div class="network-list">
          <div class="network-item" v-for="item in channels">
            <div class="name"><i class="iconfont"></i>{{item.name}}</div>
            <p class="address" v-text="item.address"></p>
            <p class="contact text-color-muted" v-text="item.contact"></p>
          </div>
        </div>
        <!-- <div class="network-title">
          <h3>授权经销商</h3>
        </div>
        <div class="network-list">
          <div class="network-item" v-for="item in dealers">
            <div class="name"><i class="iconfont"></i>{{item.name}}</div>
            <p class="address" v-text="item.address"></p>
            <p class="contact text-color-muted" v-text="item.contact"></p>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import { setTitle } from '../util/title'
import TopBanner from '../components/TopBanner.vue'

export default {
  name: 'cooperation',
  title: '商务合作',
  components: {
    TopBanner,
  },
  data () {
    return {
      banner: {
        height: 644,
        headline: '共·赢',
        subHeadlines: [
          '一起奔跑 才能同赢未来',
          '厚建愿与各个领域企业诚挚合作 请致电联系或来访考察'
        ],
        headlineTop: '29%',
        headlineLeft: '3%',
        bgImage: require('public/cooperation/cooperation-hero.jpg'),
      },
      addresses: [
        {
          name: '南京总部',
          address: '江苏省南京市雨花台区安德门大街57号楚翘城3号楼9楼',
          contact: '400-0012-000'
        },
        {
          name: '北京分部',
          address: '北京市东城区东四十条甲22号 南新仓商务大厦A座1012',
          contact: '400-0012-000 转 9333'
        },
        {
          name: '广州分部',
          address: '广州市番禺区迎宾路 五洲城商务中心 C座6006',
          contact: '020-85528033'
        },
      ],
      channels: [
        {
          name: '北京渠道管理中心',
          address: '北京市东城区东四十条甲22号 南新仓商务大厦A座1012',
          contact: '138-1010-8243'
        },
        {
          name: '南京渠道管理中心',
          address: '江苏省南京市雨花台区安德门大街57号楚翘城3号楼9楼',
          contact: '134-0582-0700 / 138-1389-1241'
        },
      ],
      dealers: [
        {
          name: '合肥天维电子技术有限公司',
          address: '合肥金寨路327号新鸿安大厦1504室',
          contact: '177-5510-0760'
        },
        {
          name: '南京新众成科技开发中心',
          address: '南京市珠江路523号东方大厦五楼东半层',
          contact: '159-9621-9997 / 139-5182-5275'
        },
        {
          name: '江苏达信电子系统工程有限公司',
          address: '南京市秦淮区菱角市66号',
          contact: '137-7641-8230'
        },
        {
          name: '南京科硕电子有限公司',
          address: '江苏南京市玄武区南京市珠江路222号长发科技大厦7楼B',
          contact: '025-83197193'
        },
      ],
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  .cooperation-section
    margin 100px 0
    .headline
      margin-bottom 4rem
      border-bottom 1px #eee solid
      &:after
        margin-bottom 0
    .network-title h3
      padding 0 1%
      font-size 1.3rem
      &:after
        content ''
        display block
        width 3rem
        height .2rem
        margin 1rem 0
        background-color #f7c231
    .network-list
      display flex
      flex-wrap wrap
      margin 2.3rem -1% 0
    .network-item
      float left
      flex-shrink 0
      width 29.33333%
      margin 0 2% 3rem
      .name
        font-size 1rem
        height 2.9rem
        line-height 2.9rem
        padding 0 1rem
        border-radius .5rem
        background-color #f9f9f9
        white-space nowrap
        .iconfont:before
          font-size 1rem
          color #1aa8de
          content '\e613'
          margin-right .8rem
      p
        font-size .8rem
    

</style>
