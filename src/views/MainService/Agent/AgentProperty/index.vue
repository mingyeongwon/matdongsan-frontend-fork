<template>
  <div class="list-box mt-5 w-100">
    <div class="justify-content-center">
      <div class="row row-cols-4 justify-content-start mb-5 mx-auto ms-3 w-100" v-if="agentProperiesData.length > 0">
        <RouterLink
          v-for="(property, index) in agentProperiesData"
          :key="index"
          class="col-3 text-decoration-none text-dark me-4 w-auto"
          :to="{ path: `/Property/${property.pnumber}` }"
        >
          <img
            :src="getPropertyThumbnail(property.pnumber)"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">{{ property.ptitle }} {{ property.pcategory}} {{ property.prentalfee }} </h5>
          <small>{{ property.pcontents }}</small>
        </RouterLink>
      </div>
      <div class="mb-5 mx-auto ms-3 w-100 text-center" v-else>
        <img src="@/assets/free-icon-real-estate-1072301.png" width="50" alt="">
        <h5 class="mt-3 fw-bold">아직 등록된 매물이 없습니다.</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import agentAPI from '@/apis/agentAPI';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import propertyAPI from '@/apis/propertyAPI';

const route = useRoute();
const agentProperiesData = ref([]);
const pthumbnails = ref({}); // 썸네일 데이터를 객체로 저장

// 중개인이 올린 매물 리스트 가져오는 함수
async function getPropertiesByAgent() {
  try {
    const response = await agentAPI.getAgentProperty(route.params.id, 1);
    agentProperiesData.value = response.data.agentProperty;
    console.log("매물 데이터: ", agentProperiesData.value);
    agentProperiesData.value.forEach(property => {
      getPthumbnail(property.pnumber);
    });
  } catch (error) {
    console.log(error);
  }
}

// 썸네일 사진 출력
const getPthumbnail = async (pnumber) => {
  try {
    const response = await propertyAPI.propertyAttachDownload(pnumber);
    if (response) {
      pthumbnails.value[pnumber] = URL.createObjectURL(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

// 썸네일 URL 가져오기
const getPropertyThumbnail = (pnumber) => {
  return pthumbnails.value[pnumber];
};

onMounted(() => {
  getPropertiesByAgent();
});

watch(() => route.params.id, () => {
  getPropertiesByAgent();
});
</script>

<style scoped>
.list-box {
  margin-right: auto;
  margin-left: auto;
}
</style>
