<script setup>
 import headerBBC from './components/headerBBC.vue';
 import footerBBC from './components/footerBBC.vue';
// import slideBBC from './components/slideBBC.vue';
</script>

<template>
  <headerBBC/>
  <router-view />
  <!-- <slideBBC/> -->
  <footerBBC/>
</template>

<style scoped>

</style>
