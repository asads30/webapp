<template>
  <div class="home">
    <Home v-if="home" />
    <Start v-if="start" />
    <Ident v-if="ident" />
  </div>
</template>

<script>
import {api} from '@/boot/axios'
import Home from '@/components/Home/Index'
import Start from '@/components/Home/Start'
import Ident from '@/components/Home/Ident'

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
      start: false,
      ident: false
    }
  },
  components: {
    Home,
    Start,
    Ident
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
      if(err.response.data){
        if(err.response.data.error.code == 1000){
          this.start = true
        }
        if(err.response.data.error.code == 1001){
          this.ident = true
        }
      }
    })
  },
}
</script>