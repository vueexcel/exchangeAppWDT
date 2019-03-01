import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import ExchangeInfo from "./views/ExchangeInfo.vue";
import Logo from "./views/Logo.vue";
import ColorScheme from "./views/ColorScheme.vue";
import Cognito from "./views/Cognito.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "exchangeInfo",
      component: ExchangeInfo
    },

    {
      path: "/logo",
      name: "logo",
      component: Logo
    },
    {
      path: "/colorScheme",
      name: "colorScheme",
      component: ColorScheme
    },
    {
      path: "/cognito",
      name: "cognito",
      component: Cognito
    }
  ]
});
router.beforeEach((to, from, next) => {
  // ...
  // if (!localStorage.getItem('USER') && to.path !== '/') {
  //   next('/')
  // }
  // if (localStorage.getItem('USER') && to.path === '/' && from.path === '/') {
  //   next('/exchangeInfo')
  // }
  next();
});

export default router;
