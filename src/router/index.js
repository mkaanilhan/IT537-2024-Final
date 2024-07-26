import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Table from '@/views/Table.vue'
import Form from '@/views/Form.vue'
import Login from '@/views/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/table', name: 'Table', component: Table },
  { path: '/form', name: 'Form', component: Form },
  { path: '/login', name: 'Login', component: Login }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

