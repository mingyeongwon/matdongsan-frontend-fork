<template>
<div>
  <AppMenu/>

  <div>
    <router-view />
  </div>
  <CommonFooter/>
</div>
</template>

<script setup>
import AppMenu from "./components/AppMenu.vue";
import CommonFooter from "./components/CommonFooter.vue";
</script>

<style scoped></style>