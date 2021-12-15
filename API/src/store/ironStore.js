import axios from "axios";

// @@ 模組化數據 vueX(mutations)
export default {
    // @@ namespaced 模組名 可避免重複(之後使用前面要加上)
    namespaced: true,

    state: {
        day: 0,
        header: {
            src: "/vue-iron.png",
            title: "Vue.js 手牽手，一起嗑光全家桶",
        },
        list: [],
    },

    mutations: {
        SET_DAY(state, day) {
            state.day = day;
        },

        GET_LIST(state, list) {
            state.list = list;
        },
    },

    actions: {
        GET_LIST(context, day) {
            context.commit("SET_DAY", day);

            return axios
                .get("/list.json")
                .then((res) => {
                    context.commit("GET_LIST", res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },

    getters: {
        // @@ 類似 computed
        //   value: state => {
        //     return state.value;
        //   }
        currentDay(state) {
            return state.list[state.day]
        }
    }
};