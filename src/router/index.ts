import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../components/index.vue')
    },
    {
        path: '/encryption',
        name: 'encryption',
        component: () => import('../views/encryption.vue')
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
 
export default router