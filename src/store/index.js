import { createStore } from 'vuex'
import { api } from '@/boot/axios';

export default createStore({
  state: {
    user: null
  },
  getters: {
    getUser(state){
      return state.user
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({commit}, session) {
      try {
        await api.post(`me`, session).then(res => {
          if(res){
            commit('setUser', res.data.data)
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
  }
})
