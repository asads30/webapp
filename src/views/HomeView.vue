<template>
  <div class="home">
    <Header :left="false" :right="false" :center="true" :centerText="'Акция'"/>
    <div class="text-white">
      {{ cookie }}
    </div>
    <div class="home-wrapper" v-if="getUser">
      <Top :count="getUser?.prizes_count" />
      <User :name="getUser?.name + ' ' + getUser?.surname" :phone="getUser?.phone_number" />
      <Shot :score="getUser?.score" :cookie="cookie" />
      <Drawing />
      <Referall />
      <Footer :count="getUser?.spin_wheel" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Top from '@/components/Home/Top'
import User from '@/components/Home/User'
import Shot from '@/components/Home/Shot'
import Drawing from '@/components/Home/Drawing'
import Referall from '@/components/Home/Referall'
import Footer from '@/components/Home/Footer'
import {api} from '@/boot/axios'
import {getCookie} from '@/boot/util'
import {mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    cookie(){
      return getCookie('web-session')
    },
    ...mapGetters([
      'getUser'
    ])
  },
  components: {
    Header,
    Top,
    User,
    Shot,
    Drawing,
    Referall,
    Footer,
  },
  async created() {
    const data = {
      web_session: getCookie('web-session')
    }
    await api.post('me', data).then(res => {
      if(res.data.status == 200){
        this.home = true
        this.$store.commit('setUser', res.data.data)
        localStorage.setItem('web', getCookie('web-session'))
      }
    }).catch(err => {
      if(err.response.data.error.code == 1000){
        this.$router.push({name: 'start', query: { web: getCookie('web-session') }})
      }
      if(err.response.data.error.code == 1001){
        this.$router.push({name: 'ident', query: { web: getCookie('web-session') }})
      }
    })
  }
}
</script>

<style lang="scss">
  .home-wrapper{
    height: calc(100vh - 74px);
    overflow-y: auto;
  }
</style>e