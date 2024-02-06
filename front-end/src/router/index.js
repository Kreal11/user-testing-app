import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestsDashboard from '../views/TestsDashboard.vue'
import QuestionsForm from '../views/QuestionsForm.vue'

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
    },
    {
      path: '/test/:id',
      name: 'test-questions',
      component: QuestionsForm,
      props: true
    }
  ]
})

export default router
