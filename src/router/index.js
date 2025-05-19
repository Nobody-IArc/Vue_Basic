import {createRouter, createWebHistory} from 'vue-router';
// 정적 임포트
import Join from '../views/Join.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/join',
            component: Join,
        },
        {
            path: '/login',
            // 동적 임포트
            component: () => import('../views/Login.vue'),
        },
    ]
});

export default router;