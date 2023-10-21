<template>
  <transition>
    <div class="wrapper">
  <div class="survey-status">
    <div class="question-stats">
      <p class="question-item">Вопрос {{$route.params.id}}/ </p>
      <p class="question-total">10</p>
    </div>
    <div class="myProgress">
      <div class="myBar" :style="{width: $route.params.id *10 + '%'}"></div>
    </div>
    <div class="questions">
      <p>{{ $route.params.id}}.</p>
      <p>В какой бы акции вы бы хотели принять участие? Выберите несколько вариантов</p>
    </div>
    <div class="radio-wrapper">
      <input class="radio-custom" id="radio-1" v-model="radioBox" value="1" name="radio" type="radio">
      <label for="radio-1" class="radio-label">Понравились призы от колса фортуны</label>
    </div>
    <div class="radio-wrapper">
      <input class="radio-custom" id="radio-2" v-model="radioBox" value="2" name="radio" type="radio">
      <label for="radio-2" class="radio-label">Понравились призы от колса фортуны</label>
    </div>
    <div class="next-btn-container">
      <button
          @click="nextPage"
          :disabled="!radioBox"
          :class="radioBox ? 'next-btn-active' : 'next-btn-disabled'"
          aria-label="Close modal"
          type="button"
      >
        Продолжить
      </button>
    </div>
  </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
$white: #fff;
$color1: #34353F;
$color2: #0073FF;

.survey-status{
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 6px 20px 20px;
  & .question-stats{
    p{
      margin: 0;
    }
    padding-bottom: 10px;
    display: flex;
    & .question-item{
      color: $white;
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
    background-color: #34353F;
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
  & .radio-wrapper{
    border-radius: 12px;
    background: #34353F;
    padding: 10px;
    margin-bottom: 20px;
    & .radio-custom{
      all: unset;
      opacity: 0;
    }
    .radio-custom {
      + .radio-label {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 12px;
        &:before {
          width: 26px;
          height: 24px;
          content: '';
          background-color: #34353F;
          border-radius: 100%;
          border: 1px solid darken(#9395A5, 25%);
          cursor: pointer;
          color: $white;
          font-family: Golos Text,sans-serif!important;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          &:before {
            color: $white;
            font-family: Golos Text,sans-serif!important;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            background-color: $color2;
            box-shadow: inset 0 0 0 2px $color1;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: $color2;
          }
        }
      }
      + .radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
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
import {useRouter} from "vue-router";

const router = useRouter();
const radioBox = ref(null)
const nextPage = ()=>{
  router.push({name: 'survey.five', params:{id: 5}})
}
</script>