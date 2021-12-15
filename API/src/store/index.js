import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    // @@ 嚴格模式 (練習可開，開發建議不要開)
    // strict: true,

    state: {
        // @@ state 不可改，功能僅檢查
        day: 0,
        header: {
            src: "/vue-iron.png",
            title: "Vue.js 手牽手，一起嗑光全家桶",
        },
        // @@ api 先給空陣列
        list: [],
    },

    mutations: {
        // @@ mutations 實際狀態修改的地方
        SET_DAY(state, day) {
            state.day = day;
        },

        GET_LIST(state, list) {
            state.list = list;
        },
    },

    actions: {
        // @@ actions 動作不是改變狀態，而是提交改變。
        // 動作可以包含任意異步操作
        GET_LIST(context, day) {
            // console.log(context);
            context.commit("SET_DAY", day);

            return axios
                .get('/list.json')
                .then(res => {
                    console.log(res)
                        // context.commit("GET_LIST", res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },

    // ironStore.js 就是 modules
    modules: {
        // @@ modules 模塊(可再包 狀態如:(state mutations actions))
        // 但 modules: { a: moduleA }
    },

});