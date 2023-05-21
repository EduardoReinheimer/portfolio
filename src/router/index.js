import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
        layout: 'Home'
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
      meta: {
        layout: 'About'
      },
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('@/views/Contacts.vue'),
      meta: {
        layout: 'Contacts'
      }
    }
  ]
});



export default router
