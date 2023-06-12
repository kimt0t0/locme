import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ConditionsView from '@/views/ConditionsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import EstimateView from '@/views/EstimateView.vue'
import LegalsView from '@/views/LegalsView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import SignupView from '@/views/SignupView.vue'
import UserView from '@/views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'userform',
    component: UserView
  },
  {
    path: '/mon-compte',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path:'/inscription/:type',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/a-propos',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/mentions-legales',
    name: 'mentions legales',
    component: LegalsView
  },
  {
    path: '/confidentialite',
    name: ' confidentialite',
    component: PrivacyView
  },
  {
    path: '/cguv',
    name: 'cguv',
    component: ConditionsView
  },
  {
    path: '/devis',
    name: 'devis',
    component: EstimateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
