<template>
  <div class="overflow-hidden w-75 mx-auto">
    <PropertyFilter class="w-100 mt-2"/>
    <ul class="nav nav-pills mt-3 ms-4">
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
          >전체 부동산</RouterLink
        >
      </li>
      <div
        class="col pe-4 ms-3 me-3 text-end align-self-center"
        v-if="route.params.id"
      >
        <i
          class="fa-solid fa-arrow-left fa-xl me-3"
          @click="backToPropertyList"
        ></i>
        <i v-if="store.getters.getUserRole === 'MEMBER'"
          :class="[
            isHovered ? 'fa-solid fa-heart' : 'fa-regular fa-heart',
            'fa-xl',
            'heart-icon',
            isClicked ? 'fa-solid fa-heart' : 'fa-regular fa-heart',
            'fa-xl',
            'heart-icon',
          ]"
          style="color: #ff0000"
          @click="isLiked"
          @mouseover="toggleHover(true)"
          @mouseleave="toggleHover(false)">
        </i>
      </div>
    </ul>

    <div>
      <div class="d-flex ps-3 pe-3 pb-3 pt-3">
        <div class="property-list-box w-25 overflow-auto">
          <div class="col mt-3">
            <PropertyList type="property" @update:propertyPositionData="getPropertyPositionData" :propertyPosition="propertyClusterPosition" />
          </div>
        </div>
        <div class="map-box right-box col p-3" v-if="!route.params.id">
          <KakaoMap page="propertyList" :propertyPositionList="propertyPositionList" @getPropertyClusterPosition="getPropertyClusterPosition"/>
        </div>
        <div class="right-box col h-100 p-3" v-if="route.params.id">
          <DetailPhoto :pthumbnail="pthumbnail" :pattaches="pattaches"/>
          <DetailInfo :property="property" :propertyDetail="propertyDetail" />
          <ReportFalse :pnumber="route.params.id"/>
          <Comment :userComment="userComment" @update-property-data="getPropertyData" @get:commentFilter="getPropertyCommentFilter" />
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
import ReportFalse from "@/views/MainService/Property/ReportFalse.vue";
import propertyAPI from "@/apis/propertyAPI";
import { onMounted, ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const store = useStore();
import memberAPI from "@/apis/memberAPI";
import agentAPI from "@/apis/agentAPI";

let status = ref(true);

const property = ref({});
const propertyDetail = ref({});
const propertyPhotos = ref([]);
const userComment = ref([]); // 문의 댓글 
const pthumbnail = ref(null);
const pattaches = ref([]);
const propertyPositionList = ref([]);
const userProfiles = ref({});
const userCommonData = ref({});
const member = ref({});
const agent = ref({});
const propertyCommentFilter = ref("");
const propertyClusterPosition = ref({ lat: "", lng: "" });

const searchKeyword = ref("");

// 뒤로 가기
function backToPropertyList() {
  router.push("/Property");
}

// /components/PropertyList에서 가져온 PropertyList데이터
function getPropertyPositionData(data) {
  propertyPositionList.value = data;
}

// 좋아요 아이콘 변경 상태
const isHovered = ref(false);
const isClicked = ref(false);

// 좋아요
const isLiked = () => {
  isClicked.value = !isClicked.value;
  if (isClicked.value) {
    postLikeProperty();
  } else {
    cancelLikeProperty();
  }
};

const toggleHover = (state) => {
  isHovered.value = state;
};

// 좋아요 데이터 전송
const postLikeProperty = async () => {
  try {
    await propertyAPI.likeProperty(route.params.id);
  } catch (error) {
    console.log(error);
  }
};

// 좋아요 취소 데이터 전송
const cancelLikeProperty = async () => {
  try {
    await propertyAPI.cancelLikeProperty(route.params.id);
  } catch (error) {
    console.log(error);
  }
};

// 좋아요 여부
const isPropertyLiked = async () => {
  try {
    const response = await propertyAPI.isPropertyLiked(route.params.id);
    isClicked.value = response.data; // 서버에서 boolean 값 반환
  } catch (error) {
    console.log(error);
  }
};

// 기존 댓글 작성 유저 정보 가져오기
const getUserDataByUnumber = async (unumber) => {
  try {
    const response = await memberAPI.getUserDataByUnumber(unumber);
    userCommonData.value = response.data.userCommonData;
    member.value = response.data.member;
    agent.value = response.data.agent;
    if (userCommonData.value.urole === "MEMBER") {
      const response = await memberAPI.memberAttachDownload(member.value.mnumber);
      const blob = response.data;
      userProfiles.value[unumber] = URL.createObjectURL(blob);
    } else {
      const response = await agentAPI.agentAttachDownload(agent.value.anumber);
      const blob = response.data;
      userProfiles.value[unumber] = URL.createObjectURL(blob);
    }
  } catch (error) {
    console.log(error);
  }
};

// property 데이터 가져오기
const getPropertyData = async () => {
  try {
    const response = await propertyAPI.getPropertyData(route.params.id, propertyCommentFilter.value);
    property.value = response.data.totalProperty.property;
    propertyDetail.value = response.data.totalProperty.propertyDetail;
    propertyPhotos.value = response.data.propertyPhotos;

    pattaches.value = [];

    getPthumbnail(route.params.id);

    await Promise.all(propertyPhotos.value.map(async (photo) => {
      await getPattaches(photo.ppnumber);
    }));

    if (response.data.propertyCommentList) {
      const comments = response.data.propertyCommentList;
      await Promise.all(
        comments.map(async (comment) => {
          await getUserDataByUnumber(comment.ucUnumber);
        })
      );
      userComment.value = comments.map((comment) => ({
        ...comment,
        profile: userProfiles.value[comment.ucUnumber],
      }));
    }

  } catch (error) {
    console.log(error);
  }
};

// 썸네일 사진 출력
const getPthumbnail = async (pnumber) => {
  try {
    const response = await propertyAPI.propertyAttachDownload(pnumber);
    pthumbnail.value = URL.createObjectURL(response.data);
  } catch (error) {
    console.log(error);
  }
};

// 디테일 사진 출력
const getPattaches = async (ppnumber) => {
  try {
    const response = await propertyAPI.detailPropertyAttachDownload(ppnumber);
    const pattach = URL.createObjectURL(response.data);
    pattaches.value.push(pattach);
  } catch (error) {
    console.log(error);
  }
};

function getPropertyCommentFilter(data) {
  propertyCommentFilter.value = data;
}

// 매물 포지션 리스트 가져오기
function getPropertyClusterPosition(lat, lng) {
  if (propertyClusterPosition.value.lat === lat && propertyClusterPosition.value.lng === lng) {
    return;
  }

  propertyClusterPosition.value = { lat, lng };

  console.log(propertyClusterPosition.value.lat);
  console.log(propertyClusterPosition.value.lng);
}

onMounted(() => {
  if (route.params.id) {
    getPropertyData();
    isPropertyLiked();
  }
});

// params로 넘어온 pnumber 
watch(() => route.params.id, (newPnumber) => {
  if (newPnumber) {
    propertyPhotos.value = [];
    pattaches.value = [];
    propertyCommentFilter.value = "desc";
    getPropertyData();
    isPropertyLiked();
  }
});

watch(() => propertyCommentFilter.value, () => {
  getPropertyData();
});

watch(
  () => propertyPositionList.value.length,
  () => {
    console.log("Property position list updated:", propertyPositionList.value);
  },
  { deep: true }
);
watch(
  () => propertyClusterPosition.value,
  () => {
    console.log("Property position list updated:", propertyClusterPosition.value);
  },
  { deep: true }
);
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
