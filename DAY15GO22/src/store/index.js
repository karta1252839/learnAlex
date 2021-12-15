import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

const LS = {
    load() {
        // JSON.parse() JSON字串轉換成 JavaScript的數值或是物件
        return JSON.parse(localStorage.getItem("vue-todo") || []);
    },
    save(data) {
        // JSON.stringify() 方法將 JavaScript 值轉換為 JSON 字符串
        localStorage.setItem("vue-todo", JSON.stringify(data));
    },
};

// 篩選並回傳整包 todos
const filter = {
    all(todos) {
        return todos;
    },
    active(todos) {
        return todos.filter((todo) => {
            return !todo.complete;
        });
    },
    complete(todos) {
        return todos.filter((todo) => {
            return todo.complete;
        });
    },
};

export default new Vuex.Store({
    // strict: true,
    state: {
        todos: [
            { content: "todo-content", complete: false },
            { content: "todo-content", complete: true },
            { content: "todo-content", complete: false },
        ],
    },
    getters: {
        // value: state => {
        //     return state.value;
        // }
        todoIndex(state) {
            return filter[state.route.name](state.todos).map(todo => state.todos.indexOf(todo))
        }
    },
    mutations: {
        SET_TODOS(state, data) {
            state.todos = data;
            LS.save(state.todos);
        },
        ADD_TODOS(state, data) {
            state.todos.push(data);
            LS.save(state.todos);
        },
        UPDATE_TODOS(state, { index, data }) {
            // @@跟前幾集的陣列資料觀測一樣 直接修改陣列沒法通知大家要改
            // state.todos[index] = data;
            state.todos[index].content = data.content;
            state.todos[index].complete = data.complete;
            LS.save(state.todos);
        },
        REMOVE_TODOS(state, index) {
            state.todos.splice(index, 1);
            LS.save(state.todos);
        },
    },

    actions: {
        // localStorage
        INIT_TODOS({ commit }) {
            commit("SET_TODOS", LS.load());
        },
    },

    modules: {},
});