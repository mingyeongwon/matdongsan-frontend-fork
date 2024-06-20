<template>
  <div class="d-flex vh-100 w-100 mx-auto">
    <MyPageSideBar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between ">
        <h4 class="col h4 mt-2 fw-bold">매물관리</h4>
        <div class="align-self-center">
          <select class="form-select" name="filter" id="">
            <option value="날짜순" selected>최신순</option>
            <option value="날짜순">오래된순</option>
            <option value="날짜순">거래완료</option>
            <option value="날짜순">거래중</option>
          </select>
        </div>
      </div>
      <hr />
      <table class="table mt-2">
        <thead>
          <tr>
            <th scope="col" class="text-center">매물번호</th>
            <th scope="col" class="text-center">대표사진</th>
            <th scope="col" class="text-center">제목 / 내용</th>
            <th scope="col" class="text-center">등록한 날짜</th>
            <th scope="col" class="text-center">매물 상태</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in properties" :key="property.id">
            <th scope="row" class="text-center align-middle">
              {{ property.id }}
            </th>
            <td class="align-middle text-center">
              <img src="@/assets/test.png" width="150" alt="매물 사진" />
            </td>
            <td class="align-middle text-muted">
              <small class="text-muted"> 원룸 </small>
              <div class="fw-bold">전세 7400</div>
              <small
                >반지층,20m<sup>2</sup>,관리비 5만, 전세대출가능
                보증보험가입가능</small
              >
            </td>
            <td class="fw-bold align-middle text-center">2024/06/12</td>
            <td class="fw-bold align-middle">
              <div class="d-flex flex-column">
                <button class="btn btn-warning btn-sm fw-bold mb-3" 
                v-if="checkTransactionCompletedData"> <!-- 거래 완료 버튼 누르면 버튼 안 보임 -->
                  수정
                </button>
                <button
                  class="soldOutBtn btn btn-sm fw-bold mb-3"
                  @click="showTransactionModal" 
                  :disabled="!checkTransactionCompletedData"> <!-- 거래 완료 버튼 누르면 버튼 비활성화 -->
                  거래완료
                </button>
                <button
                  :class="[
                    'btn btn-sm fw-bold',
                    property.isActive ? 'btn-danger' : 'btn-success',
                  ]"
                  @click="toggleActive(property)" v-if="checkTransactionCompletedData"
                >
                  {{ property.isActive ? "비활성화" : "활성화" }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <TransactionModal id="TransactionModal" @close="hideTransactionModal" />
  </div>
</template>

<script setup>
import MyPageSideBar from "@/components/MyPageSidebar.vue";
import TransactionModal from "./TransactionCompleted.vue";
import { onMounted, ref, computed } from "vue";
import { Modal } from "bootstrap";

let transactionModal = null;

onMounted(() => {
  transactionModal = new Modal(document.querySelector("#TransactionModal"));
});

function toggleActive(property) {
  property.isActive = !property.isActive;
}

const properties = ref([
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  // 추가 매물 데이터
]);

function showTransactionModal() {
  transactionModal.show();
}

const checkTransactionCompletedData = ref(true);

function hideTransactionModal() { // 거래 완료 확인 모달에서 거래 완료 버튼 클릭 시 실행되는 함수
  transactionModal.hide();
  checkTransactionCompletedData.value = false;
}


</script>

<style scoped>
.soldOutBtn {
  background-color: #2f4858;
  color: #fff;
}
.titleNcontent {
  width: 80%;
  padding: 20px;
}
</style>
