<template>
  <RouterLink to="#" class="row text-decoration-none me-3">
    <div class="col-sm-1 card border border-0 w-" style="width: 18rem">
      <img
        :src="require('@/assets/test.png')"
        class="card-img"
        alt="Property Image"
      />
      <div class="card-body p-0 pt-2">
        <h5 class="card-title fw-bold text-start">{{ propertyData.title }}</h5>
        <p class="card-text text-truncate">
          {{ propertyData.floor }}층, {{ propertyData.size }}m<sup>2</sup>,
          관리비 {{ propertyData.maintenance }}만 <br />
          {{ propertyData.detailInfo }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  propertyData: {
    type: Object,
    default: () => ({
      title: "",
      floor: 0,
      size: 0,
      maintenance: 0,
      detailInfo: "",
    }),
  },
});
</script>

<style scoped></style>
