<template>
  <RouterLink to="#" class="row text-decoration-none me-3 text-dark">
    <!-- <div class="col-sm-1 card border border-0" style="width: 18rem">
      <img
        :src="require('@/assets/test.png')"
        class="card-img"
        alt="Property Image"
      />
      <div class="card-body p-0 pt-2">
        <h5 class="card-title fw-bold text-start">{{propertyData.pcategory}} {{ propertyData.pdeposite }}/{{ propertyData.prentalfee }}</h5>
        <p class="card-text text-truncate">
          {{ propertyData.floor }}층, {{ propertyData.size }}m<sup>2</sup>,
          관리비 {{ propertyData.maintenance }}만 <br />
          {{ propertyData.detailInfo }}
        </p>
      </div>
    </div> -->
    <li class="border-bottom p-0">
      <div class="w-100 d-flex justify-content-center p-3">
        <div class="">
          <img class="" width="140" height="140" src="https://cdn.ggumim.co.kr/cache/star/600/4f88ed25-b172-4ed7-b1cc-8e959c33d786.jpg" alt="">
        </div>
        <div class="w-100 ms-3">
          <p class="listPrice"><b>{{propertyData.pcategory}} {{ propertyData.pdeposite }}/{{ propertyData.prentalfee }}</b></p>
          <p class="listInfo">{{ propertyData.floor }}층, {{ propertyData.size }}m<sup>2</sup>, 관리비 {{ propertyData.maintenance }}만</p>
          <p class="listInfo">{{ propertyData.title }}</p>
        </div>
      </div>
    </li>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  propertyData: {
    type: Object,
    default: () => ({
      pcategory: "월세",
      pdeposite: 3000,
      prentalfee: 20,
      title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
      floor: 1,
      size: 25,
      maintenance: 8,
      detailInfo: "",
    }),
  },
});
</script>

<style scoped>
.listPrice {
  font-size: 18px;
}

.listInfo {
  font-size: 14px;
}

li {
  list-style: none;
}

</style>
