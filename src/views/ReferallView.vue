<template>
  <div class="referall">
      <Header :left="true" :right="false" :center="true" :centerText="'Мои приглашения'"/>
      <div class="referall-wrapper">
          <div class="referall-tabs">
              <div class="container">
                  <div class="referall-box">
                      <ul class="nav nav-tabs ref-tabs" id="refTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="ref-tab" data-bs-toggle="tab" data-bs-target="#ref-tab-pane" type="button" role="tab" aria-controls="ref-tab-pane" aria-selected="true">Пригласить</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="my-tab" data-bs-toggle="tab" data-bs-target="#my-tab-pane" type="button" role="tab" aria-controls="my-tab-pane" aria-selected="false">Мои приглашения</button>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
            <div class="tab-content" id="refTabContent">
                <div class="tab-pane fade show active" id="ref-tab-pane" role="tabpanel" aria-labelledby="ref-tab" tabindex="0">
                    <div class="ref-content">
                        <div class="ref-box-top">
                            <div class="container">
                                <div class="ref-img">
                                    <img src="@/assets/images/referall-img.svg" alt="">
                                </div>
                                <div class="ref-title">Пригласите друзей увеличивайте ваши шансы </div>
                                <div class="ref-des">Если ваш друг введет ваш промокод, вы получите +1 шанс на участие и дополнительную возможность крутить колесо фортуны.<br />А ваш друг получит +2 шанса на участие и возможность 2 раза крутить колесо.</div>
                            </div>
                        </div>
                        <div class="ref-box-bottom">
                            <div class="container">
                                <div class="referall-code">
                                    <div class="referall-codebox">
                                        <div class="code-title">Ваш код приглашения</div>
                                        <input class="code-number" readonly :value="getUser.ref" id="code" ref="code">
                                    </div>
                                    <button class="referall-copy" @click="$refs.code.select()">
                                        <img src="@/assets/images/copy.svg" alt="">
                                        <span>Выделить</span>
                                    </button>
                                </div>
                                <div class="ref-invite">
                                    <button>
                                        Пригласить 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="type2">
                                            <path d="M3.58268 3.83333C3.58268 2.68274 4.51542 1.75 5.66602 1.75C6.81661 1.75 7.74935 2.68274 7.74935 3.83333C7.74935 4.98392 6.81661 5.91667 5.66602 5.91667C4.51542 5.91667 3.58268 4.98392 3.58268 3.83333ZM5.66602 0.5C3.82507 0.5 2.33268 1.99238 2.33268 3.83333C2.33268 5.67428 3.82507 7.16667 5.66602 7.16667C7.50693 7.16667 8.99935 5.67428 8.99935 3.83333C8.99935 1.99238 7.50693 0.5 5.66602 0.5ZM11.916 4.66667C11.916 3.97631 12.4757 3.41667 13.166 3.41667C13.8563 3.41667 14.416 3.97631 14.416 4.66667C14.416 5.35702 13.8563 5.91667 13.166 5.91667C12.4757 5.91667 11.916 5.35702 11.916 4.66667ZM13.166 2.16667C11.7853 2.16667 10.666 3.28596 10.666 4.66667C10.666 6.04737 11.7853 7.16667 13.166 7.16667C14.5468 7.16667 15.666 6.04737 15.666 4.66667C15.666 3.28596 14.5468 2.16667 13.166 2.16667ZM2.54102 8.83333C1.50548 8.83333 0.666016 9.67283 0.666016 10.7083V10.9176V10.9185L0.666024 10.9207L0.666074 10.9259L0.666307 10.9398C0.666549 10.9505 0.666991 10.9642 0.667766 10.9809C0.669316 11.0141 0.672224 11.0587 0.677666 11.1132C0.688524 11.2217 0.709624 11.3708 0.750724 11.547C0.832641 11.898 0.996466 12.367 1.32587 12.8376C2.00823 13.8124 3.30917 14.6667 5.66602 14.6667C6.80682 14.6667 7.70027 14.4665 8.39585 14.1494C8.27168 13.7376 8.19518 13.305 8.17285 12.8583C7.63543 13.1757 6.84324 13.4167 5.66602 13.4167C3.64787 13.4167 2.7613 12.7084 2.34991 12.1207C2.13244 11.8101 2.02283 11.4978 1.96802 11.2629C1.94077 11.1461 1.92768 11.051 1.92146 10.9888C1.91836 10.9578 1.91699 10.9352 1.91641 10.9227L1.91602 10.9123V10.7083C1.91602 10.3632 2.19584 10.0833 2.54102 10.0833H8.77618C8.98327 9.68608 9.2381 9.31775 9.5331 8.98592C9.30552 8.88775 9.0546 8.83333 8.79102 8.83333H2.54102ZM18.166 12.5833C18.166 10.052 16.114 8 13.5827 8C11.0514 8 8.99935 10.052 8.99935 12.5833C8.99935 15.1147 11.0514 17.1667 13.5827 17.1667C16.114 17.1667 18.166 15.1147 18.166 12.5833ZM13.9999 13L14.0003 15.0862C14.0003 15.3164 13.8138 15.5029 13.5836 15.5029C13.3535 15.5029 13.1669 15.3164 13.1669 15.0862L13.1665 13H11.079C10.8491 13 10.6628 12.8135 10.6628 12.5833C10.6628 12.3532 10.8491 12.1667 11.079 12.1667H13.1664L13.166 10.0827C13.166 9.85258 13.3526 9.66608 13.5827 9.66608C13.8128 9.66608 13.9993 9.85258 13.9993 10.0827L13.9998 12.1667H16.0798C16.3098 12.1667 16.4961 12.3532 16.4961 12.5833C16.4961 12.8135 16.3098 13 16.0798 13H13.9999Z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <div class="tab-pane fade" id="my-tab-pane" role="tabpanel" aria-labelledby="my-tab" tabindex="0">
                <div class="chances">
                  <div class="chances-top">
                      <div class="container">
                          <div class="chances-title">Вы пригласили <span>0 пользователей</span></div>
                      </div>
                  </div>
                  <div class="chances-items">
                      <div class="container">
                          <div class="chances-list">
                              <div class="chances-item" v-for="(referall, key) in getReferall" :key="referall">
                                  <div class="chances-date">{{ key }}</div>
                                  <div class="chances-group" v-for="group in referall" :key="group">
                                      <div class="chances-group-left">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z" fill="#4CAF50"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3107 7.04297C16.7012 7.43349 16.7012 8.06666 16.3107 8.45718L10.1036 14.9572C9.71307 15.3477 9.0799 15.3477 8.68938 14.9572L5.68938 11.9572C5.29885 11.5667 5.29885 10.9335 5.68938 10.543C6.0799 10.1524 6.71307 10.1524 7.10359 10.543L9.39648 12.8359L14.8965 7.04297C15.287 6.65244 15.9202 6.65244 16.3107 7.04297Z" fill="white"/>
                                          </svg>
                                          <span>{{ format_date(group.created_at) }}</span>
                                      </div>
                                      <div class="chances-group-right">
                                          <div class="chanc">{{ group.phone_number }}</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import {api} from '@/boot/axios'
import {mapGetters} from 'vuex'

export default {
    name: 'ReferallView',
    components: {
        Header,
    },
    methods: {
      format_date(value){
        var data = new Date(value);
        return data.toLocaleTimeString();
      },
    },
    computed: {
        ...mapGetters([
            'getReferall',
            'getUser',
            'getWeb'
        ])
    },
    mounted(){
        api.get(`myReferrals?web_session=${this.getWeb}`).then(res => {
            this.$store.commit('setReferall', res.data)
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

<style lang="scss">
.ref-tabs{
    display: flex;
    border: 0;
    .nav-item{
        width: 50%;
        flex-wrap: nowrap;
        .nav-link{
            background: rgba(255, 255, 255, 0.12);
            width: 100%;
            border-radius: 0;
            font-size: 12px;
            color: #B3B7CE;
            border: 0;
            &.active{
                background: #1F84FF;
                color: #fff;
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
.ref-content{
    height: calc(100vh - 107px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ref-box-top{
    padding-top: 20px;
}
.ref-img{
    text-align: center;
    margin-bottom: 35px;
}
.ref-title{
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 15px;
}
.ref-des{
    line-height: 16px;
    letter-spacing: 0.5px;
    font-size: 12px;
    margin-bottom: 30px;
}
.ref-box-bottom{
    padding-bottom: 40px;
    padding-top: 40px;
    border-radius: 0px 0px 24px 24px;
    background: #1B1B1F;
    .referall-codebox{
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: calc(100% - 131px);
        .code-title{
            font-size: 10px;
            color: #B3B7CE;
            font-weight: 600;
        }
        input{
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.35);
            width: 100%;
            height: 36px;
            line-height: 36px;
            padding: 0 12px;
            background: none;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
        }
    }
    .referall-copy{
        border-radius: 10px;
        background: #fff;
        border: 0;
        padding: 0 12px;
        height: 36px;
        line-height: 36px;
        display: flex;
        align-items: center;
        gap: 4px;
        width: 119px;
        span{
            font-size: 12px;
            color: #363845;
            font-weight: 600;
        }
    }
}
.ref-invite>button{
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
    gap: 8px;
    svg{
        path{
            fill: #fff;
        }
    }
}
.referall-code{
    display: flex;
    gap: 12px;
    margin-bottom: 60px;
    align-items: flex-end;
}
</style>