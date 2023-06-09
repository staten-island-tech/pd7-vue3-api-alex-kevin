import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () => import('../views/StatisticsView.vue')
    },
    {
      path: '/explore',
      name: 'Explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/doughnut-chart',
      name: 'Doughnut Chart',
      component: () => import('../views/DoughnutView.vue')
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () => import('../views/BarView.vue')
    },
    {
      path: '/cafeteria/:entityid:schoolname:borough:number:street:address_line_1:address_line_2:zipcode:lastinspection:permittee:inspectiondate:code:violationdescription:level:latitude:longitude:communityboard:councildistrict:bin:bbl:nta',
      name: 'Cafeteria',
      props: true,
      component: () => import('../views/CafeteriaView.vue')
    },
    {
      path: '/error/:errorCode',
      name: 'Error',
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

export default router
