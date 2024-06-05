<template>
<div>
  <AppMenu/>
  <div>
    <nav>
      <RouterLink to="/MyPage/MyQna" class="ms-2">1:1문의</RouterLink>
      <RouterLink to="/MyPage/MyComplaint" class="ms-2">허위매물</RouterLink>
      <RouterLink to="/MyPage/MyInfo" class="ms-2">내 정보</RouterLink>
      <RouterLink to="/Product/ProductDetail" class="ms-2">상품 상세</RouterLink>
      <RouterLink to="/QnA/ask" class="ms-2">문의 사항</RouterLink>
    </nav>
  </div>
  <div>
    <router-view />
  </div>
</div>
</template>

<script setup>
import AppMenu from "./components/AppMenu.vue"
</script>

<style scoped>
</style>
