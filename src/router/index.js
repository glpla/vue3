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
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuView.vue"),
      meta: { showNav: true, title: "菜单" },
    },
    {
      path: "/goods",
      name: "goods",
      component: () => import("../components/Goods.vue"),
      meta: { showNav: true, title: "商品列表" },
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
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsView.vue"),
      meta: { showNav: false, title: "商品详情" },
    },
    {
      path: "/vip",
      name: "vip",
      component: () => import("../components/Vip.vue"),
      meta: { showNav: false, title: "会员卡" },
    },
    {
      path: "/rank",
      name: "rank",
      component: () => import("../components/Rank.vue"),
      meta: { showNav: false, title: "年度封神榜单" },
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../components/Favorite.vue"),
      meta: { showNav: false, title: "我的常点" },
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
      meta: { showNav: false, title: "搜索" },
    },
    {
      path: "/location",
      name: "location",
      component: () => import("../views/LocationView.vue"),
      meta: { showNav: false, title: "配送方式" },
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
      name: "test",
      component: () => import("../components/Test.vue"),
      meta: { showNav: false, title: "测试页 test" },
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("../components/Demo.vue"),
      meta: { showNav: false, title: "测试页 demo" },
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../views/TeamView.vue"),
      meta: { showNav: false, title: "团队" },
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
  document.title = to.meta.title;
});
router.options.linkActiveClass = "nav-color";
router.options.linkExactActiveClass = "nav-color";
export default router;
