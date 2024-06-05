import { createRouter, createWebHistory } from "vue-router";
import MyPage from "./MyPage";
import Product from "./Product";
import Agent from "./Agent";
import QnA from './QnA.js'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MyPage
  },
  ...MyPage,
  ...Product,
  ...Agent,
  ...QnA,

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
