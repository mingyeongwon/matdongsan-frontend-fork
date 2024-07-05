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
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </th>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[0] != null" :src="pattaches[0]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </td>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[1] != null" :src="pattaches[1]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </td>
        </tr>
        <tr>
          <th scope="row">
            <img
              class="img-fluid"
              v-if="pattaches[2] != null" :src="pattaches[2]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </th>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[3] != null" :src="pattaches[3]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
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
import DetailPhotoModal from "./DetailPhotoModal.vue";

let detailPhotoModal = null;

const props = defineProps([
  'pthumbnail', 'pattaches'
]);

console.log("pattaches in detailPhoto :", props.pattaches);

function showDetailPhotoModal() {
  detailPhotoModal.show();
}



onMounted(() => {
  detailPhotoModal = new Modal(document.querySelector("#DetailPhotoModal"));

});


</script>
<style scoped></style>
