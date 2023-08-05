import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    prizes: null,
    chances: null,
    web: null,
    referall: null
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
    getWeb(state){
      return state.web
    },
    getReferall(state){
      return state.referall
    }
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
    setWeb: (state, web) => {
      state.web = web;
    },
    setReferall: (state, referall) => {
      state.referall = referall;
    },
  },
  actions: {
  }
})