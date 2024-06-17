<template>
  <div class="overflow-hidden w-75 mx-auto">
    <ul class="nav nav-pills mt-5 ms-4">
      <li class="nav-item">
        <RouterLink
          class="btn btn-sm text-dark fw-bold nav-link border-bottom border-4 border-info rounded-0"
          aria-current="page"
          to="#"
          >전체방</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link fw-bold text-dark" to="#"
          >주변 부동산</RouterLink
        >
      </li>
          <!-- 아이콘들 -->
    <div class="col pe-4 ms-3 me-3 text-end align-self-center" v-if="!status">
      <i
        class="fa-solid fa-arrow-left fa-xl me-3"
        @click="backToPropertyList"
      ></i>
      <i class="fa-regular fa-heart fa-xl" style="color: #ff0000"></i>
    </div>
    </ul>

    <div>
      <div class="d-flex ps-3 pe-3 pb-3">
        <div class="property-list-box w-25 h-100 p-3 row row-cols-2">
          <div class="col w-50 mt-3" @click="backToPropertyList">
            <PropertyItem />
          </div>
          <div class="col w-50 mt-3">
            <PropertyItem />
          </div>
          <div class="col w-50 mt-3">
            <PropertyItem />
          </div>
          <div class="col w-50 mt-3">
            <PropertyItem />
          </div>
        </div>
        <!-- 카카오맵 -->
        <div class="right-box ms-4 col vh-100" v-if="status">
          <KakaoMap class="w-100" />
        </div>
        <div class="right-box ms-4 col h-100 p-3" v-if="!status">
          <DetailPhotos />
          <DetailInfos />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PropertyItem from "@/components/PropertyItem.vue";
import DetailPhotos from "./DetailPhotos.vue";
import DetailInfos from "./DetailInfos.vue";
import KakaoMap from "@/components/KakaoMap.vue";
import { ref } from "vue";

let status = ref(true);

function backToPropertyList() {
  status.value = !status.value;
}
</script>

<style scoped>
.right-box {
  width: 800px;
}
</style>
