<template>
  <router-view/>
</template>

<script>
import {getCookie} from '@/boot/util'

export default {
  name: 'App',
  computed: {
    cookie(){
      return getCookie('web-session')
    }
  },
  async created() {
    this.$store.commit('setWeb', this.cookie);
    let theme = getCookie('theme');
    if(theme && theme == 'light'){
      document.documentElement.setAttribute('theme', 'light');
    }
    let lang = getCookie('lang');
    if(lang && lang == 'uz'){
      this.$i18n.locale = 'uz'
    }
  }
}
</script>