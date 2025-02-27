<script setup lang="ts">
  import DoubleHelix from '../components/dna.vue';
  import HeaderComponent from '../components/headercomponent.vue';

  import {ref, inject} from 'vue'

  const menu = ref<boolean>(false);

  function toggleMenu() {
    menu.value = !menu.value
    console.log('toggle menu running', menu)
}
</script>

<template>
  <HeaderComponent @toggle-menu="toggleMenu"/>
  <main :class="{'mobile-menu-open': menu}">
    <section><h1>404 Not Found</h1></section>
  </main>
</template>

<style>
main {
  transition: 1s transform;
}
main.mobile-menu-open {
  transform: translateX(-80%)
}
</style>