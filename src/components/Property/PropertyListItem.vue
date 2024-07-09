<template>
  <RouterLink
    :to="{ path: `/Property/${favoriteData.id}` }"
    class="row text-decoration-none me-3 text-dark"
    v-if="props.favoriteData.length > 0"
  >
    <div class="border-bottom p-0">
      <div class="w-100 d-flex justify-content-center p-3">
        <div class="w-50">
          <img
            class=""
            width="140"
            height="140"
            src="https://cdn.ggumim.co.kr/cache/star/600/4f88ed25-b172-4ed7-b1cc-8e959c33d786.jpg"
            alt=""
          />
        </div>
        <div class="w-50">
          <div class="listInfo-box ms-2">
            <p class="listPrice mb-2 mt-2">
              <b
                >{{ favoriteData.pcategory }} {{ favoriteData.pdeposite }} /{{
                  favoriteData.prentalfee
                }}
              </b>
            </p>
            <p class="listInfo">
              {{ favoriteData.floor }}층, {{ favoriteData.size }}m<sup>2</sup>,
              관리비 {{ favoriteData.maintenance }}만
            </p>
            <p class="listInfo">{{ favoriteData.title }}</p>
            <p
              class="listMemberType text-center border border-danger text-danger mt-2 p-1"
            >
              방주인
            </p>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
  <div v-if="props.propertyData.pstatus!=='거래완료'">
    <RouterLink
    :to="{ path: `/Property/${propertyData.pnumber}` }"
    class="row text-decoration-none me-3 text-dark"
    v-if="props.propertyData.pnumber"
  >
    <div class="border-bottom p-0">
      <div class="w-100 d-flex justify-content-center p-3">
        <div class="w-50">
          <img class="" width="140" height="140" :src="pattach" alt="" />
        </div>
        <div class="w-50">
          <div class="listInfo-box ms-2">
            <p class="listPrice mb-2 mt-2">
              <b>
                {{ propertyData.pcategory }} {{ propertyData.pdeposite }}
                <span v-if="propertyData.prentalfee > 0">
                  /{{ propertyData.prentalfee }}

                 
                </span>
              </b>
            </p>
            <p class="listInfo">
              {{ propertyData.pfloor }}층,
              {{ propertyData.psize }}m<sup>2</sup>, 관리비
              {{ propertyData.pmaintenance }}만
            </p>
            <p class="listInfo">{{ propertyData.ptitle }}</p>
            <p
              class="listMemberType text-center border border-danger text-danger mt-2 p-1"
            >
              방주인
            </p>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
  </div>
 
  <RouterLink
    :to="{ path: `/Agent/${agentData.anumber}` }"
    class="row text-decoration-none me-3 text-dark"
    v-if="props.agentData.anumber"
  >
    <div class="border-bottom p-0">
      <div class="w-100 d-flex justify-content-center p-3">
        <div class="w-50">
          <img
            v-if="aattach"
            class=""
            width="140"
            height="140"
            :src="aattach"
            alt=""
          />
        </div>
        <div class="w-50">
          <div class="listInfo-box ms-2">
            <p class="listPrice mb-2 mt-2 ms-2">
              <b>{{ agentData.abrand }} </b>
            </p>
            <p class="listInfo ms-2">{{ agentData.aname }},</p>
            <p class="listInfo ms-2">{{ agentData.aphone }}</p>
            <p class="listInfo ms-2">댓글 ({{ agentDetailData.total }})</p>
            <p class="listInfo ms-2">
              평점

              <!-- 빈별 -->
              <span v-for="index in 5" :key="index">
                <span v-if="averageRating >= index">
                  <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                </span>
                <span v-else-if="averageRating >= index - 0.5">
                  <i
                    class="fa-solid fa-star-half-stroke"
                    style="color: #ffd43b"
                  ></i>
                </span>
                <span v-else>
                  <i class="fa-regular fa-star" style="color: #ffd43b"></i>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { ref, computed } from "vue";
import agentAPI from "@/apis/agentAPI";
import propertyAPI from "@/apis/propertyAPI";

const aattach = ref(null); // 중개인 첨부 사진
const pattach = ref(null); // 매물 첨부 사진
const agentDetailData = ref({ sum: 0, total: 0 }); // 리뷰 평점 합과 수
const props = defineProps({
  propertyData: {
    type: Object,
    default: () => ({
      pnumber: 0,
      pcategory: "월세",
      pdeposite: 3000,
      prentalfee: 20,
      ptitle: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
      pfloor: 1,
      psize: 25,
      pmaintenance: 8,
      detailInfo: "",
      pstatus:"",
    }),
  },
  favoriteData: {
    type: Object,
    default: () => ({
      id: 0,
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
  agentData: {
    type: Object,
    default: () => ({
      anumber: 0,
      abrand: "검은소와 중개소",
      aname: "",
      aphone: "",
    }),
  },
});

// 중개인 첨부 사진 가져오기
const getAttach = async (argAnumber) => {
  try {
    const response = await agentAPI.agentAttachDownload(argAnumber);
    const blob = response.data;
    aattach.value = URL.createObjectURL(blob);
  } catch (error) {
    console.log(error);
  }
};

// 중개인 리뷰 데이터 가져오기
const getAgentReviewData = async (argAnumber) => {
  try {
    const response = await agentAPI.getAgentReviewData(argAnumber);
    agentDetailData.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

// 매물 첨부 사진 가져오기
const getPttach = async (argPnumber) => {
  try {
    const response = await propertyAPI.propertyAttachDownload(argPnumber);
    const blob = response.data;
    pattach.value = URL.createObjectURL(blob);
  } catch (error) {
    console.log(error);
  }
};

// 평균 평점 계산
const averageRating = computed(() => {
  const total = agentDetailData.value.total;
  const sum = agentDetailData.value.sum;
  if (total == "0") {
    return "0.0";
  }
  return (sum / total).toFixed(1);
});

// 데이터가 변경될 때마다 API 호출
if (props.agentData.anumber) {
  getAttach(props.agentData.anumber);
  getAgentReviewData(props.agentData.anumber);
} else if (props.propertyData.pnumber) {
  getPttach(props.propertyData.pnumber);
}
</script>

<style scoped>
.listMemberType {
  width: 50px;
  font-size: 12px;
}

.listPrice {
  font-size: 18px;
}

.listInfo {
  font-size: 14px;
}

p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
}
</style>
