import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import IdentView from '../views/IdentView.vue'
import PrizesView from '../views/PrizesView.vue'
import PrizesItemView from '../views/PrizesItemView.vue'
import ChancesView from '../views/ChancesView.vue'
import SuperView from '../views/SuperView.vue'
import ReferallView from '../views/ReferallView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/start',
    name: 'start',
    component: StartView
  },
  {
    path: '/ident',
    name: 'ident',
    component: IdentView
  },
  {
    path: '/prizes',
    name: 'prizes',
    component: PrizesView
  },
  {
    path: `/prizes/:id`,
    name: 'prizesItem',
    component: PrizesItemView
  },
  {
    path: '/chances',
    name: 'chances',
    component: ChancesView
  },
  {
    path: '/super',
    name: 'super',
    component: SuperView
  },
  {
    path: '/referall',
    name: 'referall',
    component: ReferallView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
