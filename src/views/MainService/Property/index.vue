<template>
  <div class="overflow-hidden w-75 mx-auto">
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
          <DetailPhoto :pthumbnail = "pthumbnail" :pattaches = "pattaches"/>
          <DetailInfo />
          <ReportFalse :pnumber = "route.params.id"/>
          <Comment :userComment = "userComment" />
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
import { param } from "jquery";

const route = useRoute();
const router = useRouter();
const store = useStore();

let status = ref(true);

const property = ref({});
const propertyDetail = ref({});
const propertyPhotos = ref([]);
const userComment = ref([]); // 문의 댓글 
const pthumbnail = ref(null);
const pattaches = ref([]);



// 검색
const searchKeyword = ref("");

// 뒤로 가기
function backToPropertyList() {
  router.push("/Property");
}

// property 데이터
const getPropertyData = async (pnumber) => {
  try {
    const response = await propertyAPI.getPropertyData(pnumber);
    property.value = response.data.totalProperty.property;
    propertyDetail.value = response.data.totalProperty.propertyDetail;
    propertyPhotos.value = response.data.propertyPhotos;

    pattaches.value = [];

    getPthumbnail(pnumber);

    await Promise.all(propertyPhotos.value.map(async (photo) => {
      await getPattaches(photo.ppnumber);
    }));

    if(response.data.propertyCommentList) {
      const comments = response.data.propertyCommentList;
      userComment.value = comments.map((comment) => ({
        ...comment,
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
  } catch(error) {
      console.log(error);
  }
}


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

onMounted(() => {
  if (route.params.id) {
    getPropertyData(route.params.id);
  }
});

// params로 넘어온 pnumber 
watch(() => route.params.id, (newPnumber) => {
  if(newPnumber) {
    propertyPhotos.value = [];
    pattaches.value = [];
    // propertyCommentList.value = [];
    getPropertyData(newPnumber);
    console.log("newPnumber : " + newPnumber);

  }
});


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
