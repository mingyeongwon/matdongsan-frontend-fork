import { createRouter, createWebHistory } from "vue-router";
import MyPage from "./MyPage";
import Product from "./Product";
import Agent from "./Agent";
import QnA from "./QnA.js";
import Payment from "./Payment.js";


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
  ...Payment

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
