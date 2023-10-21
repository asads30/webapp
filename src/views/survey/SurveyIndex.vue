<template>
  <div style="height: 70px; max-height: 70px">
  <Header :left="false" :right="false" :center="true" centerText="Опрос Click Акция"/>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
  .wrapper {
    overflow-x: auto;
    height: calc(100vh - 80px);
    max-height: calc(100vh - 80px);
    width: 100%;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.6s ease-out;
  }
  .slide-enter-to {
    position: absolute;
    right: 0;
  }
  .slide-enter-from {
    position: absolute;
    right: -100%;
  }
  .slide-leave-to {
    position: absolute;
    left: -100%;
  }
  .slide-leave-from {
    position: absolute;
    left: 0;
  }
</style>

<script setup>
import Header from "@/components/Header.vue";
</script>