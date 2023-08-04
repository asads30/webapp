<template>
  <router-view/>
</template>

<script>
  import {api} from '@/boot/axios'

  export default {
    name: 'App',
    methods: {
      getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
          return (arr[2]);
        else
          return null;
      }
    },
    computed: {
      cookie(){
        return this.getCookie('web-session')
      }
    },
    async mounted() {
      const data = {
        web_session: this.cookie
      }
      await api.post('me', data).then(res => {
        if(res.data.status == 200){
          this.$router.push({name: 'home', query: {web: this.cookie}})
        }
      }).catch(err => {
        if(err.response.data){
          if(err.response.data.error.code == 1000){
            this.$router.push({name: 'start', query: {web: this.cookie}})
          }
          if(err.response.data.error.code == 1001){
            this.$router.push({name: 'ident'})
          }
        }
      })
    },
  }
</script>