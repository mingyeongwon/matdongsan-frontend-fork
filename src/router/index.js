import { createRouter, createWebHistory } from "vue-router";
import MyPage from "./MyPage";
import Product from "./Product";
import Agent from "./Agent";
const routes = [
  {
    path: '/',
    name: 'home',
    component: MyPage
  },
  ...MyPage,
  ...Product,
  ...Agent,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
