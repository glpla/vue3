import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { h } from "vue";
import { supabase } from "@/assets/utils/supabase";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      component: () => import("@/views/MenuView.vue"),
      meta: { showNav: true, title: "菜单" },
      children: [
        {
          path: "",
          name: "goods",
          component: () => import("@/components/Goods.vue"),
          meta: { showNav: true, title: "菜单-商品列表" },
        },
        {
          path: "vip",
          name: "vip",
          component: () => import("@/components/Vip.vue"),
          meta: { showNav: true, title: "菜单-商品列表" },
        },
        {
          path: "rank",
          name: "rank",
          component: () => import("@/components/Rank.vue"),
          meta: { showNav: true, title: "菜单-年度封神榜" },
        },
        {
          path: "favorite",
          name: "favorite",
          component: () => import("@/components/Favorite.vue"),
          meta: { showNav: true, title: "菜单-我的常点" },
        },
      ],
    },
    {
      path: "/mall",
      name: "mall",
      component: () => import("@/views/MallView.vue"),
      meta: { showNav: true, title: "瑞幸电商" },
    },
    {
      path: "/membership",
      name: "membership",
      component: () => import("@/views/MembershipView.vue"),
      meta: { showNav: true, title: "会员卡" },
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("@/views/MineView.vue"),
      meta: { showNav: true, title: "我的 - 个人中心" },
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("@/views/DetailsView.vue"),
      meta: { showNav: false, title: "商品详情" },
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/SearchView.vue"),
      meta: { showNav: false, title: "搜索" },
    },
    {
      path: "/location",
      name: "location",
      component: () => import("@/views/LocationView.vue"),
      meta: { showNav: false, title: "配送方式" },
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
      component: () => import("@/components/Test.vue"),
      meta: { showNav: false, title: "测试页 test" },
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("@/components/Demo.vue"),
      meta: { showNav: false, title: "测试页 demo" },
    },
    {
      path: "/team",
      name: "team",
      component: () => import("@/views/TeamView.vue"),
      meta: { showNav: false, title: "团队" },
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/OrderView.vue"),
      meta: { showNav: false, title: "确认订单" },
    },
    {
      path: "/center",
      name: "center",
      component: () => import("@/views/CenterView.vue"),
      meta: { showNav: false, title: "个人资料", requireAuth: true },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
      meta: { showNav: false, title: "注册" },
    },
    {
      path: "/login-guide",
      name: "login-guide",
      component: () => import("@/views/LoginGuide.vue"),
      meta: { showNav: false, title: "注册与登录" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      meta: { showNav: false, title: "账户登录 - 手机" },
    },
    {
      path: "/register-email",
      name: "register-email",
      component: () => import("@/views/RegisterEmailView.vue"),
      meta: { showNav: false, title: "账户注册 - 邮件" },
    },
    {
      path: "/login-email",
      name: "login-email",
      component: () => import("@/views/LoginEmailView.vue"),
      meta: { showNav: false, title: "账户登录 - 邮件" },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("@/views/ResetPasswordView.vue"),
      meta: { showNav: false, title: "密码重置" },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
      meta: { showNav: false, title: "联系我们" },
    },
    {
      path: "/confirm",
      name: "confirm",
      component: () => import("@/views/ConfirmView.vue"),
      meta: { showNav: false, title: "注册确认" },
    },
    // {
    //   path: "/about:pathMatch(.*)*",
    //   name: "goods not-found",
    //   component: h("p", { style: "color: red" }, "goods 404 Not Found"),
    // },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "page-not-found",
    //   component: h("p", { style: "color: red" }, "Pages Not Found 404"),
    // },
  ],
  linkActiveClass: "nav-color",
  linkExactActiveClass: "exact-nav-color",
});
router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log(error);
      console.log(data);

      next({ name: "login-email" });
    } else {
      next();
    }
  } else {
    next();
  }
});
router.afterEach((to, from) => {
  document.title = to.meta.title;
  window.scrollTo(0, 0);
});
// router.options.linkActiveClass = "nav-color";
// router.options.linkExactActiveClass = "nav-color";
export default router;
