import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../pages/index/Index.vue'
import AboutView from '../pages/about/About.vue'
import PortfolioView from '../pages/portfolio/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
