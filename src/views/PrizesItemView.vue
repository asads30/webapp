<template>
    <div class="page">
        <div class="prizesview" :style="'background: ' + prize.prize.background" v-if="prize">
            <div class="prizesview-top">
                <Header :left="true" :center="true" :centerText="$t('prizes.prize2')" :leftText="'prizes'"/>
                <div class="prizesview-logo">
                    <img :src="'https://promadm.click.uz/' + prize.prize.photo">
                </div>
            </div>
            <div class="prizesview-content">
                <div class="prizesview-content-top">
                    <div class="container">
                        <div class="prizesview-date">{{ format_date(prize.prize.created_at) }}</div>
                        <div class="prizesview-title">{{ prize.prize.name_ru }}</div>
                        <div class="prizesview-des" v-html="prize.prize.description_ru"></div>
                    </div>
                </div>
                <div class="prizesview-content-bottom">
                    <div class="prizesview-promo" v-if="prize.type_id == 0">
                        <div class="container">
                            <div class="prizesview-promo-info">
                                <div class="prizesview-promo-info-icon">
                                    <img src="@/assets/images/percent.svg" alt="">
                                </div>
                                <div class="prizesview-promo-info-text">
                                    <div class="prizesview-promo-info-label">{{ $t('prizes.prize1') }}</div>
                                    <div class="prizesview-promo-info-value">{{ prize.prize.promocode }}</div>
                                </div>
                            </div>
                            <div class="prizesview-promo-copy">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_1145_8566)">
                                        <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="#0073FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.33398 10.0002H2.66732C2.3137 10.0002 1.97456 9.85969 1.72451 9.60964C1.47446 9.35959 1.33398 9.02045 1.33398 8.66683V2.66683C1.33398 2.31321 1.47446 1.97407 1.72451 1.72402C1.97456 1.47397 2.3137 1.3335 2.66732 1.3335H8.66732C9.02094 1.3335 9.36008 1.47397 9.61013 1.72402C9.86018 1.97407 10.0007 2.31321 10.0007 2.66683V3.3335" stroke="#0073FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1145_8566">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{{ $t('prizes.prize3') }}</span>
                                </button>
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
                return this.$store.state.prizes.find(prize => prize.id == id);
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
</style>