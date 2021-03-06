import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import login from './modules/login'
import menu from './modules/menu'
import tarNav from './modules/tarNav'
Vue.use(Vuex)
export default new Vuex.Store({
      modules:{
        login,
        menu,
        tarNav
      },
      getters
})
