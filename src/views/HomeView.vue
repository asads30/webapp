<template>
  <div class="home">
    <Home v-if="home" />
    <Start v-if="start" />
  </div>
</template>

<script>
import {api} from '@/boot/axios'
import Home from '@/components/Home'
import Start from '@/components/Start'

export default {
  name: 'HomeView',
  computed: {
    cookie(){
      return this.getCookie('web-session')
    }
  },
  data() {
    return {
      home: false,
      start: false
    }
  },
  components: {
    Home,
    Start
  },
  methods: {
    getCookie(name) {
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
        return (arr[2]);
      else
        return null;
    }
  },
  async mounted() {
    const data = {
      web_session: this.getCookie('web-session')
    }
    await api.post('me', data).then(res => {
      if(res.data.status == 200){
        this.home = true
      }
    }).catch(err => {
      if(err.response.data.error.code == 1000){
        this.start = true
      }
    })
  },
}
</script>

<style lang="scss">
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
</style>