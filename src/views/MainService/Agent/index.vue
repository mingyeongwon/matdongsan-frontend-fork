<template>
  <div class="AgentMap-container w-75 mx-auto">
    <div class="h-100">
      <form class="mt-2 w-100">
        <div class="d-flex justify-content-between px-4">
          <div class="d-flex">
            <input
              class="form-control me-2 w-auto"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchKeywordForAgent"
              @keyup.enter="searchInAgent"
            />
            <button
              class="btn btn-outline-success"
              type="button"
              @click="searchInAgent"
            >
              Search
            </button>
          </div>
         
        </div>
      </form>
      <ul class="nav nav-pills ms-4 mt-5">
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
          class="col-8 pe-4 ms-3 me-3 text-end align-self-center"
          v-if="route.params.id"
        >
          <i
            class="fa-solid fa-arrow-left fa-xl me-3"
            @click="backToAgentList"
          ></i>
        </div>
      </ul>
      <div class="d-flex p-3 h-100 w-100 mx-auto">
        <div class="property-list-box w-25 h-100">
          <div class="col mt-3" @click="backToPropertyList">
            <PropertyList type="agent" />
          </div>
        </div>
        <div class="right-box ms-4 col p-3 w-75" v-if="route.params.id">
          <div class="w-75">
            <div class="text-start test">
              <div class="">
                <img
                  src="https://photos.zillowstatic.com/h_l/ISjrsb703kq2pu1000000000.jpg"
                  height="100"
                  class="rounded-circle me-3"
                />
                <span class="fw-bold">김덕배의 러브하우스 중개소</span>
              </div>
            </div>
            <div class="">
              <DetailInfo />
            </div>
            <ul class="nav nav-pills ms-4">
              <li class="nav-item">
                <div
                  class="btn btn-sm text-dark fw-bold nav-link rounded-0"
                  :class="isCommentMenu ? selected : ''"
                  @click="subMenuCheck(true)"
                >
                  전체 매물
                </div>
              </li>
              <li class="nav-item">
                <div
                  class="btn btn-sm nav-link fw-bold text-dark rounded-0"
                  :class="isCommentMenu ? '' : selected"
                  @click="subMenuCheck(false)"
                >
                  후기
                </div>
              </li>
            </ul>

            <div>
              <div class="d-flex pe-3 pb-3">
                <div class="property-list-box w-25 h-100" v-if="isCommentMenu">
                  <div class="col mt-3">
                    <IndividualProductList />
                  </div>
                </div>
                <div class="right-box col" v-if="!isCommentMenu">
                  <AgentReview />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!route.params.id"
          class="right-box col p-3 w-75 mx-auto"
        >
          <KakaoMap page="agent" :position="agentPosition" class="h-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PropertyList from "@/components/Property/PropertyList.vue";
import KakaoMap from "@/components/KakaoMap.vue";
import DetailInfo from "./DetailInfo.vue";
import IndividualProductList from "./AgentProperty";
import AgentReview from "./AgentReview";

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
let isCommentMenu = ref(true);
const selected = "border-bottom border-4 border-warning ";
const searchKeywordForAgent = ref("");

function backToAgentList() {
  console.log("clicked");
  router.push("/Agent");
}

function subMenuCheck(check) {
  isCommentMenu.value = check;
}
function searchInAgent() {
  console.log(searchKeywordForAgent.value);
}

</script>

<style scoped>
/* .right-box{
    width:800px;
} */
</style>
