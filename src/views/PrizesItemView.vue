<template>
    <div class="page">
        <div class="prizesview" :style="'background: ' + prize.prize.background" v-if="prize">
            <div class="prizesview-top">
                <Header :left="true" :center="true" :centerText="$t('prizes.prize2')" :leftText="'prizes'" :color="(prize.prize.backgroud == '#FFF;') ? 'white' : 'black'"/>
                <div class="prizesview-logo">
                    <img :src="'https://promadm.click.uz/' + prize.prize.photo">
                </div>
            </div>
            <div class="prizesview-content">
                <div class="prizesview-content-top">
                    <div class="container">
                        <div class="prizesview-date">{{ format_date(prize.created_at) }}</div>
                        <div class="prizesview-title" v-if="$i18n.locale == 'ru'">{{ prize.prize.name_ru }}</div>
                        <div class="prizesview-title" v-if="$i18n.locale == 'uz'">{{ prize.prize.name_uz }}</div>
                        <div class="prizesview-title" v-if="$i18n.locale == 'en'">{{ prize.prize.name_en }}</div>
                        <div class="prizesview-des" v-if="$i18n.locale == 'ru'" v-html="prize.prize.description_ru"></div>
                        <div class="prizesview-des" v-if="$i18n.locale == 'uz'" v-html="prize.prize.description_uz"></div>
                        <div class="prizesview-des" v-if="$i18n.locale == 'en'" v-html="prize.prize.description_en"></div>
                    </div>
                </div>
                <div class="prizesview-content-bottom">
                    <div class="prizesview-promo" v-if="prize.type_id == 1 || prize.type_id == 4">
                        <div class="container">
                            <div class="prizesview-promo-info">
                                <div class="prizesview-promo-info-icon">
                                    <img src="@/assets/images/percent.svg" alt="">
                                </div>
                                <div class="prizesview-promo-info-text">
                                    <div class="prizesview-promo-info-label">{{ $t('prizes.prize1') }}</div>
                                    <div class="prizesview-promo-info-value" v-if="prize.promo_code.substring(0,4) == 'http'"><a :href="prize.promo_code"></a></div>
                                    <div class="prizesview-promo-info-value" v-else>{{ prize.promo_code }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prizesview-back">
                        <div class="container">
                            <button @click="goHome">{{ $t('prizes.prize4') }}</button>
                        </div>
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
    export default {
        name: "PrizesItemView",
        components: {
            Header
        },
        computed: {
            prize() {
                const id = this.$route.params.id
                return this.$store.state.prizes.data.find(prize => prize.id == id);
            }
        },
        methods: {
            goHome(){
                this.$router.push('/')
            },
            format_date(value){
                var data = new Date(value);
                return data.toLocaleString();
            }
        },
    };
</script>

<style lang="scss" scoped>
    .prizesview{
        height: 100%;
        background: linear-gradient(219deg, #F0F 0%, #0073FF 100%);
        &-top{
            padding-bottom: 60px;
        }
        &-logo{
            margin-top: 45px;
            text-align: center;
            img{
                height: 80px;
                max-width: 80%;
            }
        }
        &-content{
            height: calc(100vh - 259px);
            border-radius: 24px 24px 0px 0px;
            background: var(--bg3);
            padding: 20px 0 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &-date{
            font-size: 12px;
            color: var(--text3);
            line-height: 16px;
            margin-bottom: 20px;
        }
        &-title{
            font-size: 24px;
            color: var(--text);
            font-weight: 700;
            line-height: 135%;
            margin-bottom: 12px;
        }
        &-des{
            color: var(--text);
            font-weight: 400;
            line-height: 135%;
            font-size: 14px;
        }
        &-promo{
            background: #34353F;
            padding: 20px 0;
            margin-bottom: 40px;
            .container{
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
            }
            &-info{
                display: flex;
                align-items: center;
                gap: 8px;
                &-label{
                    color: #fff;
                    font-size: 12px;
                    line-height: 135%;
                    margin-bottom: 4px;
                }
                &-value{
                    color: #fff;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 135%;
                    letter-spacing: 1.6px;
                }
            }
            &-copy{
                button{
                    background: none;
                    padding: 0;
                    border: 0;
                    display: flex;
                    gap: 4px;
                    span{
                        color: #0073FF;
                        font-size: 12px;
                        font-weight: 600;
                    }
                }
            }
        }
        &-back{
            button{
                background: linear-gradient(0deg, #0073ff, #00c2ff);
                height: 40px;
                border-radius: 10px;
                line-height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                border: 0;
                gap: 10px;
                margin-bottom: 20px;
                position: relative;
                overflow: hidden;
                color: #fff;
                text-decoration: none;
                font-weight: 700;
                font-size: 14px;
            }
        }
    }
    .prizesview-promo-info-value{
        -moz-user-select: auto;
        -webkit-touch-callout: auto;
        -webkit-user-select: auto;
        -khtml-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        overflow-wrap: anywhere;
        a{
            color: #fff;
            text-decoration: none;
        }
    }
</style>