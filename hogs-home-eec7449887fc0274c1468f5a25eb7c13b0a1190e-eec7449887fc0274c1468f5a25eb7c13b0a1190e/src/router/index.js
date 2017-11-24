import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('../views/Home.vue')
const Solution = () => import('../views/Solution.vue')
const Aboutus = () => import('../views/Aboutus.vue')
const Customers = () => import('../views/Customers.vue')
const Cooperation = () => import('../views/Cooperation.vue')
const Joinus = () => import('../views/Joinus.vue')

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    } else {
    // check if any matched route config has meta that requires scrolling to top
    // if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export function createRouter () {
  const router = new Router({
    mode: 'history',
    scrollBehavior,
    routes: [
      { path: '/home', component: Home },
      { path: '/solutions/media', name: 'SolutionMedia', component: Solution },
      { path: '/solutions/mobile', name: 'SolutionMobile', component: Solution },
      { path: '/solutions/mixin', name: 'SolutionMixin', component: Solution },
      { path: '/solutions/operation', name: 'SolutionOperation', component: Solution },
      { path: '/aboutus', component: Aboutus },
      { path: '/customers', component: Customers },
      { path: '/joinus', component: Joinus },
      { path: '/cooperation', component: Cooperation },
      { path: '/', redirect: '/home' },
      { path: '/corp', redirect: '/aboutus' },
      { path: '/corp/team', redirect: '/joinus' },
      { path: '/team', redirect: '/joinus' },
    ]
  })
  return router
}
