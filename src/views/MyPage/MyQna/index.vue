<template>
  <div class="d-flex">
    <MyPageSidebar />
    <div class="titleNcontent">
      <Title />
      <Content />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Content from "./Content.vue";
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import Title from "./Title.vue";

</script>

<style scoped>
.titleNcontent {
  width: 80%;
  padding: 20px;
}
</style>
