import Vue from "vue";
import App from "./App.vue";
import { sync } from "vuex-router-sync";
import router from "./router";
import store from "./store";

sync(store, router);
Vue.config.productionTip = false;


// @@ Directives 自定義指令(載入後定義指令(游標))
Vue.directive("focus", {
    // When the bound element is inserted into the DOM...
    inserted: function(el) {
        // Focus the element
        el.focus();
    },
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");