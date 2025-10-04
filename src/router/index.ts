import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SupportView from '../views/SupportView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
  ],
})

export default router
