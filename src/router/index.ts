import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Layout.vue')
  },
  {
    path: '/home',
    redirect: { path: '/' },
    component: () => import('@/components/Layout.vue')
  },
  {
    path: '/shop',
    component: () => import('@/components/Shop.vue')
  },
  {
    path: '/manage',
    component: () => import('@/components/Manage.vue')
  },
  {
    path: '/test',
    component: () => import('@/components/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
