<template>
  <div class="sidebar">
    <button class="btn" :style="mypageSidebarButtonsColor">내 정보</button>
    <button class="btn" :style="mypageSidebarButtonsColor">상품 문의</button>
    <button class="btn" :style="mypageSidebarButtonsColor">서비스 조회</button>
    <button class="btn" :style="mypageSidebarButtonsColor">
      <RouterLink to="/MyPage/MyQna" class="nav-link"> 1:1 문의내역 </RouterLink>
    </button>
    <button class="btn" :style="mypageSidebarButtonsColor">
      허위매물 신고내역
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mypageSidebarButtonsColor = ref("border-color : #2F4858");
</script>

<style scoped>
.sidebar {
  width: 20%;
  padding: 10px;
  border-right: 1px solid #ddd;
}

.btn {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
</style>
