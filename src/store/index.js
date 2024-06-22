import { createStore } from 'vuex'
import search from './search'

export default createStore({
  state: {
    
  },
  getters: {
    
  },
  mutations: {
    
  },
  actions: {
  },

  // 루트 하위의 상태 정의
  modules: {
    search: search,
  },
})
