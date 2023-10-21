import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import IdentView from '../views/IdentView.vue'
import PrizesView from '../views/PrizesView.vue'
import PrizesItemView from '../views/PrizesItemView.vue'
import PrizesItemChanceView from '../views/PrizesItemChanceView.vue'
import ChancesView from '../views/ChancesView.vue'
import ReferallView from '../views/ReferallView.vue'
import WinnersView from '../views/WinnersView.vue'
import VideoView from '../views/VideoView.vue'
import SurveyIndex from "@/views/survey/SurveyIndex.vue";
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from) => {
      if(from.name == 'fortuna' && store.state.activeFortune == true){
        return false
      }
    }
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
    component: PrizesView,
    props: true
  },
  {
    path: `/prizes/:id`,
    name: 'prizesItem',
    component: PrizesItemView
  },
  {
    path: `/prizes/chance/:id`,
    name: 'prizesItemChance',
    component: PrizesItemChanceView
  },
  {
    path: '/chances',
    name: 'chances',
    component: ChancesView,
    props: true
  },
  {
    path: '/referall',
    name: 'referall',
    component: ReferallView
  },
  {
    path: '/winners',
    name: 'winners',
    component: WinnersView
  },
  {
    path: '/video',
    name: 'video',
    component: VideoView
  },
  {
    path: '/survey',
    name: 'survey.index',
    component: SurveyIndex,
    redirect: {name: 'survey.first'},
    children: [
        {
      path: '',
      name: 'survey.first',
      props: true,
          component: () => import('@/views/survey/QuestionFirst.vue'),
    },
      {
        path: '/survey/:id',
        name: 'survey.two',
        props: true,
        component: () => import('@/views/survey/QuestionTwo.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.three',
        props: true,
        component: () => import('@/views/survey/QuestionThree.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.four',
        props: true,
        component: () => import('@/views/survey/QuestionFour.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.five',
        props: true,
        component: () => import('@/views/survey/QuestionFive.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.six',
        props: true,
        component: () => import('@/views/survey/QuestionSix.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.seven',
        props: true,
        component: () => import('@/views/survey/QuestionSeven.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.eight',
        props: true,
        component: () => import('@/views/survey/QuestionEight.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.nine',
        props: true,
        component: () => import('@/views/survey/QuestionNine.vue'),
      },
      {
        path: '/survey/:id',
        name: 'survey.ten',
        props: true,
        component: () => import('@/views/survey/QuestionTen.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to,from)=>{
  if(from.name === 'survey.ten'){
    store.commit('surveyCompleted');
  }
})

export default router
