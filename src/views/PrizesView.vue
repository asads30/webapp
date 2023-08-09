<template>
    <div class="page">
        <div class="prizes" v-if="getPrizes">
            <Header :left="true" :right="false" :center="true" :centerText="$t('home.home2')"/>
            <div class="prizes-wrapper" v-if="getUser?.prizes_count">
                <div class="container">
                    <div class="prizes-list">
                        <Prize 
                            v-for="item in getPrizes"
                            :key="item.id"
                            :background="item.prize.background" 
                            :text="item.prize.name_ru"
                            :textEN="item.prize.name_en" 
                            :textUZ="item.prize.name_uz" 
                            :img="item.prize.photo"
                            :id="item.id"
                        />
                    </div>
                </div>
            </div>
            <div class="prizes-not" v-else>
                <div class="container">
                    <div class="prizes-not-img">
                        <img src="@/assets/images/not.png" alt="">
                    </div>
                    <div class="prizes-not-text">У вас пока нет призов. Крутите колесо фортуны, чтобы получить гарантированный приз, а так же копите шансы чтобы получить один из основных призов!</div>
                </div>
            </div>
        </div>
        <div class="preloader" v-else>
            <div class="preloader-img">
              <img src="@/assets/images/loader.svg" alt="">
            </div>
            <div class="preloader-text" v-html="$t('preloader')"></div>
            <div class="preloader-text">{{ cookie }}</div>
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
            'getWeb',
            'getUser'
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
    .prizes-not{
        padding: 50px 0;
    }
    .prizes-not-img{
        text-align: center;
        img{
            width: 200px;
            margin-bottom: 50px;
        }
    }
    .prizes-not-text{
        font-size: 12px;
        color: var(--text);
        font-weight: 600;
        line-height: 135%; 
        letter-spacing: 0.5px;
    }
</style>e