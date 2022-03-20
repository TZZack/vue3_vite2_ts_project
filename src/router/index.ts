import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/Home.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/Login.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
