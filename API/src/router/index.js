import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Alex from "../views/Alex.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/alex",
        name: "alex",
        // component: Alex,
        // @@ component import 可以點到後再loading 並且(檢查面板會出現)link後面會增加preFetch
        component: () =>
            import ( /* webpackChunkName: "alex" */ "../views/Alex.vue"),
        // @@ 巢狀子路由
        children: [{
                path: "info",
                name: "alex-info",
                component: () =>
                    import ( /* webpackChunkName: "alex" */ "../views/Info.vue"),
            },
            {
                path: "youtube",
                name: "alex-youtube",
                component: () =>
                    import ( /* webpackChunkName: "alex" */ "../views/Youtube.vue"),
            },
        ],
    },
    {
        //  @@ redirect 導入網址比較好看(不會像這樣 day?=1)
        path: "/iron",
        redirect: "/iron/1",
    },
    {
        path: "/iron/:day",
        component: () =>
            import ( /* webpackChunkName: "alex" */ "../views/Iron/index.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;