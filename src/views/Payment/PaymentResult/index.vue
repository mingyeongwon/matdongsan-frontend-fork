<template>
  <div class="text-center">
    <h2 class="fw-bold mt-5">결제가 완료되었습니다.</h2>
    <h3 class="mt-3">{{ productName }}를 구매하셨습니다.</h3>
    <h3 class="mt-3">{{ date }}까지 사용하실 수 있습니다.</h3>
    <h3 class="mt-3">제품 : {{ productName }}</h3>
    <h3 class="mt-3" v-if="serviceType !== 'ad'">
      사용가능 횟수 : {{ count }} 남음
    </h3>
    <h3 class="mt-3" v-else>광고 마감 일자 : {{ expireDate }}</h3>
    <RouterLink class="btn btn-warning btn-lg w-25 mt-5" to="/">확인</RouterLink>
    <p class="info fw-semibold mt-2">
      *구매하신 내역은 마이페이지에서 확인하실 수 있습니다.
    </p>
  </div>
</template>

<script setup>
const count = 3;
const productName = "올인원 패키지";
const date = "2025/05/12";
let serviceType = "ad";
let expireDate = "2024.08.31";
</script>

<style scoped>
.info {
  color: #615fad;
}
</style>
