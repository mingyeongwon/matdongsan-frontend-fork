<template>
  <div>
    <div class="main-box text-start mt-5">
      <div class="info-box">
        <div class="w-50 fw-bold h4">기본정보</div>
        <hr class="border-1" />
        <div class="d-flex mt-2">
          <div class="col-6 mt-2 h6"><b>대표자명:</b> {{props.agentData.aname}}</div>
        </div>
        <div class="d-flex mt-2">
          <div class="col-6 mt-2 h6"><b>대표번호: </b>{{props.agentData.aphone}}</div>
          <div class="col-6 mt-2 h6">
            <b>맛동산 가입일: </b> 2024년 5월 12일
          </div>
        </div>
        <div class="d-flex mt-2">
          <div class="col-6 mt-2 h6"><b>사업자번호:</b> {{props.detailData.adbrandnumber}}</div>
          <div class="col-6 mt-2 h6"><b>거래완료된 방: </b> 9개</div>
        </div>
      </div>

      <div class="h5 fw-bold mt-5 w-100 text-center agentPosition">
        <h5 class="text-start fw-bold">부동산 위치</h5>
        <hr />
        <div class="h-100">
          <KakaoMap :position="agentPosition" page="agent"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import KakaoMap from "@/components/KakaoMap.vue";

const props = defineProps(["detailData","agentData"]);
const agentPosition = ref({ lat: 37.561110808242056, lng: 126.9831268386891 }); // 실제 좌표로 변경
</script>

<style scoped>
.main-box {
  margin-left: auto;
  margin-right: auto;
}
.agentPosition {
  height: 300px;
  margin-bottom: 70px;
}

</style>
