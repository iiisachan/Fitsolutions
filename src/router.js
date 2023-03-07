import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import LogInView from './views/LogInView.vue'
import RegisterView from './views/RegisterView.vue'
import ProfileView from './views/ProfileView.vue'
import MuscleView from './views/MuscleView.vue'
import WorkoutView from './views/WorkoutView.vue'
import GymMapView from './views/GymMapView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: LogInView,
      path: '/login'
    },
    {
      component: RegisterView,
      path: '/register'
    },
    {
      component: ProfileView,
      path: '/profile'
    },
    {
      component: MuscleView,
      path: '/muscle'
    },
    { component: WorkoutView, path: '/workout/:muscletype' },
    {
      component: GymMapView,
      path: '/map'
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    left: 0
    // behavior: 'smooth'
  })

  next()
})

export default router
