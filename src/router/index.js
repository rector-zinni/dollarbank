// Composables
import { createRouter, createWebHistory } from 'vue-router'
import loginAccessVue from '../views/loginAccess.vue'
const routes = [{
        path: '/',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: loginAccessVue
    },
    {
        path: '/home/:id',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router