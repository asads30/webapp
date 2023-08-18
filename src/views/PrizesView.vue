<template>
    <div class="page">
        <div class="prizes" v-if="getPrizes">
            <Header :left="true" :right="false" :center="true" :centerText="$t('home.home2')"/>
            <div class="prizes-wrapper" v-if="getPrizes?.length > 0">
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
                    <button class="prizes-more" v-if="getPrizes?.total > getPrizes?.data?.length" @click="loadMore">{{ $t('prizes.more') }}</button>
                </div>
            </div>
            <div class="prizes-not" v-else>
                <div class="container">
                    <div class="prizes-not-img">
                        <img src="@/assets/images/prizes-not.svg" alt="">
                    </div>
                    <div class="prizes-not-text">{{ $t('prizes.not') }}</div>
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
            'getWeb',
            'getUser'
        ])
    },
    components: {
        Header,
        Prize
    },
    mounted() {
        api.get(`myPrizes?web_session=${this.getWeb}&page=1`).then(res => {
            this.$store.commit('setPrizes', res.data)
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        loadMore(){
            let nextPage = Number(this.getPrizes?.current_page) + 1;
            api.get(`myPrizes?web_session=${this.getWeb}&page=${nextPage}`).then(res => {
                this.$store.commit('addPrizes', res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }
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
        padding-bottom: 20px;
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
    .prizes-more{
        width: 100%;
        background: linear-gradient(0deg, #0073ff, #00c2ff);
        margin: 0 0 20px;
        color: #fff;
        border: 0;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
    }
</style>