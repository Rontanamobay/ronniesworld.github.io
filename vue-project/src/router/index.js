import { createRouter, createWebHistory } from 'vue-router'

//views
import HomeView from '../views/HomeView.vue'
import BopsView from '../views/BopsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bops',
      name: 'bops',
      component: BopsView
    }
  ]
})

export default router
