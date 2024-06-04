<template>
<div>
  <div>
    <nav>
      <RouterLink to="/MyPage/MyQna" class="me-2">1:1문의</RouterLink>
      <RouterLink to="/MyPage/MyComplaint" class="me-2">허위매물</RouterLink>
      <RouterLink to="/MyPage/MyInfo" class="me-2">내 정보</RouterLink>
    </nav>
  </div>
  <div>
    <router-view />
  </div>
</div>
</template>

<script setup>
</script>

<style scoped>
</style>
