<template>
  <div class="overflow-hidden w-75 mx-auto">
    <div>
      <form class="mt-2 w-100">
        <div class="d-flex justify-content-between px-4">
          <div class="d-flex">
            <input
              class="form-control me-2 w-auto"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
          <div class="d-flex">
            <div>
              <select
                class="form-select w-auto ms-2"
                aria-label="Default select example"
              >
                <option selected>거래유형</option>
                <option value="1">월세</option>
                <option value="2">전세</option>
              </select>
            </div>
            <div>
              <select
                class="form-select w-auto ms-2"
                aria-label="Default select example"
              >
                <option selected>층수</option>
                <option value="1">반지하</option>
                <option value="2">지상</option>
                <option value="3">옥탑방</option>
              </select>
            </div>
            <div>
              <select
                class="form-select w-auto ms-2"
                aria-label="Default select example"
              >
                <option selected>가격</option>
                <option value="1">낮은순</option>
                <option value="2">높은순</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
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
        <RouterLink class="nav-link fw-bold text-dark" to="/Agent"
          >주변 부동산</RouterLink
        >
      </li>
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
        <div class="property-list-box w-25 h-100">
          <div class="col mt-3" @click="backToPropertyList">
            <PropertyList />
          </div>
        </div>
        <div class="right-box ms-4 col vh-100" v-if="status">
          <KakaoMap @getPropertyData="getPropertyData" />
        </div>
        <div class="right-box ms-4 col h-100 p-3" v-if="!status">
          <DetailPhoto />
          <DetailInfo />
          <Comment />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Comment from "./Comment.vue";
import PropertyList from "@/components/Property/PropertyList.vue";
import DetailPhoto from "./DetailPhoto.vue";
import DetailInfo from "./DetailInfo.vue";
import KakaoMap from "@/components/KakaoMap.vue";
import { ref, computed } from "vue";

let status = ref(true);
const propertyData = ref([]);

function backToPropertyList() {
  status.value = !status.value;
}

const getPropertyData = (data) => {
  propertyData.value = data;
  console.log(propertyData.value);
};
</script>

<style scoped>
.right-box {
  width: 800px;
}
</style>
