<template>
  <div class="position-relative">
    <table class="table table-borderless m-0">
      <tbody>
        <tr>
          <th scope="row" rowspan="2" class="w-50 ">
            <img
              class="img-fluid"
              src="https://photos.zillowstatic.com/fp/f95a407a00e51654545dbec4d9a5400f-cc_ft_768.webp"
            />
          </th>
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
    <span class="btn btn-dark position-absolute bottom-0 end-0 m-3 opacity-75" @click="showDetailPhotosModal">사진 모두 보기</span>
  </div>
  <DetailPhotosModal id="DetailPhotosModal" @close="hideDetailPhotosModal" />
</template>

<script setup>

import {onMounted} from "vue";
import {Modal} from "bootstrap";

import DetailPhotosModal from "./DetailPhotosModal.vue";

let detailPhotosModal = null;

onMounted(() => {
  detailPhotosModal = new Modal(document.querySelector("#DetailPhotosModal"))
});

function showDetailPhotosModal() {
  detailPhotosModal.show();
}

function hideDetailPhotosModal() {
  detailPhotosModal.hide();
}

</script>
<style scoped></style>
