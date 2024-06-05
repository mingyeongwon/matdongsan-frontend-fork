<template>
  <div>
    <AppMenu />
    <div>
      <nav>
        <RouterLink to="/Product/ProductDetail" class="ms-2"
          >상품 상세</RouterLink
        >
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
