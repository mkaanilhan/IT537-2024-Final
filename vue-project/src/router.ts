import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Explorer from '@/views/Explorer.vue'
import Quiz from '@/views/Quiz.vue'
import Notebook from '@/views/Notebook.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/explorer',
        name: 'Explorer',
        component: Explorer
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz
    },
    {
        path: '/notebook',
        name: 'Notebook',
        component: Notebook
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router