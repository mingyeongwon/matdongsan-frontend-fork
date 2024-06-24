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
  <CommonModal id="requiredInfo">필수 정보를 모두 입력하세요</CommonModal>

</template>

<script setup>
import PropertyInfo from "./PropertyInfo.vue";
import TradeInfo from "./TradeInfo.vue";
import AdditionalInfo from "./AdditionalInfo.vue";
import FacilityInfo from "./FacilityInfo.vue";
import PhotoUpload from "./PhotoUpload.vue";
import DetailDescription from "./DetailDescription.vue";
import CommonModal from "@/components/CommonModal.vue"
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let requiredInfoModal = null;

onMounted(() => {
  requiredInfoModal = new Modal(document.querySelector("#requiredInfo"));
});

function showLoginModal() {
  requiredInfoModal.show();
}
import { reactive, ref } from "vue";

const propertyInfo = reactive({
  address: "",
  addressDetail: "",
  postcode: "",
  paymentType: "",
  price: "",
  maintenance: "",
  maintenanceCost: "", // 빈 값 존재 가능하여 기본값 넣어줌
  moveIn: "",
  moveInDate: "", // 빈 값 존재 가능하여 기본값 넣어줌
  floor: "",
  totalFloor: "",
  elevator: "",
  parkingLot: "",
  heating: "",
  cooling: "",
  utility: [], // 빈 값 존재 가능
  title: "",
  content: "",
  lat: "",
  lon: "",
});

var validForm = ref([]);
function handleSubmit() {
  // 공용 관리비와 입주 가능 일자가 없으면 maintenanceCost, moveInDate는 none값을 넣어준다.
  if(propertyInfo.maintenance ==="No"){
    propertyInfo.maintenanceCost ="none";
  }

  if(propertyInfo.moveIn == "today"){
    propertyInfo.moveInDate = "none";
  }


  // 필수 값이 빈값이 아닌지 검사
  for(let key in propertyInfo){
    let value = propertyInfo[key];

    // propertyInfo의 속성 값이 배열이 아니면서 빈값이면 false반환
    if( !Array.isArray(value) && value === ""){
      validForm.value = false;
      console.log("false 반환");
      break;
    } else{
      validForm.value=true;
      console.log("모두 반환 됨");
    }
    console.log("들어가니",validForm.value);

    // 사진 들어와야 함

  }

  // 필수 값이 모두 들어오지 않으면
  if(!validForm.value){
    // 필수 값 입력하라는 모달 띄우기
    showLoginModal();
  }

  console.log("제출버튼", JSON.parse(JSON.stringify(propertyInfo)));
  console.log(validForm.value, "폼 유효성 결과");
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
