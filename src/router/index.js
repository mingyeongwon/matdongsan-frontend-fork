import { createRouter, createWebHistory } from 'vue-router'
import MyPage from './MyPage'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: MyPage
  // },
  ...MyPage
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
