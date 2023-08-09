<template>
    <div class="wrapper">
        <Header :left="true" :center="true" :centerText="$t('wheel.title')" />
        <div class="pagebox">
            <div class="pagewrapper fortuna">
                <div class="top">
                    <div class="info">
                        <div class="container">
                            <div class="info-box">
                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#fortunaModal" aria-controls="fortunaModal" class="info-text">{{ $t('wheel.info') }}</button>
                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#fortunaModal" aria-controls="fortunaModal"><img src="@/assets/images/info.svg" alt=""></button>
                            </div>
                        </div>
                    </div>
                    <div class="fortuna-des">
                        <div class="container">
                            <div class="title">{{ $t('wheel.title2') }}</div>
                            <div class="des">{{ $t('wheel.des') }}</div>
                        </div>
                    </div>
                </div>
                <div class="roullete">
                    <Roulette 
                        ref="wheel" 
                        :display-shadow="false"
                        :display-border="false"
                        :display-indicator="true"
                        :centered-indicator="false"
                        :counter-clockwise="true"
                        :horizontal-content="false"
                        :size="width"
                        :result-variation="50"
                        :duration="8"
                        :indicator-position="'top'"
                        :base-display="true"
                        :base-display-shadow="false"
                        :base-display-indicator="false"
                        :base-size="120"
                        :easing='"easy"'
                        :base-background="'linear-gradient(54deg, #FCFE5D 0%, #FDDC08 24.02%, #FD9F83 47.72%, #F97DD3 69.57%, #C566E4 100%)'"
                        :items="items" 
                        @wheel-start="wheelStartedCallback"
                        @wheel-end="wheelEndedCallback"
                    >
                        <template #baseContent>
                            <div class="base" @click.once="launchWheel" :disabled="!active">Крутить</div>
                        </template>
                    </Roulette>
                </div>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="fortunaModal" aria-labelledby="fortunaModalLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'ru'">{{ getWheelText?.title_ru }}</h5>
                        <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'uz'">{{ getWheelText?.title_uz }}</h5>
                    </div>
                    <div class="offcanvas-body">
                        <div v-if="$i18n.locale == 'ru'" v-html="getWheelText?.description_ru"></div>
                        <div v-if="$i18n.locale == 'uz'" v-html="getWheelText?.description_uz"></div>
                    </div>
                </div>
                <!-- 100 шансов -->
                <!-- <div class="modal" id="prize0-modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pmodal-content">
                            <div class="pmodal-title">{{ $t('wheel.modal1') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize1.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des" v-html="'100 ' + $t('wheel.modal2')"></div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div> -->
                <div class="amodal" v-if="amodal1 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img :src="'https://promadm.click.uz/' + prize1?.partner[0].photo" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div v-if="$i18n.locale == 'ru'" class="pmodal-des">{{ prize1?.partner[0].name_ru }}</div>
                            <div v-if="$i18n.locale == 'uz'" class="pmodal-des">{{ prize1?.partner[0].name_uz }}</div>
                            <div class="pmodal-code">
                                <input type="text" readonly id="code" :value="prize1?.promo_code">
                                <button type="button" class="pmodal-code-icon">
                                    <img src="@/assets/images/copy.svg" alt="">
                                </button>
                            </div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal2 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize3.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des" v-html="'10 ' + $t('wheel.modal2')"></div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal3 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize4.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">{{ $t('wheel.modal6') }}</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal4 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize5.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des" v-html="$t('wheel.modal7')"></div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal5 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
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
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal6 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize7.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des" v-html="'5 ' + $t('wheel.modal2')"></div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal7 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize6.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des" v-html="$t('wheel.modal10')"></div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal8 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize10.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des" v-html="'1 ' + $t('wheel.modal2')"></div>
                            <button type="button" class="cmodal-btn" @click="goPromo">{{ $t('wheel.modal3') }}</button>
                        </div>
                    </div>
                </div>
                <div class="amodal" v-if="amodal9 == true">
                    <div class="amodal-content">
                        <div class="amodal-body">
                            <div class="pmodal-title">{{ $t('wheel.modal4') }}</div>
                            <div class="pmodal-uzum">
                                <img src="@/assets/images/prizes/prize9.svg" alt="">
                            </div>
                            <div class="pmodal-hr"></div>
                            <div class="pmodal-des">{{ $t('wheel.modal13') }}</div>
                            <button type="button" class="cmodal-btn" @click="goPromo">Крутить еще раз</button>
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
    var audio = new Audio('./audio/wheel.mp3')

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
                        htmlContent: '<div class="priz priz2"><div class="priz-icon"><img src="./img/icons/prize2.svg"></div><div class="priz-title">Промокод в UZUM MARKET</div><div class="priz-img"><img src="./img/icons/prize2-label.svg"></div></div>',
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
                win: null,
                prize1: null,
                active: true,
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                modal7: false,
                modal8: false,
                modal9: false
            };
        },
        computed: {
            ...mapGetters([
                'getWeb',
                'getWheelText'
            ]),
        },
        methods: {
            async launchWheel() {
                this.active = false;
                await api.post(`generatePrize?web_session=${this.getWeb}`).then(res => {
                    if(res.data.data.type_id == 1){
                        this.prize1 = res.data.data
                        this.$refs.wheel.wheelResultIndex.value = 5
                    }
                    if(res.data.data.type_id == 2){
                        this.$refs.wheel.wheelResultIndex.value = 7
                    }
                    if(res.data.data.type_id == 3){
                        if(res.data.data.chances_count == '1'){
                            this.$refs.wheel.wheelResultIndex.value = 8
                        }
                        if(res.data.data.chances_count == '5'){
                            this.$refs.wheel.wheelResultIndex.value = 6
                        }
                        if(res.data.data.chances_count == '10'){
                            this.$refs.wheel.wheelResultIndex.value = 2
                        }
                        if(res.data.data.chances_count == '100'){
                            this.$refs.wheel.wheelResultIndex.value = 0
                        }
                    }
                    if(res.data.data.type_id == 4){
                        this.prize1 = res.data.data
                        this.$refs.wheel.wheelResultIndex.value = 1
                    }
                    if(res.data.data.type_id == 5){
                        this.$refs.wheel.wheelResultIndex.value = 9
                    }
                    if(res.data.data.type_id == 6){
                        this.$refs.wheel.wheelResultIndex.value = 4
                    }
                    if(res.data.data.type_id == 14){
                        this.$refs.wheel.wheelResultIndex.value = 3
                    }
                })
                this.$refs.wheel.launchWheel()
                audio.play();
            },
            wheelStartedCallback(){
            },
            wheelEndedCallback(){
                var winplay = new Audio('./audio/win.mp3')
                winplay.play();
                if(this.$refs.wheel.wheelResultIndex.value == 1){
                    modal1 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 2){
                    modal2 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 3){
                    modal3 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 4){
                    modal4 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 5){
                    modal5 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 6){
                    modal6 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 7){
                    modal7 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 8){
                    modal8 = true
                }
                if(this.$refs.wheel.wheelResultIndex.value == 9){
                    modal9 = true
                }
            },
            goPromo(){
                const modal = new bootstrap.Modal('#prize' + this.$refs.wheel.wheelResultIndex.value + '-modal');
                modal.hide();
                this.$router.push({name: 'prizes'})
            }
        },
    };
</script>

<style lang="scss">
    .pmodal-uzum>img{
        max-height: 60px;
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
            @media screen and (max-height: 745px) and (max-width: 380px) {
                margin-bottom: 20px;
            }
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
                        color: var(--text);
                    }
                }
            }
        }
        .fortuna-des{
            margin-bottom: 30px;
            .title{
                font-size: 28px;
                font-weight: 600;
                color: var(--text);
                text-align: center;
                margin-bottom: 20px;
                line-height: 36px;
            }
            @media screen and (max-height: 745px) {
                .title{
                    font-size: 22px;
                    line-height: 28px;
                }
            }
            .des{
                font-size: 14px;
                font-weight: 600;
                line-height: 135%;
                color: var(--text3);
                text-align: center;
            }
        }
        .roullete{
            margin-bottom: -150px;
            margin-left: -60px;
            text-align: center;
            position: relative;
            overflow: hidden;
            padding-top: 54px;
            @media screen and (max-height: 750px) {
                margin-bottom: -200px;
            }
            .wheel-container{
                overflow: hidden;
                border: 2px solid #fff;
                .wheel-item{
                    border: 2px solid #fff;
                }
                .wheel-base-container{
                    border: 2px solid #fff;
                }
            }
            @keyframes animate {
                0% {
                  background-position: 0 0;
                }
                50% {
                  background-position: 400% 0;
                }
                100% {
                  background-position: 0 0;
                }
              }
            .wheel-container-indicator:before{
                content: none !important;
            }
        }
        .roullete::before{
            content: '';
            left: calc(50% - -5px);
            z-index: 999;
            position: absolute;
            width: 54px;
            height: 64px;
            border: 0;
            top: 0;
            background: url(../assets/images/wheel.svg) no-repeat;
            background-size: cover;
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
        color: #000;
        font-weight: 700;
        font-size: 18px;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        &::before{
            position: absolute;
            content: '';
            top: -2px;
            left: -2px;
            height: calc(100% + 4px);
            width: calc(100% + 4px);
            border-radius: 5px;
            z-index: -1;
            opacity: 1;
            filter: blur(20px);
            background: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
            background-size: 400%;
            transition: opacity .3s ease-in-out;
            animation: animate 5s linear infinite;
            border-radius: 50%;
        }
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
    .pmodal-code{
        input{
            -moz-user-select: auto;
            -webkit-touch-callout: auto;
            -webkit-user-select: auto;
            -khtml-user-select: auto;
            -moz-user-select: auto;
            -ms-user-select: auto;
            user-select: auto;
        }
    }
</style>