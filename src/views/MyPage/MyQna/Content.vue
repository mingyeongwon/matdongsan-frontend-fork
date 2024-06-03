<template>
  <div class="border-bottom border-dark d-flex justify-content-between">
    <div>1:1 문의</div>
    <div>
      <button class="btn" :style="{ 'background-color': mainColor }">
        1:1 문의하기
      </button>
    </div>
  </div>
</template>

<script setup>
    import { ref } from "vue";

    const mainColor = ref("#FEC83F");
</script>

<style scoped>

</style>
