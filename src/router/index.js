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
      meta: { showNav: true, title: "大树小咖" },
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/mall",
      name: "mall",
      component: () => import("../views/MallView.vue"),
      meta: { showNav: true, title: "瑞幸电商" },
    },
    {
      path: "/membership",
      name: "membership",
      component: () => import("../views/MembershipView.vue"),
      meta: { showNav: true, title: "会员卡" },
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../views/MineView.vue"),
      meta: { showNav: true, title: "我的 - 个人中心" },
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../views/WorkView.vue"),
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
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
      meta: { showNav: false, title: "关于我们" },
    },
    {
      path: "/test",
      component: () => import("../components/Test.vue"),
      meta: { showNav: false, title: "测试页" },
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../views/TeamView.vue"),
      meta: { showNav: false, title: "团队" },
    },
    {
      path: "/goods",
      name: "goods",
      component: () => import("../views/GoodsView.vue"),
      meta: { showNav: true, title: "菜单" },
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsView.vue"),
      meta: { showNav: false, title: "商品详情" },
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/OrderView.vue"),
      meta: { showNav: false, title: "确认订单" },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      meta: { showNav: false, title: "注册" },
    },
    {
      path: "/login-guide",
      name: "login-guide",
      component: () => import("../views/LoginGuide.vue"),
      meta: { showNav: false, title: "注册与登录" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: { showNav: false, title: "登录" },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      meta: { showNav: false, title: "联系我们" },
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
router.afterEach((to, from) => {
  if (to.meta.showNav) {
    document.title = to.meta.title;
  }
});
router.options.linkActiveClass = "nav-color";
router.options.linkExactActiveClass = "nav-color";
export default router;
