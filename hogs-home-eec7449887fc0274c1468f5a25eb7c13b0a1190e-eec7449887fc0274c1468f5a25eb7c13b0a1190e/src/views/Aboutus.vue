<template>
  <div class="page-inner">
    <top-banner :options="banner"></top-banner>
    <section class="aboutus-section aboutus-part-1">
      <div class="container">
        <div class="headline">
          <h2>The choice of how to change</h2>
          <h3>创变之选</h3>
        </div>
        <div class="figure">
          <img src="public/aboutus/aboutus-figure-1.jpg">
        </div>
        <div class="content">
          <h4>厚建软件成立于2004年，是国内顶级的媒体产品、技术及运营服务提供商。</h4>
          <p class="text-color-gray text-indent-paragraph">作为具有前瞻性的行业领袖，厚建扎根于媒体领域，遵循其传播规律的同时，也推动着它的变革与发展。厚建始终秉承着“创变之选”的理念，研发了大量拥有自主知识产权的软件产品，覆盖媒体转型的全部生态环境，成为中国新媒体领域的首家全产业链产品提供商。
          <p class="text-color-gray text-indent-paragraph">经过10余年的行业积淀，厚建软件现已覆盖30个省及直辖市，拥有行业客户300余家，其中媒体客户达200余家，市场占有率稳居第一。</p>
        </div>
      </div>
    </section>
    <section class="aboutus-section aboutus-part-2 light-bg">
      <div class="container">
        <div class="content text-align-center">
          <h3 class="text-color-red">创新：</h3>
          <p>我们始终保持着创新能力<br>以先进的理念和技术领先于行业<br>驱动着行业持续向前发展</p>
          <div class="dash transform-rotate-90"></div>
          <div class="figure"><img src="public/aboutus/aboutus-figure-2-1.jpg" width="279"></div>
        </div>
        <div class="content">
          <h3 class="text-color-red">变革：</h3>
          <div class="box">
            <p>我们一直走在媒体变革的技术最前沿<br>独创性构建了可提供支撑运营服务的生态型产品体系</p>
          </div>
          <div class="box-white">
            <p>我们一直走在媒体变革的技术最前沿<br>独创性构建了可提供支撑运营服务的生态型产品体系</p>
          </div>
          <div class="dash"></div>
        </div>
        <div class="figures">
          <div class="figure"><img src="public/aboutus/aboutus-figure-2-2.jpg" width="550"></div>
          <div class="figure"><img src="public/aboutus/aboutus-figure-2-3.jpg" width="526"></div>
          <div class="text transform-rotate-90">innovation & change</div>
        </div>
      </div>
    </section>
    <section class="aboutus-section aboutus-part-3">
      <div class="container">
        <div class="headline">
          <h2>History</h2>
          <h3>发展历程</h3>
        </div>
        <div class="figure"><img src="public/aboutus/aboutus-figure-3.jpg"></div>
        <div class="timeline">
          <ul>
            <li v-for="year in courseTimeline" :key="year.year">
              <span class="timeline-time" v-text="`${year.year}年`"></span>
              <p class="timeline-content" v-text="year.text"></p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="aboutus-section aboutus-part-4 light-bg">
      <div class="container">
        <div class="headline">
          <h2>Awards</h2>
          <h3>奖项</h3>
        </div>
        <div class="headline-brief">
          <p>中国广播电视设备工业协会科技创新奖，从2006年经国家科技部批准开始启动以来，已连续举办了十届。十年来，<br>奖项的设立和评定工作得到了科技部、工信部、广电总局等有关部门领导的大力支持与帮助，得到了业内企业的肯定和支持，同时也受到了新闻界朋友的深切关注。</p>
        </div>
        <div class="award figure-left">
          <div class="figure"><img src="public/aboutus/aboutus-figure-4-1.jpg" width="100%"></div>
          <div class="content">
            <h4>2016年广播电视科技创新产品奖</h4>
            <p class="text-color-gray">MXU以标准化、系统化、模块化、快速化为目标，灵活融合媒体平台，<br>其中包含App终端、手机站、WEB站等，创新特点就是将微信公众号、微博官号等功能统一纳入，实现统一管理、平台化运营。</p>
            <div class="dash"></div>
            <div class="labels">
              <span class="label">统一管理后台</span>
              <span class="label">全终端表现覆盖</span>
              <span class="label">混合云架构部署</span>
              <span class="label">高效的实施保障</span>
            </div>
          </div>
        </div>
        <div class="award figure-right">
          <div class="figure"><img src="public/aboutus/aboutus-figure-4-2.jpg" width="100%"></div>
          <div class="content">
            <h4>2016年广播电视科技创新企业奖</h4>
            <p class="text-color-gray">2016年以来自主研发了“MXU融合媒体运营平台”、“阿米微运营”等创新产品，<br>以其稳定的系统和特色化运营管理模式，帮助融合媒体的发展和建设要求。</p>
            <div class="dash"></div>
            <div class="labels">
              <span class="label">创新产品</span>
              <span class="label">创新项目</span>
              <span class="label">创新技术</span>
            </div>
          </div>
        </div>
        <div class="award award-3 figure-left">
          <div class="figure"><img src="public/aboutus/aboutus-figure-4-3.jpg" width="100%"></div>
          <div class="content">
            <h4>中国电影电视技术学会科学技术奖</h4>
            <p class="text-color-gray">坚持尊重知识、尊重人才的方针，坚持公平、公正的原则，评审程序科学、规范，<br>在鼓励影视科技工作者自主创新，勇攀科技高峰，促进影视科技人才成长，促进我国影视科技可持续发展。</p>
            <div class="dash"></div>
            <div class="labels">
              <span class="label">立足民生服务</span>
              <span class="label">便捷百姓生活</span>
              <span class="label">实行广电+战略</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="aboutus-section aboutus-part-5">
      <div class="container">
        <div class="headline">
          <h2>Concept</h2>
          <h3>产品理念</h3>
        </div>
        <div class="headline-brief">
          <p>厚建强调产品本身应具有的变革性，为行业发展注入新的生命力。保障用户能够最大限度地利用新技术，享受新媒体化带来的最大化价值。</p>
        </div>
        <div class="concepts">
          <div class="concept">
            <h3>弹性云计算</h3>
            <p class="text-color-muted">云计算为用户提供了越来越多的业务灵活性，用户直接通过Web浏览器，在云计算平台上快速部署和管理自己的应用程序，并设置访问权限。可以根据需求随时增加、扩展或者缩减计算能力，最大化地利用资源，节省运营成本。</p>
          </div>
          <div class="concept">
            <h3>完善用户体验</h3>
            <p class="text-color-muted">深入了解用户对产品的使用方式与操作习惯，找准用户痛点，将用户体验做到极致。以产品使用的便利性为设计原点，置身用户应用环境，从细节处着手，挖掘需求完善用户体验，强化产品的易用性。化繁为简，从而大大提高工作效率。</p>
          </div>
          <div class="concept">
            <h3>快速迭代升级</h3>
            <p class="text-color-muted">在产品开发过程中，厚建聆听用户的声音、尊重用户的选择，采用迭代式开发策略。根据用户变化的需求，不断地细化与升级产品，从而保障了用户在产品功能上的应用最大化，以及享受到更多的附加价值。</p>
          </div>
          <div class="concept">
            <h3>服务客户的客户</h3>
            <p class="text-color-muted">不同于市场同类产品，厚建产品不是以简单满足直接用户需求为目标，而是将用户的用户作为最终服务对象。了解与分析他们的使用习惯，以他们为立脚点，挖掘最终用户的深层次需求，以完美的用户体验提升客户粘合度。</p>
          </div>
          <div class="figure"><img src="public/aboutus/aboutus-figure-5-1.jpg" width="100%"></div>
          <div class="figure"><img src="public/aboutus/aboutus-figure-5-2.jpg" width="100%"></div>
          <div class="figure"><img src="public/aboutus/aboutus-figure-5-3.jpg" width="100%"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setTitle } from '../util/title'
import TopBanner from '../components/TopBanner.vue'

export default {
  name: 'aboutus',
  title: '公司介绍',
  components: {
    TopBanner,
  },
  data () {
    return {
      banner: {
        height: 644,
        headline: '专·业',
        subHeadlines: [
          '我们把专业 责任变成自己的代名词，',
          '致力于成为最具价值的媒体产品与技术提供商'
        ],
        headlineTop: '26%',
        headlineLeft: '2%',
        bgImage: require('public/aboutus/aboutus-hero.jpg'),
      },
      courseTimeline: [
        { year: 2017,
          text: '全面支撑人民日报“中央厨房”建设，媒体再造战略启航', },
        { year: 2016,
          text: '发布MXU融合媒体运营平台，启动融合播发平台', },
        { year: 2015,
          text: '媒体融合大潮下，构建两微一端融合生态圈', },
        { year: 2014,
          text: '发布厚建云服务产品，启动厚建云平台建设', },
        { year: 2013,
          text: '发布智慧城市移动端产品，引领传媒进入移动时代', },
        { year: 2012,
          text: '发布M2O新媒体综合运营平台，实现跨平台多终端统一管控', },
        { year: 2009,
          text: '发布全媒体记者发稿系统等产品，开始深入媒体生产环节', },
        { year: 2007,
          text: '领先提出三屏互动、台网互动的全平台解决方案', },
        { year: 2005,
          text: '支撑国内首批网络电视台用户上线', },
        { year: 2004,
          text: '门户网时代，发布网站内容管理颠覆性产品LivCMS', },
      ]
    }
  },
}
</script>

<style lang="stylus">
  .aboutus-section
    padding 100px 0
    line-height 1.8
    .container
      width 1164px
    p
      font-size .8rem
      margin .4rem 0
      line-height 1.7
      text-align justify
    h4
      font-size 1.3rem
    .dash
      width 3rem
      height .2rem
      margin 1.5rem 0
      background-color #f7c231
    .figure img
      border-radius .6rem
      display block
      
  .aboutus-part-1
    .headline
      margin-bottom 4rem
      h2
        font-size 1.75rem
    .figure
      float left
      img
        width 580px
    .content
      margin-left 640px
      padding-top 1rem
      h4
        margin .2rem 0 1rem
      p
        font-size .85rem
  .aboutus-part-2
    .content
      &:nth-child(1)
        float left
        width 285px
        p
          text-align center
        .dash
          position relative
          left 50%
          margin 3rem 0 3rem -1.6rem
      &:nth-child(2)
        position absolute
        z-index 2
        width 755px
        right 0
        top 500px
        p
          margin 0
          white-space nowrap
        .box
          height 3.6em
          width 220px
          overflow hidden
        .box-white
          color #fff
          margin-top -3.6em
          margin-left 220px
          overflow hidden
          p
            margin-left -220px
      h3
        font-size 1.3rem
    .figures
      float right
      position relative
      width 755px
      .figure
        position absolute
        z-index 2
        &:nth-child(2)
          z-index 1
          left 220px
          top 240px
      .text
        position absolute
        transform-origin 0 0
        white-space nowrap
        left 585px
        color #b0923f
        font-size .95rem
        font-weight 500
        line-height 1
  .aboutus-part-3
    .headline
    .figure img
      width 500px
    .headline
      margin-bottom 3.5rem
    .timeline
      position absolute
      top -100px
      bottom -100px
      right 0
      width 450px
      border-left 2px solid #e1e1e1
      ul
        margin-top 104px
        padding-left 0
        list-style none
        li
          position relative
          margin 0
          white-space nowrap
          line-height 2.8rem
          &:before
            content ''
            display block
            position absolute
            width 1rem
            height 1rem
            border-radius 50%
            background-color #c4ae87
            left -.55rem
            top 50%
            margin-top -.5rem
          span, p
            vertical-align middle
            display inline-block
          .timeline-time
            font-size 1.3rem
            margin 0 3rem 0 -4.5em
          .timeline-content
            font-size .8rem
            color #999
            margin 0
  .aboutus-part-4
    .headline
      h2
        position relative
        margin-bottom 0
        small
          position absolute
          display inline-block
          font-size .5rem
          font-weight 400
          top 50%
          transform translateY(-50%) rotate(90deg)
    .award
      min-height 262px
      margin-top 100px
      &:not(:last-child)
        border-bottom 1px solid #c6c6c6
        padding-bottom 100px
      h4
        margin-bottom .8rem
      .figure
        width 390px
      .dash
        background-color #333
        margin-bottom 2rem
      .label
        display inline-block
        border 1px solid #333
        border-radius .2rem
        color #333
        line-height 2
        padding 0 1rem
        margin-right 1rem
        font-size .8rem
      &.figure-left
        padding-left 445px
        .figure
          float left
          margin-left -445px
      &.figure-right
        padding-right 445px
        .figure
          float right
          margin-right -445px
      &:after
        content ''
        display block
        height 0
        clear both
      &.award-3
        padding-left 415px
        .figure
          width 362px
          margin-left -415px
        .content
          padding-top 10px
  .aboutus-part-5
    height 1080px
    .headline
      text-align center
      h2
        margin-bottom 0
      h3
        margin 0
    .concepts
      margin-top 4rem
      position relative
      .figure
        position absolute
        z-index 1
        &:nth-child(5)
          width 180px
          top 0
          right 0
        &:nth-child(6)
          width 315px
          top 193px
          left 446px
        &:nth-child(7)
          width 180px
          top 491px
          left 0
      .concept
        position absolute
        z-index 2
        h3
          margin 1rem 0
        p
          letter-spacing -.05rem
        &:nth-child(1)
          width 954px
          top -20px
          left 0
        &:nth-child(2)
          width 422px
          top 190px
          left 0
          h3
            text-align right
        &:nth-child(3)
          width 475px
          top 320px
          right 0
        &:nth-child(4)
          width 954px
          top 553px
          left 210px
          
</style>
