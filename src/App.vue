<template>
<div>
  <div>
    <MyPageSidebar />
  </div>
  <div>
    <router-view />
  </div>
</div>
</template>

<script setup>
import MyPageSidebar from './components/MyPageSidebar.vue';
</script>

<style scoped>
</style>
