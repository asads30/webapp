<template>
  <div class="home">
    <Header :left="false" :right="false" :center="true" :centerText="'Акция'"/>
    <div class="home-wrapper" v-if="getUser">
      <Top :count="getUser?.prizes_count" />
      <User :name="getUser?.name + ' ' + getUser?.surname" :phone="getUser?.phone_number" />
      <Shot :score="getUser?.score" />
      <Drawing />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Top from '@/components/Home/Top'
import User from '@/components/Home/User'
import Shot from '@/components/Home/Shot'
import Drawing from '@/components/Home/Drawing'
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
    ]),
    popup(){
      return this.$route.query.method
    }
  },
  components: {
    Header,
    Top,
    User,
    Shot,
    Drawing
  },
  async mounted() {
    const data = {
      web_session: getCookie('web-session')
    }
    await api.post('me', data).then(res => {
      if(res.data.status == 200){
        this.home = true
        this.$store.commit('setUser', res.data.data)
      }
    }).catch(err => {
      if(err.response.data.error.code == 1000){
        this.$router.push({name: 'start', query: { web: getCookie('web-session') }})
      }
      if(err.response.data.error.code == 1001){
        this.$router.push({name: 'ident', query: { web: getCookie('web-session') }})
      }
    })
  },
}
</script>