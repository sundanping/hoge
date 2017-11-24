import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      CompanyInfo: {
        name: '南京厚建软件有限责任公司',
        shortName: '厚建',
        shortNameEn: 'Hoge',
        contact: '400-0012-000',
        beian: '苏ICP备13020699号-2'
      },
      Menu: [
        {
          name: '解决方案',
          anchor: '#section-solutions',
          subMenu: [
            {
              name: '媒体解决方案',
              route: '/solutions/media'
            },
            {
              name: '移动解决方案',
              route: '/solutions/mobile'
            },
            {
              name: '融合解决方案',
              route: '/solutions/mixin'
            },
            {
              name: '运营解决方案',
              route: '/solutions/operation'
            }
          ]
        },
        {
          name: '公司介绍',
          route: '/aboutus'
        },
        {
          name: '行业客户',
          route: '/customers',
        },
        {
          name: '加入我们',
          route: '/joinus'
        },
        {
          name: '商务合作',
          route: '/cooperation'
        }
      ],
      FootMenu: [
        {
          name: '关于',
          subMenu: [
            {
              name: '商务合作',
              route: '/cooperation'
            },
            {
              name: '公司新闻',
              route: '/home#section-news'
            },
            {
              name: '厚建招聘',
              route: '/joinus'
            },
            {
              name: '关于厚建',
              route: '/aboutus'
            },
          ]
        },
        {
          name: '服务',
          subMenu: [
            {
              name: '媒体解决方案',
              route: '/solutions/media'
            },
            {
              name: '移动解决方案',
              route: '/solutions/mobile'
            },
            {
              name: '融合解决方案',
              route: '/solutions/mixin'
            },
            {
              name: '运营解决方案',
              route: '/solutions/operation'
            }
          ]
        },
        {
          name: '联系',
          subMenu: [
            {
              name: '400-0012-000',
            },
            {
              name: 'hoge@hoge.cn',
              link: 'mailto:hoge@hoge.cn'
            },
            {
              name: '微博',
              link: 'http://weibo.com/hogesoft'
            },
            {
              name: '微信',
              qrcode: require('public/wechat-qrcode.jpg')
            }
          ]
        },
        {
          name: '厚建出品',
          subMenu: [
            {
              name: '叮当',
              image: require('public/logo-dingdone-hollow.png'),
              link: 'http://dingdone.com/'
            },
            {
              name: '秀赞',
              image: require('public/logo-xiuzan-hollow.png'),
              link: 'http://xiuzan.com/'
            },
            // {
            //   name: '有赞',
            //   image: require('public/logo-youzan-hollow.png'),
            //   link: 'http://youzan.com/'
            // },
            {
              name: '短书',
              image: require('public/logo-duanshu-hollow.png'),
              link: 'http://duanshu.com/'
            }
          ]
        }
      ],

      Lists: {
        News: [],
        CasesMedia: [],
        CasesMobile: [],
        CasesMixin: [],
        CasesOperation: [],
        TeamsEvents: [],
        CustomersTypical: [],
        CustomersMedia: [],
        CustomersGovCorp: [],
      },
      Categories: {
        Joinus: [],
      }
    },
    actions,
    mutations,
    getters
  })
}
