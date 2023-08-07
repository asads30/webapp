<template>
  <div class="applayout">
    {{ cookie }}
    <router-view/>
  </div>
</template>

<script>
import {getCookie} from '@/boot/util'

export default {
  name: 'App',
  computed: {
    cookie(){
      return getCookie('web-session')
    },
  },
  async created() {
    this.$store.commit('setWeb', this.cookie)
  }
}
</script>