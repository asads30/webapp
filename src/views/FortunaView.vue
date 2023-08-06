<template>
    <div class="wrapper">
        <Header :left="true" :center="true" :centerText="'Колесо фортуны'" />
        <div class="pagebox">
            <div class="pagewrapper fortuna">
                <div class="top">
                    <div class="info">
                        <div class="container">
                            <div class="info-box">
                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#fortunaModal" aria-controls="fortunaModal" class="info-text">Инфо о рулетке</button>
                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#fortunaModal" aria-controls="fortunaModal"><img src="@/assets/images/info.svg" alt=""></button>
                            </div>
                        </div>
                    </div>
                    <div class="fortuna-des">
                        <div class="container">
                            <div class="title">Крутите рулетку и получайте ценные призы</div>
                            <div class="des">Вы можете крутить и выигрывать призы два раза в сутки! Чем выше шанс - тем выше призы.</div>
                        </div>
                    </div>
                </div>
                <div class="roullete">
                    <Roulette 
                        ref="wheel" 
                        :display-shadow="false"
                        :display-border="false"
                        :display-indicator="true"
                        :centered-indicator="true"
                        :counter-clockwise="true"
                        :horizontal-content="false"
                        :size="width"
                        :result-variation="50"
                        :duration="7"
                        :indicator-position="'top'"
                        :base-display="true"
                        :base-display-shadow="false"
                        :base-display-indicator="false"
                        :base-size="120"
                        :easing='"bounce"'
                        :base-background="'linear-gradient(54deg, #FCFE5D 0%, #FDDC08 24.02%, #FD9F83 47.72%, #F97DD3 69.57%, #C566E4 100%)'"
                        :items="items" 
                        @click.once="launchWheel"
                        @wheel-start="wheelStartedCallback"
                        @wheel-end="wheelEndedCallback"
                    >
                        <template #baseContent>
                            <div v-html="base"></div>
                        </template>
                    </Roulette>
                </div>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="fortunaModal" aria-labelledby="fortunaModalLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="fortunaModalLabel">Колесо фортуны</h5>
                    </div>
                    <div class="offcanvas-body">
                      <div>
                        <p>Крутите колесо, пока ждете розыгрыш основных призов и проверьте свою удачу! Выигрывайте гарантированные призы от Click сразу после прокрутки или копите шансы на победу!</p>
                        <p><strong>Каждый участник получает возможность прокрутить в трех случаях:</strong></p>
                        <p>1. При активации акции</p>
                        <p>2. Каждую новую неделю после активации акции</p>
                        <p>3. Каждый раз, когда новый друг принимает приглашение</p>
                        <p>Прокручивание колеса дает участнику один из гарантированных призов:</p>
                        <ul>
                          <li>Premium-подписка от Click</li>
                          <li>5000 сумов на кошелек от Click</li>
                          <li>Призы от партнера Uzum</li>
                          <li>+1 к победе в розыгрыше основных призов</li>
                          <li>+5 к победе в розыгрыше основных призов</li>
                          <li>+10 к победе в розыгрыше основных призов</li>
                          <li>+100 к победе в розыгрыше основных призов</li>
                          <li>2Х всех имеющихся шансов</li>
                          <li>Сектор «Крутить заново»</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div class="modal" id="prize0-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Вы практически выиграли!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize1.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">100 шансов на участие<br />в розыгрыше основных призов</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize1-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Поздравляем, вы выиграли!</div>
                            <div class="pmodal-uzum">
                                <img :src="'https://promadm.click.uz/' + prize1?.partner[0].photo" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">{{ prize1?.partner[0].name }}</div>
                            <div class="pmodal-code">
                                <input type="text" readonly id="code" :value="prize1?.promo_code">
                                <button type="button" class="pmodal-code-icon">
                                    <img src="@/assets/images/copy.svg" alt="">
                                </button>
                            </div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize2-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Вы практически выиграли!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize3.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">10 шансов на участие<br />в розыгрыше основных призов</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize3-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Ничего себе! Ваши шансы удвоены!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize4.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">2Х всех имеющихся шансов на участие в розыгрыше основных призов</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize4-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Поздравляем, вы выиграли!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize5.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">5000 сум на ваш <br />Click-кошелек</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize5-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Поздравляем, вы выиграли!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/uzum.png" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">Промокод на 10 000 сумов<br />в Uzum Market</div>
                            <div class="pmodal-code">
                                <input type="text" readonly id="code" value="HR10U00">
                                <button type="button" class="pmodal-code-icon">
                                    <img src="@/assets/images/copy.svg" alt="">
                                </button>
                            </div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize6-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Теперь у вас еще больше шансов на участие!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize7.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">5 шансов на участие в розыгрыше основных призов</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize7-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Поздравляем, вы выиграли!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize6.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">Бесплатную Premium-подписку<br />на 30 дней</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize8-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">У вас еще один шанс на победу!</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize10.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">1 шанс к участию в розыгрыше основных призов</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="prize9-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">Сектор «Крутить заново»</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize9.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">У вас есть возможность покрутить колесо еще раз!</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Получить награду</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import Header from '@/components/Header'
    import { Roulette } from "vue3-roulette"
    import { api } from '@/boot/axios'
    import {mapGetters} from 'vuex'

    export default {
        name: "FortunaView",
        components: {
            Roulette,
            Header
        },
        data() {
            return {
                items: [
                    {
                        id: 1,
                        name: "prize1",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize1.svg"></div><div class="priz-title">К шансу участие в розыгрыше главных призов</div><div class="priz-img"><img src="./img/icons/prize1-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(329deg, #4109EB 0%, #00C2FF 100%)",
                    },
                    {
                        id: 2,
                        name: "prize2",
                        htmlContent: '<div class="priz priz2"><div class="priz-icon"><img src="./img/icons/prize2.svg"></div><div class="priz-title">Промокод на 10 000 сум в UZUM MARKET</div><div class="priz-img"><img src="./img/icons/prize2-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(29deg, #8341EF 0%, #3F68F9 100%)",
                    },
                    {
                        id: 3,
                        name: "prize3",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize3.svg"></div><div class="priz-title">К шансу участие в розыгрыше главных призов</div><div class="priz-img"><img src="./img/icons/prize1-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(329deg, #4109EB 0%, #00C2FF 100%)",
                    },
                    {
                        id: 4,
                        name: "prize4",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize4.svg"></div><div class="priz-title">Всех имеющихся шансов</div><div class="priz-img"><img src="./img/icons/prize1-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(329deg, #4109EB 0%, #00C2FF 100%)",
                    },
                    {
                        id: 5,
                        name: "prize5",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize5.svg"></div><div class="priz-title">сумов кешбек на кошелек</div><div class="priz-img"><img src="./img/icons/prize3-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(329deg, #4109EB 0%, #00C2FF 100%)",
                    },
                    {
                        id: 6,
                        name: "prize6",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize6.png"></div><div class="priz-title">Приз от нашего партнера</div><div class="priz-img"><img src="./img/icons/prize4-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(29deg, #8341EF 0%, #3F68F9 100%)",
                    },
                    {
                        id: 7,
                        name: "prize7",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize7.svg"></div><div class="priz-title"> К шансу участие в розыгрыше главных призов</div><div class="priz-img"><img src="./img/icons/prize1-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(329deg, #4109EB 0%, #00C2FF 100%)",
                    },
                    {
                        id: 8,
                        name: "prize8",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize8.svg"></div><div class="priz-title">Премиум подписка на 30 дней</div><div class="priz-img"><img src="./img/icons/prize2-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(29deg, #8341EF 0%, #3F68F9 100%)",
                    },
                    {
                        id: 9,
                        name: "prize9",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize10.svg"></div><div class="priz-title">К шансу участие в розыгрыше главных призов</div><div class="priz-img"><img src="./img/icons/prize1-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(329deg, #4109EB 0%, #00C2FF 100%)",
                    },
                    {
                        id: 10,
                        name: "prize10",
                        htmlContent: '<div class="priz"><div class="priz-icon"><img src="./img/icons/prize9.svg"></div><div class="priz-title">Сектор крутить заново</div><div class="priz-img"><img src="./img/icons/prize2-label.svg"></div></div>',
                        textColor: "#fff",
                        background: "linear-gradient(29deg, #8341EF 0%, #3F68F9 100%)",
                    },
                ],
                width: window.innerWidth + 120,
                base: '<div class="base">Крутить</div>',
                win: null,
                prize1: null
            };
        },
        computed: {
            ...mapGetters([
                'getWeb'
            ]),
        },
        methods: {
            async launchWheel() {
                await api.post(`generatePrize?web_session=${this.getWeb}`).then(res => {
                    if(res.data.data.type_id == 1){
                        this.prize1 = res.data.data
                        this.$refs.wheel.wheelResultIndex.value = 1
                        console.log(res.data.data.partner)
                    }
                })
                this.$refs.wheel.launchWheel()
            },
            wheelStartedCallback(){
                console.log('wheelStartedCallback')
            },
            wheelEndedCallback(){
                if(this.$refs.wheel.wheelResultIndex.value == 1){
                    const modal1 = new bootstrap.Modal('#prize1-modal');
                    modal1.show();
                }
            },
            goCode(){
                this.$router.push({name: 'prizes'})
            }
        },
    };
</script>

<style lang="scss">
    .pmodal-uzum>img{
        max-height: 40px;
    }
    .pagewrapper{
        height: calc(100vh - 74px);
        position: relative;
        overflow: hidden;
    }
    .pagebox{
        height: calc(100vh - 74px);
        position: relative;
        overflow: hidden;
    }
    .fortuna{
        padding: 20px 0 0 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .info{
            margin-bottom: 30px;
            .container{
                display: flex;
                justify-content: flex-end;
                .info-box{
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    button{
                        background: none;
                        border: 0;
                        padding: 0;
                        height: 20px;
                        img{
                            vertical-align: baseline;
                        }
                    }
                    .info-text{
                        font-size: 12px;
                        color: #B3B7CE;
                    }
                }
            }
        }
        .fortuna-des{
            margin-bottom: 50px;
            .title{
                font-size: 28px;
                font-weight: 600;
                color: #fff;
                text-align: center;
                margin-bottom: 20px;
                line-height: 36px;
            }
            .des{
                font-size: 14px;
                font-weight: 600;
                line-height: 135%;
                color: #B3B7CE;
                text-align: center;
            }
        }
        .roullete{
            position: absolute;
            bottom: -150px;
            left: -60px;
            text-align: center;
            @media screen and (max-height: 750px) {
                bottom: -200px;
            }
            .wheel-container{
                overflow: inherit;
                border: 2px solid #fff;
                .wheel-item{
                    border: 2px solid #fff;
                }
                .wheel-base-container{
                    border: 2px solid #fff;
                }
            }
            .wheel-container-indicator:before{
                width: 54px;
                height: 64px;
                border: 0;
                top: -54px;
                background: url(../assets/images/bounce.svg) no-repeat;
                background-size: cover;
                filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.35));
            }
        }
    }
    .priz{
        .priz-icon{
            margin-bottom: 10px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                max-width: 100px;
            }
        }
        .priz-title{
            max-width: 90px;
            font-size: 10px;
            font-weight: 600;
            line-height: 130%;
            margin: 0 auto 15px;
            height: 40px;
        }
    }
    .priz3{
        .priz-icon{

        }
    }
    .base{
        color: #242429;
        font-weight: 700;
        font-size: 18px;
    }
        .title{
            color: #363845;
            text-align: center;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        .logo{
            text-align: center;
            padding: 0 0 12px;
            border-bottom: 1px solid  rgba(0, 0, 0, 0.10);
            margin-bottom: 20px;
            img{
                max-height: 40px;
            }
        }
        .promo{
            color: #363845;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            margin-bottom: 12px;
        }
    .code{
        position: relative;
        margin-bottom: 20px;
        input{
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.35);
            background: #E2E4F0;
            color: #363845;
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            height: 36px;
            line-height: 36px;
            width: 100%;
        }
        .copy{
            position: absolute;
            right: 16px;
            top: 8px;
            border: 0;
            background: none;
            padding: 0;
        }
    }
</style>