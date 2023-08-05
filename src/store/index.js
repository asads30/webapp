import { createStore } from 'vuex'
import {api} from '@/boot/axios'

export default createStore({
  state: {
    user: null,
    prizes: null,
  },
  getters: {
    getUser(state){
      return state.user
    },
    getPrizes(state){
      return state.prizes
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setPrizes: (state, prizes) => {
      state.prizes = prizes;
    }
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
    }
  }
})