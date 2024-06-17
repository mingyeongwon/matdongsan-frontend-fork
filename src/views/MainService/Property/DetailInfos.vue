<template>
  <div class="detailCss pt-5 ps-5">
    <div class="container">
      <div class="row row-cols-2 mt-4">
        <div class="d-flex col-7 w-100">
          <section class="col-4">
            <div class="mb-3">
              <h4 class="fw-bold">가격정보</h4>
            </div>
            <ul class="text-muted">
              <li class="listGrid mt-3">
                <div><p>전세</p></div>
                <div><p>1억5000</p></div>
              </li>
              <li class="listGrid mt-3">
                <div><p>관리비</p></div>
                <div><p>매월 5만원</p></div>
              </li>
              <li class="listGrid mt-3">
                <div><p>주차가능여부</p></div>
                <div><p>가능</p></div>
              </li>
            </ul>
          </section>
          <section class="col-4">
            <div>
              <h4 class="fw-bold">상세정보</h4>
            </div>
            <ul class="text-muted">
              <li class="listGrid mt-3">
                <div><p>해당층/건물층</p></div>
                <div><p>4층 / 6층</p></div>
              </li>
              <li class="listGrid">
                <div><p>전용/공급면적</p></div>
                <div>
                  <p>29.24m<sup>2</sup> / 34.87m<sup>2</sup></p>
                </div>
              </li>
              <li class="listGrid">
                <div><p>방향</p></div>
                <div><p>남동 (안방 기준)</p></div>
              </li>
              <li class="listGrid">
                <div><p>난방</p></div>
                <div><p>있음</p></div>
              </li>
              <li class="listGrid">
                <div><p>엘리베이터</p></div>
                <div><p>있음</p></div>
              </li>
              <li class="listGrid">
                <div><p>입주가능일</p></div>
                <div><p>즉시 입주 (협의 가능)</p></div>
              </li>
              <li class="listGrid">
                <div><p>최초등록일</p></div>
                <div><p>2024.05.14</p></div>
              </li>
            </ul>
          </section>
        </div>

        <section class="col-4 mb-3 ms-2 mt-5">
          <div>
            <h4 class="fw-bold mb-3">옵션</h4>
          </div>

          <div class="d-flex mb-3">
            <div class="col-2 ms-1 me-2">
              <img
                width="50"
                height="50"
                src="https://cdn-icons-png.flaticon.com/512/1941/1941761.png"
                alt=""
              />
              <p>에어컨</p>
            </div>
            <div class="col-2 me-2">
              <img
                width="50"
                height="50"
                src="https://cdn-icons-png.flaticon.com/512/1941/1941761.png"
                alt=""
              />
              <p>에어컨</p>
            </div>
            <div class="col-2 me-2">
              <img
                width="50"
                height="50"
                src="https://cdn-icons-png.flaticon.com/512/1941/1941761.png"
                alt=""
              />
              <p>에어컨</p>
            </div>
            <div class="col-2">
              <img
                width="50"
                height="50"
                src="https://cdn-icons-png.flaticon.com/512/1941/1941761.png"
                alt=""
              />
              <p>에어컨</p>
            </div>
          </div>
        </section>
        <section class="col-4 mt-5">
          <div>
            <h4 class="fw-bold">위치 및 주변시설</h4>
          </div>
          <div>
            <p>서울특별시 강서구 방화동 612-60</p>
          </div>
          <div>
            <img
              src="https://t1.daumcdn.net/roughmap/imgmap/32c02a6918295568d950c0a1a03969a11f62e4674cec9a988d017796b66c132c"
              alt=""
              width="400"
            />
          </div>
        </section>
        <section class="col-7 ps-4 mt-5">
          <div>
            <h4 class="fw-bold">상세설명</h4>
          </div>
          <div class="detailInfo">
            <h6 class="fw-bold">김포공항 출퇴근 도보 5분거리 강추 드려요</h6>
            <small>
              승무원들 초강추 김포공항 도보 5분거리 <br />★ 매물 특징 ★ <br />
              📢 공항시장역 9호선 3분거리<br />
              📢 도보 2분거리 버스정류장<br />
              📢 남향집으로 채광 좋습니다. <br />📢 큰 길과 인접하며 공동현관
              보안, cctv등 보안설비로 안전합니다. <br />
              📢 김포공항 인근으로 산책하기 좋습니다. <br />📢 승무원들 초강추
              매물 <br />📢 마트, 병원, 식당, 카페, 편의점 등 생활인프라
              좋습니다. <br /><br />★ 매물위치 및 주변환경 ★<br />
              - 위치 > 공항시장역9호선 송정역5호선 더블역세권 <br />- 옵션 >
              에어컨, 냉장고, 인덕션, 신발장, 전자도어락 등 <br />- 편의시설 >
              마트, 병원, 식당, 카페, 편의점 등
            </small>
          </div>
        </section>
        
        <section class="col-8 mt-5">
          <div>
            <h4 class="fw-bold mb-5">다른 방 더보기</h4>
          </div>
          <div class="ms-5 h-50 mb-5 d-flex row-cols-4 mx-auto w-100">
            <PropertyItem class="col" />
            <PropertyItem class="col" />
            <PropertyItem class="col" />
            <PropertyItem class="col" />
          </div>
        </section>

        <section class="col-7 ps-4 mt-5">
          <button class="reportBtn p-3 w-100 text-start fw-bold" @click="showReportFalseModal">허위매물 신고하기</button>
        </section>        
      </div>
    </div>
  </div>
  <ReportFalseModal id="ReportFalseModal"/>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {Modal} from "bootstrap";

import PropertyItem from "@/components/PropertyItem.vue";
import ReportFalseModal from "@/views/MainService/Property/ReportFalseModal.vue";

let reportFalseModal = null;

onMounted(() => {
  reportFalseModal = new Modal(document.querySelector("#ReportFalseModal"))
});

function showReportFalseModal() {
  reportFalseModal.show();
}
</script>

<style scoped>

.reportBtn {
  background-color: rgb(250, 250, 250);
  border: none;
  font-size: 14px;
}

.detailInfo {
  background-color: rgb(250, 250, 250);
  padding: 32px 24px;
}

.productNum {
  border: 1px solid rgb(101, 101, 101);
}

.detailCss {
  width: 1200px;
  margin: 0px auto;
}

.listGrid {
  display: grid;
  grid-template-columns: 160px minmax(0px, 1fr);
}
</style>
