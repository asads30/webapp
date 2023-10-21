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
      <p>{{$route.params.id}}.</p>
      <p>В какой бы акции вы бы хотели принять участие? Выберите несколько вариантов</p>
    </div>
    <div class="checkbox-wrapper">
      <div style="width: 24px; height: 24px; align-self: center">
        <input type="checkbox" id="answer1" name="" value="answer1" v-model="checkBoxItem">
      </div>
      <label for="answer1" data-content="Час-два и стою на страже чтобы не пропускать «тех кому только спросить">Час-два и стою на страже чтобы не пропускать «тех кому только спросить стою на страже чтобы не пропускать «тех кому только спросить</label>
    </div>
    <div class="checkbox-wrapper">
      <div>
        <input type="checkbox" id="todo" name="" value="todo" v-model="checkBoxItem">
      </div>
      <label for="todo" data-content="Час-два и стою на страже чтобы не пропускать «тех кому только спросить">Час-два и стою на страже чтобы не пропускать «тех кому только спросить стою на страже чтобы не пропускать «тех кому только спросить</label>
    </div>
    <div class="next-btn-container">
      <button
          :disabled="!checkBoxItem.length"
          :class="checkBoxItem.length ? 'next-btn-active' : 'next-btn-disabled'"
          aria-label="Close modal"
          type="button"
          @click="$router.push({name: 'survey.seven', params:{id: 7}})"
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
  & .checkbox-wrapper{
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 12px;
    background: #34353F;
    padding: 10px;
    margin-bottom: 20px;
    & .question-title{
      color: #B3B7CE;
      font-family: Golos Text,sans-serif!important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input[type="checkbox"] {
      position: relative;
      align-self: center;
      width: 24px;
      height: 24px;
      border: 1px solid #B3B7CE;
      border-radius: 5px;
      appearance: none;
      outline: 0;
      cursor: pointer;
      transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 3px;
        left: 7px;
        width: 8px;
        height: 12px;
        border-style: solid;
        border-color: $white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
      }
      &:checked {
        color: $white;
        border-color:#0073FF;
        background: #0073FF;
        &::before {
          opacity: 1;
        }
        ~ label::before {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      }
    }
    & label {
      position: relative;
      cursor: pointer;
      color: #B3B7CE;
      font-family: Golos Text,sans-serif!important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
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

const checkBoxItem = ref([])

</script>