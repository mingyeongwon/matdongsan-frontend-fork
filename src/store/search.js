export default {
    namespaced: true,

    state: {
        searchKeyword: "",
    },

    getters: {
        getSearchKeyword(state, getters, rootState, rootGetters) {
            return state.searchKeyword;
        },
    },

    mutations: {
        setSearchKeyword(state, payload) {
            state.searchKeyword = payload;
        },
    },

    actions: {
        updateSearchKeyword(context, payload) {
            context.commit("setSearchKeyword", payload);
          }
    }
};