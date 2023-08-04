<template>
  <div class="home">
    {{ cookie }}
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed: {
    cookie(){
      return this.getCookie('web-session')
    }
  },
  methods: {
    getCookie(name) {
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
        return (arr[2]);
      else
        return null;
    }
  }
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