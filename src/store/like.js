
export default {
    namespaced: true,

    state: {
        wishList: [],
    },

    getters: {
        getWishList(state, getters, rootState, rootGetters) {
            return state.wishList;
        },
    },

    mutations: {
        setWishList(state, payload) {
            state.wishList.push(payload.productId);
        },
    },

    actions: {
        addToWishList(context, payload) {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(payload);
                }, payload.duration);
            })
            .then((data) => {
                context.commit("setWishList", data);
                console.log("상태 변경 성공");
            })
            .catch((error) => {
                console.log("실패");
            });
        }
    }
};