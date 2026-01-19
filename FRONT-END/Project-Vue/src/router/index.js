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
      path: '/cursos',
      name: 'Cursos',
      component: () => import('@/views/CursosLayouts/CursosView.vue'),
    }, 
    {
      path: '/cursos/beginners',
      name: 'BeginnersCards',
      component: () => import('@/views/CursosLayouts/BeginnersView.vue'),
    },
    {
      path: '/cursos/intermedium',
      name: 'IntermediumCards',
      component: () => import('@/views/CursosLayouts/IntermediumView.vue'),
    },
    {
      path: '/cursos/advanced',
      name: 'AdvancedCards',
      component: () => import('@/views/CursosLayouts/AdvancedView.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/Home, Login, Register/LoginView.vue'),
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('@/views/Home, Login, Register/RegisterView.vue'),
    }, 
   /*  PATHS DE USUARIOS ESPECIFICOS */
    {
      path: '/CrearCursos',
      name: 'CrearCurso',
      component: () => import('@/views/ProfesoresLayouts/CrearCursosView.vue'),
    }, 
    {
      path: '/Profesores',
      name: 'Profesores',
      component: () => import('@/views/AdminLayouts/VerProfesoresView.vue'),
    }, 
  ]
}) 

export default router
