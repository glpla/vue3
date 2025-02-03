import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { h } from "vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/mall",
      name: "mall",
      component: () => import("../views/MallView.vue"),
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../views/MineView.vue"),
    },
    {
      path: "/membership",
      name: "membership",
      component: () => import("../views/MembershipView.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../views/Work.vue"),
      // redirect: "/work/html",
      redirect: { name: "html" },
      children: [
        {
          path: "html", //省略父级路由
          name: "html",
          component: () => import("../components/sub-view/Html.vue"),
        },
        {
          path: "css", //省略父级路由
          name: "css",
          component: () => import("../components/sub-view/Css.vue"),
        },
        {
          path: "/work/js", //可以使用完整路由；建议所有子路由配置保持一致
          name: "js",
          component: () => import("../components/sub-view/Js.vue"),
        },
      ],
    },
    {
      path: "/about/:id",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/test",
      component: () => import("../components/Test.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../views/TeamView.vue"),
    },
    {
      path: "/goods",
      name: "goods",
      component: () => import("../views/GoodsView.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/OrderView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login-guide",
      name: "login-guide",
      component: () => import("../views/LoginGuide.vue"),
      meta: { showNav: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    // {
    //   path: "/about:pathMatch(.*)*",
    //   name: "goods not-found",
    //   component: h("p", { style: "color: red" }, "goods 404 Not Found"),
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "page-not-found",
      component: h("p", { style: "color: red" }, "Pages Not Found 404"),
    },
  ],
});
router.options.linkActiveClass = "nav-color";
router.options.linkExactActiveClass = "nav-color";
export default router;
