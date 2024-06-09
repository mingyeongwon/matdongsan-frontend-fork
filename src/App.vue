<template>
<div>
  <AppMenu/>
  <div>
    <nav>
      <RouterLink to="/Product/ProductDetail" class="ms-2">상품 상세</RouterLink>
      <RouterLink to="/QnA/Ask" class="ms-2">문의 사항</RouterLink>
      <RouterLink to="/Payment/PaymentInfo" class="ms-2">결제 정보</RouterLink>
      <RouterLink to="/Payment/Payment" class="ms-2">결제</RouterLink>
      <RouterLink to="/Payment/OrderConfirmation" class="ms-2">결제 완료</RouterLink>
    </nav>
  </div>
  <div>
    <router-view />
  </div>
</div>
</template>

<script setup>
import AppMenu from "./components/AppMenu.vue";
</script>

<style scoped></style>