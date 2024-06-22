<template>
  <div>
    <div class="main-box text-start mt-5">
      <div class="info-box">
        <div class="w-50 fw-bold h4">기본정보</div>
        <hr class="border-1" />
        <div class="d-flex mt-2">
          <div class="col-6 mt-2 h6"><b>대표자명:</b> 김덕배</div>
          <div class="col-6 mt-2 h6"><b>중개등록번호: </b>12345-1234-12345</div>
        </div>
        <div class="d-flex mt-2">
          <div class="col-6 mt-2 h6"><b>대표번호: </b>02-1234-1234</div>
          <div class="col-6 mt-2 h6">
            <b>집이지 가입일: </b> 2024년 5월 12일
          </div>
        </div>
        <div class="d-flex mt-2">
          <div class="col-6 mt-2 h6"><b>사업자번호:</b> 123-12-21345</div>
          <div class="col-6 mt-2 h6"><b>거래완료된 방: </b> 9개</div>
        </div>
      </div>

      <div class="h5 fw-bold mt-5 w-100 text-center agentPosition">
        <h5 class="text-start fw-bold">부동산 위치</h5>
        <hr />
        <div class="h-100">
          <KakaoMap :position="agentPosition"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import KakaoMap from "@/components/KakaoMap.vue";
</script>

<style scoped>
.main-box {
  margin-left: auto;
  margin-right: auto;
}
.agentPosition{
  height: 300px;
  margin-bottom: 70px;
}

</style>
