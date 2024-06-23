<template>
  <div class="list-box mt-5 w-100">
    <div class="justify-content-center">
      <!-- <h5 class="fw-bold">전체매물</h5>
      <hr /> -->
      <div class="row row-cols-4 justify-content-start mb-5 mx-auto ms-3 w-100">
        <RouterLink class="col-3 text-decoration-none text-dark me-4 w-auto" :to="{path:`/Property/${id}`}">
          <img
            src="https://photos.zillowstatic.com/fp/0cb395938d3ec6260d3e468a2a8b5894-cc_ft_576.webp"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">테스트</h5>
          <small>여기가 집설명</small>
        </RouterLink>
     
 
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const id = ref(0);
id.value=1;
</script>

<style scoped>
.list-box {
  margin-right: auto;
  margin-left: auto;
}
</style>
