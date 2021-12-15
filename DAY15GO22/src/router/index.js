import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Alex from "../views/Alex.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/all",
        name: "all",
    },
    {
        path: "/active",
        name: "active",
    },
    {
        path: "/complete",
        name: "complete",
    },
    {
        // 如沒有前面這些路由 則導入/all
        path: "*",
        redirect: "/all",
    },
];

const router = new VueRouter({
    routes,
});

export default router;