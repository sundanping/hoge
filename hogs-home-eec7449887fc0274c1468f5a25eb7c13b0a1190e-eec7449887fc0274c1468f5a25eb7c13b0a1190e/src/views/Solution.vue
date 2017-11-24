<template>
  <div class="page-inner">
    <top-banner :options="solutionData.banner"></top-banner>
    <section class="container">
      <div class="solution-section" v-for="(item, index) in solutionData.sections" :key="item.id" :class="'solution-' + index">
        <div class="main">
          <h3 class="title"><span v-text="item.title"></span></h3>
          <div class="content" v-html="item.content"></div>
          <div class="link-detail" v-if="item.qrcode || item.link">
            <a :href="item.link || 'javascript:;'" target="_blank"><span v-text="item.linkText || '了解案例详情'"></span><icon name="angle-right" scale="1"></icon></a>
            <div class="link-qrcode" v-if="item.qrcode">
              <img :src="require('public/solutions/' + solutionData.flag + '-' + item.id + '-qrcode.jpg')" class="qrcode">
            </div>
          </div>
        </div>
        <img :src="require('public/solutions/' + solutionData.flag + '-' + item.id + '.jpg')" class="image" :style="{ height: (item.imgHeight || 350) + 'px' }">
      </div>
    </section>
    <section class="solution-cases-section">
      <div class="container">
        <div id="solution-cases" class="solution-cases-list" :class="cases.transitionType">
          <div class="case-item" v-for="(item, index) in casesList" :key="item.id">
              <img :src="item.image">
              <span v-text="item.subtitle"></span>
              <div class="case-qrcode">
                <img :src="item.images[0]" v-if="solutionData.flag === 'mobile'">
                <a :href="item.link" target="_blank" v-else>了解详情</a>
              </div>
          </div>
          <div class="case-item" :key="999999" v-if="casesList.length < cases.count">
            <a><i class="iconfont icon-more"></i>更多</a>
          </div>
        </div>
        <!-- <div class="list-more-button">
          <a href="#">查看全部</a>
        </div> -->
        <div class="navigation-pager">
          <button class="pager-button pager-prev" @click="fetchPagedList(-1)" :disabled="cases.page <= 0"><icon name="angle-left" scale="3"></icon></button>
          <button class="pager-button pager-next" @click="fetchPagedList(1)" :disabled="cases.page >= cases.maxPage && cases.maxPage !== null"><icon name="angle-right" scale="3"></icon></button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setTitle } from '../util/title'
import TopBanner from '../components/TopBanner.vue'
import ScrollTo from 'vue-scrollto'

const SolutionConfig = {
  SolutionMedia: {
    flag: 'media',
    banner: {
      height: 644,
      headline: '媒体解决方案',
      subHeadlines: [
        '主流门户网站、海量新闻网站、网络广播网站三大方向',
        '解决方案，全面覆盖广电媒体网站建设需求。'
      ],
      image: require('public/solutions/media-hero-img.png'),
      imageHeight: 210,
      bgColor: '#f4d161',
    },
    sections: [
      {
        id: 'portal',
        title: '门户网站',
        content: '厚建独有的魔力视图模块模板功能，帮助客户快速实现功能强大、内容丰富的各类门户网站、官方网站、企业网站的建设。广泛应用于各地主流网站、大型机构／集团官方网站建设等。',
        imgPosition: 'right',
        imgHeight: 300,
        // linkText: '太湖明珠网',
        // link: 'http://www.thmz.com/',
      },
      {
        id: 'nettv',
        title: '网络广播电视台',
        content: '根据《广电总局关于促进主流媒体发展网络广播电视台的意见》文件精神，厚建软件打造了满足广电媒体全面需求的解决方案，从图文视听等媒体核心内容管理入手，进行采编一体化媒体工作。多渠道发布以及数字化存储与管控，帮助各大传统广电互联网化，向新媒体时代迈进。',
        imgPosition: 'left',
        imgHeight: 280,
        // linkText: '海豚TV',
        // link: 'http://www.ahtv.cn/v/',
      },
      {
        id: 'news',
        title: '新闻网站',
        content: '面向报业系统，基于先进的云计算架构，稳定的技术后台支撑，有效支持多终端、多应用新闻网站建设，让电脑、手机、pad用户第一时间同步获取海量新闻信息，是各大报媒建立网站、扩展传播渠道的不二选择。',
        imgPosition: 'right',
        imgHeight: 280,
        // linkText: '中国江苏网',
        // link: 'http://www.jschina.com.cn/',
      },
    ],
    caseId: 56,
    caseListKey: 'CasesMedia',
  },
  SolutionMobile: {
    flag: 'mobile',
    banner: {
      height: 644,
      headline: '移动解决方案',
      subHeadlines: [
        '移动端媒体融合策略，地方手机台、国家智慧城市、',
        '小程序解决方案影响亿万人口城市生活。'
      ],
      image: require('public/solutions/mobile-hero-img.png'),
      imageHeight: 200,
      bgColor: '#81c784',
    },
    sections: [
      {
        id: 'shoujitai',
        title: '手机台',
        content: '随着手机网民数量的急速上升，我们全面进入移动手机时代。厚建手机电视台解决方案，以先进的流媒体技术以及多项专有技术，实现直播、点播、时移回看、即时互动以及个性化节目播出和管控，最大限度的确保广电媒体在移动化时代的主流地位。<br>目前拥有20+省台、100+地市台成功案例，覆盖全国50%以上的省市级官方手机台。',
        imgPosition: 'right',
        imgHeight: 350,
        // qrcode: 1
      },
      {
        id: 'smartcity',
        title: '智慧城市',
        content: '国家智慧城市战略的城市入口，智慧城市工程的最后100米。厚建独有的智慧城市APP应用，已经成功对接了60多座城市智慧生态系统，成熟推出了100多种应用模块，而用户根据所在城市的特色和需求，运营出千姿百态的信息化、智慧化的产品，直接影响3.2亿人的城市生活。',
        imgPosition: 'left',
        imgHeight: 360,
        // qrcode: 1
      },
      {
        id: 'miniapp',
        title: '小程序',
        content: '区别于市场上的其他小程序提供商，我们的小程序专为广电行业量身打造。鉴于广电媒体对于小程序的兼容性、流畅性有更高的需求，我们采用了原生程度的嵌入开发与生成，让连接通道更加快捷，表现形式更加多样化，并独创点播直播一体、电台直播、扫码进入直播等适用于媒体的功能模块。',
        imgPosition: 'right',
        imgHeight: 360,
        // qrcode: 1
      }
    ],
    caseId: 57,
    caseListKey: 'CasesMobile',
  },
  SolutionMixin: {
    flag: 'mixin',
    banner: {
      height: 644,
      headline: '融合解决方案',
      subHeadlines: [
        'MXU、M2O、阿米协同、阿米微运营为广电媒体融合',
        '发展保驾护航。'
      ],
      image: require('public/solutions/mixin-hero-img.png'),
      imageHeight: 200,
      bgColor: '#4fc3f7',
    },
    sections: [
      {
        id: 'mxu',
        title: 'MXU融合媒体运营平台',
        content: '<p class="features col2"><span>• 快速部署</span><span>• 7天交付</span><span>• 4大版本选择</span><span>• 性价比高</span></p><p>“MXU融合媒体运营平台”荣获中华人民共和国科学技术部颁发的<br>“中国广播电视设备工业协会2016年广播电视科技创新产品奖”</p><p>MXU平台以标准化、系列化、模块化、快速化为目标，更加快速、灵活地实现“App+网站+微信+微博”新媒体融合平台的综合表现形态，统一管理、全端分发，实现平台化运营的最终目标。</p>平台拥有4大标准化版本，不管是预算相对较少的县级台、报社，还是有大规模新媒体建设需求的省级媒体，都能找到适合自己的解决方案，快速实现包括“手机台、网络台、新闻客户端、智慧城市客户端以及政务类、媒体发布类和移动电商类专业化平台”项目的建设。',
        imgPosition: 'right',
        imgHeight: 384,
        // qrcode: 1
      },
      {
        id: 'm2o',
        title: 'M2O新媒体综合运营平台',
        content: '<p class="features col2"><span>• 跨行业应用</span><span>• 模块化拓展</span><span>• 全功能服务</span><span>• 纯定制实施</span></p><p>一个涵盖内容生产、管理、流转、发布、营销、运维等多方面的综合运营体系，拥有点播、直播、内容管理、网站发布4大系统，100+功能模块，将新媒体领域里的主流应用一网打尽，让网站、客户端的建立和管理更加直观可控，应对互联网的快速变化。平台可全面解决传统媒体对新媒体建设的需求，并以定制化特色著称，适用于各大对自身发展有明确目标、追求量身定制的媒体。</p>',
        imgPosition: 'left',
        imgHeight: 420,
      },
      {
        id: 'amiweiyunying',
        title: '阿米微运营',
        content: '<p class="features"><span>• 互 动 营 销 —— 继承了微信接口提供的所有功能</span><span>• 矩阵化管理 —— 多账号管理+资源管理+多级权限</span><span>• 第三方对接 —— 统计分析+统计报表</span></p><p>丰富的营销活动能力，对接其他第三方接口，微信公众号／微博第三方管理平台，能实现对多帐号绑定和权限管理，素材一键多发到多个公众号，平台数据统计及粉丝信息永久保存等，解决广电新媒体客户对内部多层级、大数量公众号进行统一部署和管理的难题。</p>',
        imgPosition: 'right',
        imgHeight: 337,
        linkText: '进入官网了解更多',
        link: 'http://weixin.cloud.hoge.cn/qd/main/login'
      },
      {
        id: 'amixietong',
        title: '阿米协同生产平台',
        content: '<p class="features col3"><span>• 即时沟通工具</span><span style="margin-left:7.33333%">• 移动化生产　　</span><span style="width:26%;">• 协同作业</span><span style="margin-left:7.33333%">• 资源共享和管理</span><span style="width:26%;">• 多端分发</span></p><p>跨行业快速融合解决方案，集内容生产、任务协同、人员沟通为一体的融合媒体交互平台。平台构建了一个基于人和人之间的闭环沟通系统，汇聚平台资源，共享内容，多端分发，并实现移动化生产以及立体式效果追踪。阿米协同生产平台，可以帮助媒体、校企、政府等部门机构，快速实现构建先进的“中央厨房”式生产运作平台，凭借着系统的高兼容性，实现平台和客户现有硬件设施与既有资源管理系统的高度融合与交互，低投入、快时效地实现生产效率的几何级提升。</p>',
        imgPosition: 'left',
        imgHeight: 420,
        linkText: '进入官网了解更多',
        link: 'http://team.hoge.cn/'
      }
    ],
    caseId: 58,
    caseListKey: 'CasesMixin',
  },
  SolutionOperation: {
    flag: 'operation',
    banner: {
      height: 644,
      headline: '运营解决方案',
      subHeadlines: [
        '打通渠道和信息闭塞的现象，使整个广电行业的运营发展',
        '能够做到技术与资源贯通，不断探索多元化产品。'
      ],
      image: require('public/solutions/operation-hero-img.png'),
      imageHeight: 210,
      bgColor: '#e57373',
    },
    sections: [
      {
        id: 'xingxiu',
        title: '星秀直播',
        content: '<p class="features">持续的礼物分成+具有活力的媒体生态</p>专为广电客户打造的互联网直播社区产品，利用内嵌模块的方式植入各地新媒体平台，支持独立管理运营。集合全国上百家媒体的主播人才优势，共享全国用户资源，自主管控资源内容。',
        imgPosition: 'right',
        imgHeight: 360,
      },
      {
        id: 'ads',
        title: '广告联盟',
        content: '<p class="features">平台主要收入来源广告</p>引进优质广告资源，帮助客户拓展盈利模式的平台。聚合多方资源，打造大品牌广告战略。合理利用联盟成员的各区域优势实现新媒体广告收益的最大化。',
        imgPosition: 'left',
        imgHeight: 360,
      },
      {
        id: 'shangou',
        title: '闪购联盟',
        content: '<p class="features">闪购不等于普通电商</p>一个跨地域产品联销的平台，通过联盟联销的运营方式精选高利润、高安全性的各地优质商品，由厚建提供统一宣传包装和完整的电商技术解决方案，最终共享平台销售的利润。',
        imgPosition: 'right',
        imgHeight: 325,
      },
      {
        id: 'training',
        title: '运营培训指导',
        content: '专业的运营团队，丰富详实的案例积累，大量成熟的运营方案。可以提供驻场服务、现场培训、集中会议、落地支撑、全案跟踪等等多种服务形式，帮助客户深层次地理解新媒体运营背后的逻辑和法则，聚合多方技术和资源，从底层进行生态贯通，探索多元化的运营模式。',
        imgPosition: 'left',
        imgHeight: 280,
      }
    ],
    caseId: 59,
    caseListKey: 'CasesOperation',
  },
}

export default {
  name: 'solution',
  title () {
    return this.solutionData.banner.headline
  },
  components: {
    TopBanner,
  },
  data () {
    return {
      solutionData: SolutionConfig[this.$route.name],
      banner: {},
      sections: [],
      cases: {
        page: 0,
        maxPage: null,
        count: 8,
        transitionType: '',
        transitionTime: 500
      },
    }
  },
  computed: {
    casesList () {
      return this.$store.state.Lists[this.solutionData.caseListKey].slice(this.cases.page * this.cases.count, (this.cases.page + 1) * this.cases.count)
    }
  },
  mounted () {
    this.$route.hash && ScrollTo.scrollTo(this.$route.hash, 500, { offset: -84 })
  },
  watch: {
    $route (val, oldVal) {
      if (val.name !== oldVal.name) {
        this.$set(this, 'solutionData', SolutionConfig[val.name])
        this.cases.page = 0
        this.cases.maxPage = null
        const { asyncData } = this.$options
        if (asyncData) {
          asyncData({
            store: this.$store,
            route: val
          })
        }
      }
    }
  },
  asyncData ({ store, route }) {
    const routeData = SolutionConfig[route.name]
    return store.dispatch('FETCH_LIST', {
      reset: true,
      type: routeData.caseListKey,
      catid: routeData.caseId,
      count: 8,
      imgSize: '200x200'
    })
  },
  methods: {
    fetchPagedList (diff) {
      const transition = {
        leave: diff > 0 ? 'leave-left' : 'leave-right',
        enter: diff > 0 ? 'enter-right' : 'enter-left'
      }
      let page = this.cases.page + diff
      page = page < 0 ? 0 : page

      const fetchSuccess = (res) => {
        this.cases.transitionType = transition.leave
        setTimeout(() => {
          this.cases.page = page
          this.cases.transitionType = transition.enter
        }, this.cases.transitionTime)
        if (res.length < this.cases.count) this.cases.maxPage = page
      }
      const list = this.$store.state.Lists[this.solutionData.caseListKey].slice(page * this.cases.count, (page + 1) * this.cases.count)
      if (list.length > 0) {
        fetchSuccess(list)
        return
      }
      this.$store.dispatch('FETCH_LIST', {
        type: this.solutionData.caseListKey,
        catid: this.solutionData.caseId,
        count: this.cases.count,
        page: page,
        imgSize: '200x200'
      }).then(res => {
        if (res.length > 0) {
          fetchSuccess(res)
        } else {
          this.cases.maxPage = this.cases.page
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  $solution-item-colors = #ffd54f,
                          #80c87f,
                          #4fc2f8,
                          #e57373

  .solution-section
    position relative
    padding 80px 0
    margin 0 18px
    border-bottom 1px solid #f1f1f1
    &:after
      content ''
      display block
      height 0
      clear both
    .main
      width 45%
      position relative
      z-index 2
      display inline-block
      .title
        font-size 1.3rem
        display inline-block
        span
          position relative
          z-index 2
          padding 0 .2rem
        &:after
          content ''
          display block
          margin 0 auto
          width 100%
          height .65rem
          transition .5s
          position relative
          z-index 1
          margin-top -.8rem
      .content
        font-size .8rem
        color #666
        line-height 1.8
      .features
        font-weight bold
        span
          display inline-block
          width 100%
        &.col2 span
          width 50%
        &.col3 span
          width 33.33333%
      .link-detail
        font-size .8rem
        margin-top 1rem
        position relative
        display inline-block
        a
          color #2a97e0
        svg
          position relative
          top .1rem
          left .3rem
        .link-qrcode
          width 120px
          height 125px
          background url('/public/solutions/qrcode-tooltip.png') no-repeat center top
          background-size contain
          position absolute
          bottom .8rem
          left 50%
          margin-left -60px
          transition .2s
          opacity 0
          img
            width 90px
            height 90px
            margin 11px 15px
        &:hover
          .link-qrcode
            opacity 1
            bottom 1.2rem
      .qrcode
        width 125px
        height 125px
        margin-top 1.4rem
    .image
      position relative
      z-index 1
      float right
      top 50%
    &:nth-child(even)
      text-align right
      .image
        float left
    for pair, i in $solution-item-colors
      &.solution-{i}
        .title:after
          background-color pair[0]
  
  .solution-cases-list
    display flex
    flex-wrap wrap
    padding 80px 0 40px
    margin 0 -3.8%
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
    .case-item
      position relative
      float left
      width 15%
      margin 0 5% 3rem
      padding 1.2rem 0
      height 7rem
      background-color #fff
      text-align center
      font-size .7rem
      overflow hidden
      img, .icon-more
        width 5rem
        height 5rem
        display block
        margin 0 auto 1rem
      .case-qrcode
        position absolute
        z-index 8
        top 0%
        left 0
        right 0
        bottom 2rem
        // background-color #000
        // background-color rgba(0, 0, 0, .3)
        background-color rgba(255, 255, 255, .95)
        padding .8rem 0
        opacity 0
        transform-origin 50% 100%
        transform perspective(500px) rotateX(30deg)
        transition all .2s ease-in
        a
          display inline-block
          margin-top 20%
          padding 0 1.5rem
          border-radius 1.2rem
          line-height 1.8rem
          color #2a97e0
          border 1px solid #2a97e0
          transition .2s
          &:hover
            color #fff
            background-color #2a97e0
      .icon-more
        padding-top 1rem
        height 4rem
        color #eaeaea
        font-size 2.1rem
        transition .2s
        &:before
          content '\e606'
      &:hover
        .case-qrcode
          top 0
          opacity 1
          transform none
      
  .solution-cases-section
    background-color #f9f9f9
    .list-more-button a
      display block
      text-align center
      margin -80px auto 50px
      width 6.3rem
      height 1.8rem
      font-size .7rem
      line-height 1.75rem
      border 1px solid #2a97e0
      color #2a97e0
      transition .5s
      &:hover
        background-color #2a97e0
        color #fff
    .navigation-pager
      .pager-button
        position absolute
        top 43%
        outline 0
        border none
        padding 0
        width 2.8rem
        height 2.8rem
        border-radius 50%
        background-color transparent
        color #ddd
        font-size 1.2rem
        cursor pointer
        transition .3s
        &:hover
          background-color rgba(100,100,100,.2)
          color #fff
        &:disabled
          color #fafafa
          background-color transparent
          cursor not-allowed
        &.pager-prev
          left -3rem
        &.pager-next
          right -3rem
        
  @media (max-width: 1200px)
    .solution-cases-section .navigation-pager .pager-button
      &.pager-prev
        left 1rem
      &.pager-next
        right 1rem
</style>
