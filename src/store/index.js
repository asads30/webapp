import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    prizes: null,
    chances: null,
    web: null,
    referall: null,
    text: null,
    activeFortune: false
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
    },
    getText(state){
      if(state.text){
        return state.text[1]
      }
    },
    getWheelText(state){
      if(state.text){
        return state.text[0]
      }
    },
    getRulesText(state){
      if(state.text){
        return state.text[2]
      }
    },
    getActiveFortune(state){
      return state.activeFortune
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setPrizes: (state, prizes) => {
      state.prizes = prizes;
    },
    addPrizes: (state, prizes) => {
      state.prizes.data = state.prizes.data.concat(prizes.data);
      state.prizes.current_page = prizes.current_page
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
    setText: (state, text) => {
      state.text = text
    },
    setActiveFortune: (state, activeFortune) => {
      state.activeFortune = activeFortune
    }
  },
  actions: {
  }
})