<template>
  <div class="overflow-hidden w-75 mx-auto">
    <div>
      <form class="mt-2 w-100">
        <div class="d-flex justify-content-end px-4 w-100">
          <div class="d-flex ">
            <input
              class="form-control me-2 w-auto"
              type="search"
              placeholder="주소 검색"
              aria-label="Search"
              v-model="searchKeyword"
              @keyup.enter="searchInProperty"
            />
            <button
              class="btn btn-outline-success"
              type="button"
              @click="searchInProperty"
            >
              Search
            </button> 
          </div>
          <div class="d-flex">
            필터
          </div>
        </div>
      </form>
    </div>
    <PropertyFilter class="w-100 mt-2"/>
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
      <div
        class="col pe-4 ms-3 me-3 text-end align-self-center"
        v-if="route.params.id"
      >
        <!-- 뒤로가기 아이콘 -->
        <i
          class="fa-solid fa-arrow-left fa-xl me-3"
          @click="backToPropertyList"
        ></i>

        <!-- 찜하기 아이콘 -->
        <i
          :class="[
            isHovered ? 'fa-solid fa-heart' : 'fa-regular fa-heart',
            'fa-xl',
            'heart-icon',
          ]"
          style="color: #ff0000"
          @click="liked(propertyData.id)"
          @mouseover="toggleHover(true)"
          @mouseleave="toggleHover(false)"
        ></i>

        <!-- 찜하기 취소 -->
        <!-- <i class="fa-solid fa-heart" style="color: #ff0000;" @click="unlike"></i> -->
      </div>
    </ul>

    <div>
      <div class="d-flex ps-3 pe-3 pb-3 pt-3">
        <div class="property-list-box w-25 overflow-auto">
          <div class="col mt-3">
            <PropertyList type="property" class="" />
          </div>
        </div>
        <div class="map-box right-box col p-3" v-if="!route.params.id">
          <KakaoMap @getPropertyData="getPropertyData" />
        </div>
        <div class="right-box col h-100 p-3" v-if="route.params.id">
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
import PropertyFilter from "./PropertyFilter.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = useStore();

const propertyData = ref([]);
let status = ref(true);

// 검색
const searchKeyword = ref("");

function searchInProperty() {
  // vuex
  store.dispatch("search/updateSearchKeyword", {
    searchKeyword: searchKeyword.value,
  });
  router.push({
    path: "/Property",
    query: { keyword: searchKeyword.value },
  });
  searchKeyword.value = ""; // 검색 버튼에서 내용 사라지게
}

function backToPropertyList() {
  router.push("/Property");
}

const getPropertyData = (data) => {
  propertyData.value = data;
  console.log(propertyData.value);
};

const liked = (productId) => {
  console.log("productId : " + productId);
  console.log(route.params.id);
  store.dispatch("like/addToWishList", { productId });
};

// 좋아요 아이콘 변경 상태
const isHovered = ref(false);

const toggleHover = (state) => {
  isHovered.value = state;
};
</script>

<style scoped>
.right-box {
  width: 800px;
}
.map-box {
  height: 708px;
}
.fa-arrow-left {
  cursor: pointer;
}
.fa-arrow-left:hover {
  cursor: pointer;
  color: rgb(157, 157, 53);
}
.fa-heart {
  cursor: pointer;
}
.heart-icon {
  transition: all 0.3s ease;
}
.property-list-box {
  height: 708px;
}
</style>
