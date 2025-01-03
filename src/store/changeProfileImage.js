import axios from "axios";
export default {
    namespaced: true,
  
    state: {
      changeProfile: false,
    },
    getters: {
      getChangeProfile(state, getters, rootState, rootGetters) {
        return state.changeProfile;
      },
    },
    mutations: {
      setChangeProfile(state) {
        state.changeProfile = !state.changeProfile;
      },
    },
    actions: {
      
    },
  };
  