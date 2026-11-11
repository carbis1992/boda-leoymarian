import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/boda-leoymarian' },
    {
      path: '/boda-leoymarian',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
