import { createStore } from 'vuex'
import { api } from '@/boot/axios';
import { getCookie } from '@/boot/util'
import router from '@/router'

export default createStore({
  state: {
    user: null,
    web: null
  },
  getters: {
    getUser(state){
      return state.user
    },
    getWeb(state){
      return state.web
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setWeb: (state, web) => {
      state.web = web;
    },
  },
  actions: {
    async fetchUser({commit}) {
      const data = {
        web_session: getCookie('web-session')
      }
      try {
        await api.post(`me`, data).then(res => {
          if(res){
            localStorage.getItem('web', data.web_session)
            commit('setUser', res.data.data)
            commit('setWeb', data.web_session)
          }
        })
      } catch (err) {
        if(err.response.data.error.code == 1000){
          router.push({name: 'start', query: { web: data.web_session }})
        }
        if(err.response.data.error.code == 1001){
          router.push({name: 'start', query: { web: data.web_session }})
        }
      }
    },
  }
})
