<template>
  <div class="product-container w-75">
    <h3 class="text-center fw-bold mt-3 mb-3">방내놓기</h3>
    <PropertyInfo :propertyInfo="propertyInfo" />
    <TradeInfo :propertyInfo="propertyInfo" @change="handleMaintenanceChange" />
    <AdditionalInfo :propertyInfo="propertyInfo" />
    <FacilityInfo :propertyInfo="propertyInfo" />
    <PhotoUpload @fileUpload="handleFileUpload" />
    <DetailDescription :propertyInfo="propertyInfo" />
    <button
      type="submit"
      class="mt-4 btn btn-warning btn-lg w-75 fw-bold"
      @click="handleSubmit"
    >
      등록하기
    </button>
  </div>
</template>

<script setup>
import PropertyInfo from "./PropertyInfo.vue";
import TradeInfo from "./TradeInfo.vue";
import AdditionalInfo from "./AdditionalInfo.vue";
import FacilityInfo from "./FacilityInfo.vue";
import PhotoUpload from "./PhotoUpload.vue";
import DetailDescription from "./DetailDescription.vue";

import { reactive } from "vue";

const propertyInfo = reactive({
  address: "",
  addressDetail: "",
  postcode: "",
  paymentType: "",
  price: "",
  maintenance: "",
  maintenanceCost: "",
  moveIn: "",
  moveInDate: "",
  floor: "지상",
  totalFloor: "",
  elevator: "",
  parkingLot: "",
  heating: "",
  cooling: "",
  utility: [],
  title: "",
  content: "",
  lat: "",
  lon: "",
});

function handleSubmit() {
  console.log(propertyInfo);
  // 여기에서 폼 데이터를 서버에 전송하거나 다른 로직을 처리
}

function handleFileUpload(event) {
  const files = event.target.files;
  console.log(files);
  // 여기에서 파일 업로드 로직을 처리
}

function handleMaintenanceChange() {
  if (propertyInfo.maintenance === "Yes") {
    propertyInfo.maintenanceCost = ""; // 관리비 입력 가능
  } else {
    propertyInfo.maintenanceCost = ""; // 관리비 입력 불가능
  }
}
</script>

<style scoped>
.product-container {
  margin-right: auto;
  margin-left: auto;
}
</style>
