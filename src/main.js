// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import StarRating from 'vue-star-rating'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import fa from 'fontawesome-vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import CreateNewJob from './pages/CreateNewJob.vue'
import JobPostingPage from './pages/JobPostingPage.vue'
import ExchangeInfoPage from './pages/ExchangeInfoPage.vue'
import TeamMemberPage from './pages/TeamMemberPage.vue'
import ClientCandidates from './pages/ClientCandidates.vue'
import Logo from './pages/Logo.vue'
import ExchangeInfo from './components/ExchangeInfoDetails.vue'
import CreateNewUser from './pages/CreateNewUser.vue'
import ColorScheme from './pages/ColorSchemePage.vue'
import 'font-awesome/css/font-awesome.css'
import store from './store'


import "vue-loaders/dist/vue-loaders.css";
import * as VueLoaders from "vue-loaders";

Vue.use(VueLoaders);
Vue.use(fa)
Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.component('star-rating', StarRating)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Login},
  {path: '/home', component: Home},
  {path: '/createNewJob', component: CreateNewJob},
  {path: '/jobPostingPage', component: JobPostingPage},
  {path: '/teamMemberPage', component: TeamMemberPage},
  {path: '/clientCandidates', component: ClientCandidates},
  // {path: '/logo', component: Logo},
  // {path: '/exchangeInfoPage', component: ExchangeInfo},

  //-------- exchange info routes --------------->
  {path: '/createNewUser', component: CreateNewUser, redirect: { path: '/createNewUser/exchangeInfo' }, children: [
    {
      path: 'exchangeInfo',
      component: ExchangeInfo
    },
    {
    path: 'logo',
    component: Logo
  },
    {
    path: 'colorScheme',
    component: ColorScheme
  },
]}
]
const router = new VueRouter({
  mode: 'history',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  store,
  template: '<App/>'
})
