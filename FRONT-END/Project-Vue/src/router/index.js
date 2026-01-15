import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    }, 
    {
      path: '/cursos/beginners',
      name: 'BeginnersCards',
      component: () => import('@/views/BeginnersView.vue'),
    },
    {
      path: '/cursos/intermedium',
      name: 'IntemediumCards',
      component: () => import('@/views/IntermediumView.vue'),
    },
    {
      path: '/cursos/advanced',
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
