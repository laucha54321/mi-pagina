import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [ 
    {
    path: '/',
    component: HomeView
    },
    {
      path: '/AboutMe',
      component: AboutMe
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
