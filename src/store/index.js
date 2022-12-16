import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [vuexLocalStorage.plugin],
  })
  
}

export default createStore
