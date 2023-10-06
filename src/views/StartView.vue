<template>
    <div class="start">
        <Header :left="false" :right="false" :center="true" :centerText="$t('stock')"/>
        <div class="start-box">
            <div class="start-top">
                <div class="start-text">
                    <div class="container">
                        <div class="start-toptitle">{{ $t('start.start13') }}</div>
                        <div class="start-subtitle">{{ $t('start.start14') }}</div>
                        <div class="start-title">{{ $t('start.start15') }}</div>
                        <div class="start-bottitle">{{ $t('start.start16') }}</div>
                        <div class="start-bottomtitle">{{ $t('start.start17') }}</div>
                        <div class="start-soc">
                            <div class="start-soc-item">
                                <div class="start-soc-item-img">
                                    <img src="@/assets/images/start/tg.svg" alt="">
                                </div>
                                <div class="start-soc-item-text">@click_uz</div>
                            </div>
                            <div class="start-soc-item">
                                <div class="start-soc-item-img">
                                    <img src="@/assets/images/start/insta.svg" alt="">
                                </div>
                                <div class="start-soc-item-text">@clickuz</div>
                            </div>
                            <div class="start-soc-item">
                                <div class="start-soc-item-img">
                                    <img src="@/assets/images/start/yt.svg" alt="">
                                </div>
                                <div class="start-soc-item-text">@clickuz6549</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="start-byd">
                    <img src="@/assets/images/start/byd.png" alt="">
                </div>
            </div>
            <div class="start-bottom">
                <div class="container">
                    <a href="https://click.uz/ru/offer-maraphone" class="start-offer" v-if="$i18n.locale == 'ru'">{{ $t('start.offer') }}</a>
                    <a href="https://click.uz/uz/offer-maraphone" class="start-offer" v-if="$i18n.locale == 'uz'">{{ $t('start.offer') }}</a>
                    <a href="https://click.uz/ru/offer-maraphone" class="start-offer" v-if="$i18n.locale == 'en'">{{ $t('start.offer') }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Header from '@/components/Header'

    export default {
        name: 'StartView',
        components: {
            Header
        },
        computed: {
            ...mapGetters([
                'getWeb',
                'getUser',
                'getRulesText'
            ]),
        }
    }
</script>

<style lang="scss">
    .start{
        background: url(../assets/images/start/background.jpg) 100% no-repeat;
        background-size: cover;
        background-position: left top;
        height: 100vh;
        color: #fff;
        &-box{
            height: calc(100vh - 74px);
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        &-text{
            padding-top: 20px;
        }
        &-toptitle{
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 20px;
            color: #fff;
            @media screen and (max-width: 355px) {
                font-size: 16px;
            }
        }
        &-subtitle{
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 5px;
            @media screen and (max-width: 355px) {
                font-size: 16px;
                line-height: 16px;
            }
        }
        &-title{
            background: linear-gradient(54deg, #FCFE5D -3.58%, #FDDC08 23.61%, #FD9F83 50.44%, #F97DD3 75.18%, #C566E4 109.63%);
            background-clip: text;
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 5px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 40px;
            @media screen and (max-width: 355px) {
                font-size: 32px;
                line-height: 32px;
            }
        }
        &-bottitle{
            font-size: 24px;
            line-height: 24px;
            font-weight: 400;
            margin-bottom: 40px;
        }
        &-bottomtitle{
            font-size: 14px;
            margin-bottom: 15px;
        }
        &-soc{
            display: flex;
            gap: 15px;
            -webkit-touch-callout: auto;
            -webkit-user-select: auto;
            -khtml-user-select: auto;
            -moz-user-select: auto;
            -ms-user-select: auto;
            user-select: auto;
            &-item{
                display: flex;
                align-items: center;
                gap: 4px;
                &-img{
                    width: 25px;
                    height: 25px;
                    border-radius: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #fff;
                    img{
                        width: 19px;
                    }
                }
                &-text{
                    font-size: 14px;
                }
            }
            @media screen and (max-width: 355px) {
                gap: 8px;
                &-item{
                    gap: 4px;
                    &-img{
                        width: 22px;
                        height: 22px;
                        img{
                            width: 16px;
                        }
                    }
                    &-text{
                        font-size: 10px;
                    }
                }
            }
        }
        &-byd{
            img{
                width: calc(100% - 25px);
            }
        }
        &-bottom{
            padding-bottom: 20px;
            text-align: center;
        }
        &-offer{
            font-size: 12px;
            text-decoration: underline;
            background: none;
            padding: 0;
            border: 0;
            color: #fff;
        }
    }
    
</style>