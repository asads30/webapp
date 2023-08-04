<template>
  <div class="home">
    <Header :left="false" :right="false" :center="true" :centerText="'Акция'"/>
    {{ cookie }}
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
import {mapGetters, mapActions} from 'vuex';


export default {
  name: 'HomeView',
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
    ])
  },
  mounted() {
    this.fetchUser()
  },
}
</script>