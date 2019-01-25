import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import ExchangeInfo from './views/ExchangeInfoView.vue'
import ColorScheme from './views/ColorSchemeView.vue'
import Logo from './views/LogoView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'exchangeInfo',
      component: ExchangeInfo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
