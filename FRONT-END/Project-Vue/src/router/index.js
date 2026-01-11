import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    }, 
    {
      path: '/Beginners',
      name: 'BeginnersCards',
      component: () => import('@/views/BeginnersView.vue'),
    },
    {
      path: '/Intermedium',
      name: 'IntermediumCards',
      component: () => import('@/views/IntermediumView.vue'),
    },
    {
      path: '/Advanced',
      name: 'AdvancedCards',
      component: () => import('@/views/AdvancedView.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/components/Login.vue'),
    }, 
    {
      path: '/Register',
      name: 'Register',
      component: () => import('@/components/Register.vue'),
    }, 
  ]
}) 

export default router
