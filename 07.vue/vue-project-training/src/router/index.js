import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/signin", name: "SignIn", component: SignIn },
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
