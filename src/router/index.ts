import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const defaultTitle = 'User Management'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'User Management' },
      component: IndexView
    },
    {
      path: '/style',
      name: 'style',
      meta: { title: 'Style Management' },

      component: () => import('../views/StyleView.vue')
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title || defaultTitle
})

export default router
