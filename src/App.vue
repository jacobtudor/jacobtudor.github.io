<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import headercomponent from './components/headercomponent.vue';
import footercomponent from './components/footercomponent.vue';
import NavComponent from './components/navcomponent.vue';
</script>

<template>
  <!-- <headercomponent/> -->
  <!-- <NavComponent/> -->
  <RouterView />
  <footercomponent/>
</template>

<style lang="scss" scoped>

</style>
