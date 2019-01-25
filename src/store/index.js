import Vue from 'vue'
import Vuex from 'vuex'
import attachCognitoModule from '@vuetify/vuex-cognito-module' //Vuetify AWScognito 
import headers from './modules/headers'
import login from './modules/login'
import LeftMenu from './modules/LeftMenu'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const debug = process.env.Node_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    headers,
    login,
    LeftMenu
  },
  strict: debug,
  plugins: [createPersistedState()]

})

// attachCognitoModule(store, {
//   UserPoolId: 'your-data-here',
//   IdentityPoolId: 'your-data-here',
//   ClientId: 'your-data-here',
//   Region: 'your-data-here'
// }, 'cognito')

export default store
