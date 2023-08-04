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
  import Top from '@/components/Home/Index/Top'
  import User from '@/components/Home/Index/User'
  import Shot from '@/components/Home/Index/Shot'
  import Drawing from '@/components/Home/Index/Drawing'
  import {mapActions, mapGetters} from 'vuex';

  export default {
      name: 'IndexComponent',
      props: {
        cookie: String 
      },
      components: {
        Header,
        Top,
        User,
        Shot,
        Drawing
      },
      computed: {
        ...mapGetters([
          'getUser'
        ])
      },
      methods: {
        ...mapActions([
          'fetchUser'
        ]),
        getCookie(name) {
          var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
          if (arr = document.cookie.match(reg))
            return (arr[2]);
          else
            return null;
        }
      },
      mounted() {
        this.fetchUser(this.cookie)
      },
  }
</script>

<style lang="scss">
  .home{
    height: 100vh;
    overflow: hidden;
  }
</style>