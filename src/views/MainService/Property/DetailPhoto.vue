<template>
  <div class="position-relative">
    <table class="table table-borderless m-0">
      <tbody>
        <tr>
          <th scope="row" rowspan="2" class="w-50 ">
            <img
              class="img-fluid"
              v-if="pthumbnail != null" :src="pthumbnail"
            />
          </th>
          <td v-for="pattach in pattaches" :key="pattach">
            <img v-if="pattach != null" :src="pattach" class="img-fluid">
          </td>
          <td>
            <img
              class="img-fluid"
              src="https://photos.zillowstatic.com/fp/506243417f2983d94dcf8deecbee10d3-cc_ft_768.webp"
            />
          </td>
          <td>
            <img
              class="img-fluid"
              src="https://photos.zillowstatic.com/fp/2ab0729fe00ec391ecb064b786b102eb-cc_ft_768.webp"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <img
              class="img-fluid"
              src="https://photos.zillowstatic.com/fp/bcd02478396f1bc38c713a0b87e85c9b-cc_ft_768.webp"
            />
          </th>
          <td>
            <img
              class="img-fluid"
              src="https://photos.zillowstatic.com/fp/17c649bba13d15df3cccf0b91b52d9e0-cc_ft_768.webp"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <span class="btn btn-dark position-absolute bottom-0 end-0 m-3 opacity-75" @click="showDetailPhotoModal">사진 모두 보기</span>
  </div>
  <DetailPhotoModal id="DetailPhotoModal"/>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {Modal} from "bootstrap";
import { useRoute } from "vue-router";
import propertyAPI from "@/apis/propertyAPI";
import DetailPhotoModal from "./DetailPhotoModal.vue";

let detailPhotoModal = null;
const route = useRoute();

const pthumbnail = ref(null);
const pattaches = ref({});


function showDetailPhotoModal() {
  detailPhotoModal.show();
}

const props = defineProps({
  pnumber: {
    type: Number,
    required: true
  }
});

console.log("props.pnumber : " + props.pnumber);




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
    pattaches.value = URL.createObjectURL(response.data);
  } catch(error) {
      console.log(error);
  }
}

onMounted(() => {
  detailPhotoModal = new Modal(document.querySelector("#DetailPhotoModal"));

  if (route.params.id) {
    getPthumbnail(route.params.id);
    getPattaches(route.params.id);
  }
});


</script>
<style scoped></style>
