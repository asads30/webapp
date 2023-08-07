<template>
    <div class="start">
        <div class="start-top">
            <div class="container">
                <div class="start-title" v-html="$t('start.start1')"></div>
                <div class="start-img">
                    <img src="@/assets/images/ident/main.png" alt="">
                </div>
            </div>
        </div>
        {{ getWeb }}
        <div class="start-bottom">
            <div class="container">
                <ul class="nav nav-tabs start-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" v-html="$t('start.start2')"></button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{{ $t('start.start3') }}</button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="start-content">
                            <div class="start-content-top">
                                <div class="start-content-text">{{ $t('start.start4') }}</div>
                                <div class="start-content-text"><span>+2</span> {{ $t('start.start5') }}</div>
                                <div class="start-content-text"><span>+2</span> {{ $t('start.start6') }}</div>
                                <div class="start-content-input">
                                    <input type="text" :placeholder="$t('prizes.prize1')" v-model="promocode" maxlength="6">
                                </div>
                            </div>
                            <div class="start-content-bottom">
                                <div class="start-content-privacy">{{ $t('start.start7') }} <button data-bs-toggle="offcanvas" data-bs-target="#infoModal" aria-controls="infoModal">{{$t('start.start8')}}</button> {{ $t('start.start9') }}</div>
                                <button class="start-content-btn" :disabled="promocode.length != 6" @click="goAction">{{ $t('start.start11') }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="start-content">
                            <div class="start-content-top">
                                <div class="start-content-text">{{ $t('start.start10') }}</div>
                            </div>
                            <div class="start-content-bottom">
                                <div class="start-content-privacy">{{ $t('start.start7') }} <button data-bs-toggle="offcanvas" data-bs-target="#infoModal" aria-controls="infoModal">{{$t('start.start8')}}</button> {{ $t('start.start9') }}</div>
                                <button class="start-content-btn" @click="goActionNot">{{ $t('start.start11') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="infoModal" aria-labelledby="infoModalLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'ru'">{{ getRulesText?.title_ru }}</h5>
                <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'uz'">{{ getRulesText?.title_uz }}</h5>
            </div>
            <div class="offcanvas-body">
                <div v-if="$i18n.locale == 'ru'" v-html="getRulesText?.description_ru"></div>
                <div v-if="$i18n.locale == 'uz'" v-html="getRulesText?.description_uz"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {api} from '@/boot/axios'
    import {mapGetters} from 'vuex'

    export default {
        name: 'StartView',
        data() {
            return {
                promocode: ''
            }
        },
        computed: {
            ...mapGetters([
                'getWeb',
                'getUser',
                'getRulesText'
            ]),
        },
        mounted() {
            if(this.getUser){
                this.$router.push('/')
            }
        },
        methods: {
            async goAction(){
                const data = {
                    web_session: this.getWeb,
                    active: 'ref',
                    ref: this.promocode,
                    lang: this.$i18n.locale
                }
                await api.post('me', data).then(res => {
                    if(res.data.status == 200){
                        try {
                            this.$store.commit('setUser', res.data.data)
                        } catch (error) {
                            console.log(error)
                        }
                        this.$router.push({ name: 'home', query: { method: 'code' }})
                    }
                })
            },
            async goActionNot(){
                const data = {
                    web_session: this.getWeb,
                    active: true,
                    lang: this.$i18n.locale
                }
                await api.post('me', data).then(res => {
                    if(res.data.status == 200){
                        try {
                            this.$store.commit('setUser', res.data.data)
                        } catch (error) {
                            console.log(error)
                        }
                        this.$router.push({ name: 'home', query: { method: 'nocode' }})
                    }
                })
            },
        }
    }
</script>

<style lang="scss">
    .start{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        background: #242429;
        &-title{
            font-size: 24px;
            font-weight: 700;
            line-height: 26px;
            margin-bottom: 16px;
            height: 78px;
        }
        &-img{
            text-align: center;
            height: 160px;
            img{
                max-width: 100%;
                max-height: 160px;
            }
        }
        &-bottom{
            height: calc(100vh - 318px);
            padding: 30px 0 0;
            overflow-y: auto;
        }
        &-tabs{
            display: flex;
            border: 0;
            margin-bottom: 10px;
            .nav-item{
                width: 50%;
                flex-wrap: nowrap;
                .nav-link{
                    background: rgba(255, 255, 255, 0.12);
                    width: 100%;
                    border-radius: 0;
                    font-size: 12px;
                    color: #fff;
                    border: 0;
                    &.active{
                        background: #1F84FF;
                    }
                }
                &:first-child{
                    .nav-link{
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                    }
                }
                &:last-child{
                    .nav-link{
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }
                }
            }
        }
        &-content{
            height: calc(100vh - 409px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &-bottom{
                padding-top: 15px;
                padding-bottom: 40px;
            }
            &-text{
                font-size: 14px;
                span{
                    color: #FCFE5D;
                }
            }
            &-input{
                margin: 16px 0;
                input{
                    width: 100%;
                    background: #E2E4F0;
                    border: 1px solid #E2E4F0;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    border-radius: 10px;
                    text-transform: uppercase;
                    color: #000;
                    font-weight: 900;
                    font-size: 18px;
                    &:focus{
                        border-color: #0073FF;
                        box-shadow: none;
                        outline: 0;
                    }
                    &::placeholder{
                        font-weight: 300;
                    }
                    &:-ms-input-placeholder{
                        font-weight: 300;
                    }

                }
            }
            &-privacy{
                font-size: 12px;
                margin-bottom: 16px;
                button{
                    padding: 0;
                    border: 0;
                    background: none;
                    text-decoration: underline;
                    color: #fff;
                }
            }
            &-btn{
                border-radius: 10px;
                background: linear-gradient(0deg, #0073FF 0%, #00C2FF 100%), #FFF;
                height: 40px;
                line-height: 40px;
                border: 0;
                width: 100%;
                color: #fff;
                display: block;
                text-align: center;
                text-decoration: none;
                font-size: 14px;
                font-weight: 700;
                &:disabled{
                    background: #363744;
                    color: #575965;
                }
            }
        }
    }
</style>