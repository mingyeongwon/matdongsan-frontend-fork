<template>
  <div class="product-container w-75">
    <h3 class="text-center fw-bold mt-3 mb-3">방내놓기</h3>
    <!-- 각 섹션 컴포넌트들 -->
    <PropertyInfo :propertyInfo="propertyInfo" />
    <TradeInfo :propertyInfo="propertyInfo" @maintenanceChange="handleMaintenanceChange" @paymentTypeChange="handlePaymentTypeChange" @moveInChange="handleMoveInChange"/>
    <AdditionalInfo :propertyInfo="propertyInfo" />
    <FacilityInfo :propertyInfo="propertyInfo" />
    <!-- 이미지 업로드 컴포넌트 -->
    <PhotoUpload @updateImages="handleImageUpdate" />
    <DetailDescription :propertyInfo="propertyInfo" />
    <!-- 폼 제출 버튼 -->
    <button type="submit" class="mt-4 btn btn-warning btn-lg w-75 fw-bold" @click="handleSubmit" :disabled="!validForm.value">
      등록하기
    </button>
  </div>
  <!-- 필수 정보 입력 안내 모달 -->
  <CommonModal id="requiredInfo">필수 정보를 모두 입력하세요</CommonModal>
</template>

<script setup>
import { reactive, ref } from "vue";
import PropertyInfo from "./PropertyInfo.vue";
import TradeInfo from "./TradeInfo.vue";
import AdditionalInfo from "./AdditionalInfo.vue";
import FacilityInfo from "./FacilityInfo.vue";
import PhotoUpload from "./PhotoUpload.vue";
import DetailDescription from "./DetailDescription.vue";
import CommonModal from "@/components/CommonModal.vue";
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let requiredInfoModal = null;

// 컴포넌트가 마운트될 때 모달 초기화
onMounted(() => {
  requiredInfoModal = new Modal(document.querySelector("#requiredInfo"));
});

// 필수 정보 입력 안내 모달 표시 함수
function showLoginModal() {
  requiredInfoModal.show();
}

// property
const property = ref({
  pdeposite: "",
  prentalfee: "",
  pfloortype: "",
  pfloor: "",
  psize: "",
  pmaintenance:  "",
  ptitle: "",
  pcategory: "",
  paddress: "",
  paddressdetail: "",
  ppostcode: "",
  platitude: "",
  plongitude: "",
});

const propertyDetail = ref({
  pdcontent: "",
  pdmonveindate: "",
  pdbath: "",
  pdlift: "",
  pdbed: "",
  pdlot: "",
  pdheating: "",
  pdcooling: "",
  pdmicrowave: "",
  pdburner: "",
  pdfridge: "",
  pdshoecloset: "",
  pdtv: "",
  pdcloset: "",
  pddinningtable: "",
  pdtable: "",
  pdwasher: "",
  pdinduction: ""
});

const pthumbnail = ref(null);
const ppattaches = ref([]);

// 부동산 정보 객체
const propertyInfo = reactive({
  address: "",
  addressDetail: "",// 디테일 부분은 빈 값이 들어와도 제출이 되어야함
  postcode: "",
  paymentType: "",
  deposite: "",
  price: "",
  maintenance: "",
  maintenanceCost: "",
  moveIn: "",
  moveInDate: "",
  floor: "",
  totalFloor: "",
  elevator: "",
  parkingLot: "",
  heating: "",
  cooling: "",
  utility: [],
  thumbnail: [],  // 썸네일 이미지를 저장할 배열
  detailImages: [],  // 디테일 이미지를 저장할 배열
  title: "",
  content: "",
  lat: "",
  lon: "",
});

const validForm = ref([]);

// 이미지 업데이트 핸들러
function handleImageUpdate({ single, multi }) {
  console.log("Received image data:", { single, multi });
  propertyInfo.thumbnail = single; // 썸네일 이미지 업데이트
  propertyInfo.detailImages = multi; // 디테일 이미지 업데이트
  console.log("Updated propertyInfo:", { thumbnail: propertyInfo.thumbnail, detailImages: propertyInfo.detailImages });
}

// 폼 제출 핸들러
function handleSubmit() {
  // 공용 관리비와 입주 가능 일자가 없으면 기본값 설정
  if (propertyInfo.maintenance === "No") {
    propertyInfo.maintenanceCost = "none";
  }

  if (propertyInfo.moveIn === "today") {
    propertyInfo.moveInDate = "none";
  }

  if (propertyInfo.paymentType === "전세") {
    propertyInfo.price = 0;
  }

  // 필수 값이 빈값이 아닌지 검사
  for (let key in propertyInfo) {
    let value = propertyInfo[key];
    if (!Array.isArray(value) && value === "") {
      validForm.value = false;
      console.log("false 반환");
      break;
    } else {
      validForm.value = true;
      console.log("모두 반환 됨");
    }
  }

  // 필수 값이 모두 들어오지 않으면 모달 표시
  if (!validForm.value) {
    showLoginModal();
  }

  console.log("제출버튼", JSON.parse(JSON.stringify(propertyInfo)));
  console.log(validForm.value, "폼 유효성 결과");
}

// 관리비 변경 핸들러
function handleMaintenanceChange() {
  propertyInfo.maintenanceCost = "";
}

// 결제 유형 변경 핸들러
function handlePaymentTypeChange() {
  propertyInfo.price = "";
}

// 입주 변경 핸들러
function handleMoveInChange() {
  propertyInfo.moveInDate = "";
}
</script>

<style scoped>
.product-container {
  margin-right: auto;
  margin-left: auto;
}
</style>
