import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home, Login, Register/HomeView.vue'),
    },
    {
      path: '/courses',
      name: 'Courses',
      component: () => import('@/views/CursosLayouts/CursosView.vue'),
    }, 
    {
      path: '/courses/beginners',
      name: 'BeginnersCards',
      component: () => import('@/views/CursosLayouts/BeginnersView.vue'),
    },
    {
      path: '/courses/intermedium',
      name: 'IntermediumCards',
      component: () => import('@/views/CursosLayouts/IntermediumView.vue'),
    },
    {
      path: '/courses/advanced',
      name: 'AdvancedCards',
      component: () => import('@/views/CursosLayouts/AdvancedView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Home, Login, Register/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Home, Login, Register/RegisterView.vue'),
    }, 
   /*  PATHS DE USUARIOS ESPECIFICOS */
    {
      path: '/create_course',
      name: 'CreateCourse',
      component: () => import('@/views/ProfesoresLayouts/CrearCursosView.vue'),
    }, 
    {
      path: '/profesors',
      name: 'Profesors',
      component: () => import('@/views/AdminLayouts/VerProfesoresView.vue'),
    }, 
  ]
}) 

export default router
