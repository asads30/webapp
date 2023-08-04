<template>
    <div class="start">
        <div class="start-top">
            <div class="container">
                <div class="start-title">Click разыгрывает<br />BYD и множество других призов</div>
                <div class="start-img">
                    <img src="@/assets/images/main.png" alt="">
                </div>
            </div>
        </div>
        <div class="start-bottom">
            <div class="container">
                <ul class="nav nav-tabs start-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">У меня есть<br />промокод</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Я самостоятельно узнал(а) об акции</button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="start-content">
                            <div class="start-content-top">
                                <div class="start-content-text">Введите промокод от друга, чтобы увеличить шансы на победу у обоих!</div>
                                <div class="start-content-text"><span>+2</span> шанса на участие</div>
                                <div class="start-content-text"><span>+2</span> возможности крутить колесо</div>
                                <div class="start-content-input">
                                    <input type="text" placeholder="Промокод" v-model="promocode">
                                </div>
                            </div>
                            <div class="start-content-bottom">
                                <div class="start-content-privacy">Нажимая кнопку Участвовать в акции, вы соглашаетесь с <button>условиями акции</button> «ID марафон»</div>
                                <button class="start-content-btn" :disabled="promocode.length != 6" @click="goAction">Участвовать в акции</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="start-content">
                            <div class="start-content-top">
                                <div class="start-content-text">Становитесь участником самой масштабной акции!</div>
                            </div>
                            <div class="start-content-bottom">
                                <div class="start-content-privacy">Нажимая кнопку Участвовать в акции, вы соглашаетесь с <button>условиями акции</button> «ID марафон»</div>
                                <button class="start-content-btn" @click="goActionNot">Участвовать в акции</button>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {api} from '@/boot/axios'
    
    export default {
        name: 'StartView',
        data() {
            return {
                promocode: ''
            }
        },
        computed: {
            cookie(){
                return this.$route.query.web
            }
        },
        methods: {
            async goAction(){
                const data = {
                    web_session: this.cookie,
                    active: 'ref',
                    ref: this.promocode
                }
                await api.post('me', data).then(res => {
                    if(res.data.status == 200){
                        try {
                            this.$store.commit('setUser', res.data.data)
                        } catch (error) {
                            console.log(error)
                        }
                        this.$router.push({ name: 'home', query: { method: 'code' } })
                    }
                })
            },
            async goActionNot(){
                const data = {
                    web_session: this.cookie,
                    active: true
                }
                await api.post('me', data).then(res => {
                    if(res){
                        this.$router.push({ name: 'home', query: { method: 'nocode' } })
                    }
                })
            }
        },
    }
</script>

<style lang="scss">
    .start{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
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
                    &:focus{
                        border-color: #0073FF;
                        box-shadow: none;
                        outline: 0;
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