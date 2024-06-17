<template>
  <div class="AgentMap-container w-75 mx-auto">
    <div class="h-100">
      <ul class="nav nav-pills mt-5 ms-4">
        <li class="nav-item">
          <RouterLink
            class="btn btn-sm text-dark fw-bold nav-link"
            aria-current="page"
            to="/Property"
            >전체방</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link fw-bold text-dark border-bottom border-4 border-info rounded-0"
            to="/Agent"
            >주변 부동산</RouterLink
          >
        </li>
        <!-- 아이콘들 -->
        <div
          class="col pe-4 ms-3 me-3 text-end align-self-center"
          v-if="!status"
        >
          <i
            class="fa-solid fa-arrow-left fa-xl me-3"
            @click="backToPropertyList"
          ></i>
          <i class="fa-regular fa-heart fa-xl" style="color: #ff0000"></i>
        </div>
      </ul>
      <div class="d-flex p-3 h-100">
        <div
          class="property-list-box w-25 h-100 p-3 row row-cols-2 overflow-auto"
        >
          <div class="col w-50 mt-3">
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
          <div class="col w-50 mt-3">
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
          <div class="col w-50 mt-3">
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
        <div class="right-box ms-4 col p-3 w-75">
          <!-- <KakaoMap class="w-100 h-100" /> -->
          <div class="w-75">
            <div class="text-start test">
              <div class="">
                <img
                  src="https://photos.zillowstatic.com/h_l/ISjrsb703kq2pu1000000000.jpg"
                  height="100"
                  class="rounded-circle me-3"
                />
                <span class="fw-bold">희망하는 공인중개사 사무소</span>
              </div>
            </div>

            <DetailInfos />
            <IndividualProductList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PropertyItem from "@/components/PropertyItem.vue";
import KakaoMap from "@/components/KakaoMap.vue";
import DetailInfos from "./DetailInfos.vue";
import IndividualProductList from './AgentProperty'
</script>

<style scoped>
/* .right-box{
    width:800px;
} */

.AgentMap-container {
}
</style>
