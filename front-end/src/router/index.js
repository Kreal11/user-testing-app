import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import TestsDashboard from '../views/TestsDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tests',
      name: 'tests',
      component: TestsDashboard
    }
  ]
})

export default router
