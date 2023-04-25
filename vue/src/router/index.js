import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatisticsView from '../views/StatisticsView.vue'
import SearchView from '../views/SearchView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchView
    },
    {
      path: '/error/:errorCode',
      name: 'Error',
      component: ErrorView
    }
  ]
})

export default router
