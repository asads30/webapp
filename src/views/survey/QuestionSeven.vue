<template>
  <transition>
    <div class="wrapper">
  <div class="survey-status">
    <div class="question-stats">
      <p class="question-item">Вопрос {{$route.params.id}}/ </p>
      <p class="question-total">10</p>
    </div>
    <div class="myProgress">
      <div class="myBar" :style="{width: $route.params.id * 10 + '%'}"></div>
    </div>
    <div class="questions">
      <p>{{$route.params.id}}.</p>
      <p>В какой бы акции вы бы хотели принять участие?</p>
    </div>
    <div class="input-wrapper">
      <input ref="inputText" class="input-text" v-model="textItem" type="text" placeholder="Введите свой ответ...">
      <img @click="clearTextInput" src="@/assets/images/survey/cancel-var.svg" alt="">
    </div>
    <div class="next-btn-container">
      <button
          :disabled="!textItem"
          :class="textItem ? 'next-btn-active' : 'next-btn-disabled'"
          aria-label="Close modal"
          type="button"
          @click="$router.push({name: 'survey.eight', params:{id: 8}})"
      >
        Продолжить
      </button>
    </div>
  </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.survey-status{
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 6px 20px 20px;
  & .question-stats{
    p{
      margin: 0;
    }
    padding-bottom: 10px;
    display: flex;
    & .question-item{
      color: #FFF;
      font-family: Golos Text,sans-serif!important;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & .question-total{
      color: #B3B7CE;
      font-family: Golos Text,sans-serif!important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  & .myProgress {
    width: 100%;
    border-radius: 100px;
    background-color: #34353F;;
  }
  & .myBar {
    border-radius: 100px;
    height: 10px;
    background-color: #0073FF;
  }
  & .questions{
    padding-top: 20px;
    display: flex;
    gap: 5px;
    color: #FFF;
    font-family: Golos Text,sans-serif!important;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .input-wrapper{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    & .question-title{
      color: #B3B7CE;
      font-family: Golos Text,sans-serif!important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input[type=text] {
      all: unset;
      width: 100%;
      height: 40px;
      position: relative;
      color: #B3B7CE;
      font-family: Golos Text,sans-serif!important;
      font-size: 12px;
      padding-left:  12px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.20);
      background-color: #34353F;
      & :focus {
        all: unset;
        width: 100%;
        height: 40px;
        position: relative;
        color: #B3B7CE;
        font-family: Golos Text,sans-serif!important;
        font-size: 12px;
        padding-left:  12px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        background-color: #34353F;
      }
    }
  }
  & .next-btn-container{
    margin-top: auto;
    & .next-btn-active {
      border-radius: 10px;
      background: linear-gradient(0deg, #0073FF 0%, #00C2FF 100%), #FFF;
      height: 40px;
      line-height: 40px;
      border: 0;
      width: 100%;
      color: #FFFFFF;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
    }
    & .next-btn-disabled{
      border-radius: 10px;
      background: #2C2D35;
      height: 40px;
      border: 0;
      width: 100%;
      color:  #575965;
      text-align: center;
      font-family: Golos Text,sans-serif!important;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
}
</style>

<script setup>

import {ref} from "vue";

const textItem = ref(null)
const inputText = ref(null)

const clearTextInput = ()=> {
  textItem.value = null;
  inputText.value.focus();
}
</script>