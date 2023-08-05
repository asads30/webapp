import { createStore } from 'vuex'
import {api} from '@/boot/axios'

export default createStore({
  state: {
    user: null,
    prizes: null,
    chances: null,
  },
  getters: {
    getUser(state){
      return state.user
    },
    getPrizes(state){
      return state.prizes
    },
    getChances(state){
      return state.chances
    },
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setPrizes: (state, prizes) => {
      state.prizes = prizes;
    },
    setChances: (state, chances) => {
      state.chances = chances;
    },
  },
  actions: {
    async fetchPrizes({commit}) {
      const web_session = localStorage.getItem('web');
      try {
          const res = await api.get(`myPrizes?web_session=${web_session}`);
          commit('setPrizes', res.data);
      } catch (err) {
        console.log(err)
      }
    },
    async fetchChances({commit}) {
      const web_session = localStorage.getItem('web');
      try {
          const res = await api.get(`chancesList?web_session=${web_session}`);
          commit('setChances', res.data);
      } catch (err) {
        console.log(err)
      }
    }
  }
})