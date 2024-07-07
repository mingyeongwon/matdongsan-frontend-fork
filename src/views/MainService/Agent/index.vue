<template>
  <div class="AgentMap-container w-75 mx-auto">
    <div class="h-100">
      <form class="mt-2 w-100">
        <div class="d-flex justify-content-between px-4">
          <div class="d-flex">
            <input
              class="form-control me-2 w-auto"
              type="search"
              placeholder="부동산 검색"
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
        <div class="property-list-box w-25 overflow-auto">
          <div class="col mt-3">
            <PropertyList
              type="agent"
              @update:positionData="getAgentPositionData"
            />
          </div>
        </div>
        <div class="right-box ms-4 col p-3 w-75" v-if="route.params.id">
          <div class="w-75">
            <div class="text-start test">
              <div>
                <img
                  :src="agentProfile"
                  height="100"
                  width="100"
                  class="rounded-circle me-3"
                />
                <span class="fw-bold">{{ agent.abrand }}</span>
              </div>
            </div>
            <div>
              <DetailInfo :agentData="agent" :detailData="agentDetail" />
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
                <div
                  class="property-list-box w-100 h-auto"
                  v-if="isCommentMenu"
                >
                  <div class="col mt-3">
                    <IndividualProductList />
                  </div>
                </div>
                <div class="right-box col" v-if="!isCommentMenu">
                  <AgentReview
                    :reviewData="reviewData"
                    :pager="pagerData"
                    @update-agent-data="getAgentData"
                    @update:currentPage="handlePageChange"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!route.params.id"
          class="map-box right-box col p-3 ms-4 w-75 mx-auto"
        >
          <KakaoMap
            page="agentList"
            :positionList="agentPositionList"
          />
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
import agentAPI from "@/apis/agentAPI";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import memberAPI from "@/apis/memberAPI";

const agentProfile = ref(null);
const route = useRoute();
const router = useRouter();
const agent = ref({});
const agentDetail = ref({});
const agentPositionList = ref([]);
const reviewData = ref([]);
const pagerData = ref({});
const isCommentMenu = ref(true);
const selected = "border-bottom border-4 border-warning";
const searchKeywordForAgent = ref("");
const memberProfiles = ref({});
const currentPage = ref(0);
// 유저 프로필 사진 다운로드
const getMattach = async (memberId) => {
  try {
    const response = await memberAPI.memberAttachDownload(memberId);
    const blob = response.data;
    memberProfiles.value[memberId] = URL.createObjectURL(blob);
  } catch (error) {
    console.log(error);
  }
};

// 중개인 데이터 get 함수
const getAgentData = async (pageNo = 1) => {
  try {
    const response = await agentAPI.getAgentDataByNumber(route.params.id, pageNo);
    agent.value = response.data.agent;
    agentDetail.value = response.data.agentDetail;
    pagerData.value = response.data.pager;
    if (response.data.agentReviewList) {
      const reviews = response.data.agentReviewList;
      await Promise.all(
        reviews.map(async (review) => {
          await getMattach(review.arMnumber);
        })
      );
      reviewData.value = reviews.map((review) => ({
        ...review,
        profile: memberProfiles.value[review.arMnumber],
      }));
    }

    await getAttach(route.params.id);
  } catch (error) {
    console.log(error);
  }
};

//중개인 이미지 다운로드
const getAttach = async (argAnumber) => {
  try {
    const response = await agentAPI.agentAttachDownload(argAnumber);
    const blob = response.data;
    agentProfile.value = URL.createObjectURL(blob);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  if (route.params.id) {
    getAgentData();
  }
});

function getAgentPositionData(data) {
  agentPositionList.value = data;
}
const handlePageChange = (page) => {
  currentPage.value = page;
  getAgentData(page);
};
//params 값이 변경될때마다 agentData를 업데이트
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      getAgentData();
    }
  }
);

watch(
  () => agentPositionList.value.length,
  () => {
    console.log("Agent position list updated:", agentPositionList.value);
    // KakaoMap 컴포넌트는 이미 agentPositionList를 prop으로 받고 있으므로 자동으로 업데이트.
  },
  { deep: true }
);

function backToAgentList() {
  router.push("/Agent");
}

function subMenuCheck(check) {
  isCommentMenu.value = check;
}

function searchInAgent() {
  router.push({
    path: "/Agent",
    query: { keyword: searchKeywordForAgent.value },
  });
  searchKeywordForAgent.value = ""; // 검색 버튼에서 내용 사라지게
}
</script>

<style scoped>
.map-box {
  height: 708px;
}
.property-list-box {
  height: 708px;
}
.fa-arrow-left {
  cursor: pointer;
}
.fa-arrow-left:hover {
  color: #b8b8b8;
  transition: 0.25s;
}
</style>
