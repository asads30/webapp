<template>
    <div class="page">
        <div class="prizes" v-if="getPrizes">
            <Header :left="true" :right="false" :center="true" :centerText="$t('home.home2')"/>
            <div class="prizes-wrapper">
                <div class="container">
                    <div class="prizes-list">
                        <Prize 
                            v-for="item in getPrizes"
                            :key="item.id"
                            :background="item.prize.background" 
                            :text="item.prize.name_ru" 
                            :img="item.prize.photo"
                            :id="item.id"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="preloader" v-else>
            <div class="preloader-img">
              <img src="@/assets/images/loader.svg" alt="">
            </div>
            <div class="preloader-text" v-html="$t('preloader')"></div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Prize from '@/components/Prizes/Item'
import {api} from '@/boot/axios'
import {mapGetters} from 'vuex';

export default {
    name: 'PrizesView',
    computed: {
        ...mapGetters([
            'getPrizes',
            'getWeb'
        ])
    },
    components: {
        Header,
        Prize
    },
    mounted() {
        api.get(`myPrizes?web_session=${this.getWeb}`).then(res => {
            this.$store.commit('setPrizes', res.data)
        }).catch(err => {
            console.log(err)
        })
    },
}
</script>

<style lang="scss">
  .prizes-wrapper{
    height: calc(100vh - 74px);
    overflow-y: auto;
  }
  .prizes-list{
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }
</style>e