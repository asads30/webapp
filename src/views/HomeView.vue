<template>
  <div class="home">
    <Header :left="false" :right="false" :center="true" :centerText="'Акция'"/>
    <div class="text-white">
      {{ cookie }}
    </div>
    <div class="home-wrapper" v-if="getUser">
      <Top :count="getUser?.prizes_count" />
      <User :name="getUser?.name + ' ' + getUser?.surname" :phone="getUser?.phone_number" />
      <div class="shot">
        <div class="container">
          <router-link :to="{name: 'chances', query: { web: cookie }}" class="shot-box">
            <div class="shot-left">
              <div class="shot-rating">
                <div class="shot-rating-icon">
                  <img src="@/assets/images/shot.svg" alt="">
                </div>
                <div class="shot-rating-number">{{ getUser?.score }}</div>
              </div>
              <div class="shot-title">Шанс для розыгрышей<br />суперпризов</div>
            </div>
            <div class="shot-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M1 1L7.25 7.875L1 14.75" stroke="#B3B7CE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
        </div>
      </div>
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
  .shot {
    margin: 0 0 20px;
    .shot-box{
      background: #34353F;
      justify-content: space-between;
      padding: 10px 15px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      text-decoration: none;
      .shot-left{
        display: flex;
        align-items: center;
        .shot-rating {
          gap: 9px;
          padding-right: 15px;
          border-right: 1px solid hsla(0,0%,100%,.2);
          margin-right: 15px;
          display: flex;
          align-items: center;
          .shot-rating-icon{
            height: 19px;
            img{
              vertical-align: baseline;
            }
          }
          .shot-rating-number {
            font-size: 20px;
            font-weight: 700;
            color: #fff;
          }
        }
        .shot-title{
          font-size: 14px;
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
</style>e